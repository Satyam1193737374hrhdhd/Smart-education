/**
 * Project Model & Data Access Layer
 * Manages collaboration project pitches and student team applications.
 */

const { supabase } = require('../config/supabase');

class Project {
    /**
     * Retrieve all projects
     */
    static async getAll(roleFilter = null, categoryFilter = null) {
        const { data, error } = await supabase
            .from('collab_projects')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        let projects = data || [];

        if (roleFilter && roleFilter !== 'All') {
            projects = projects.filter(p => 
                Array.isArray(p.open_roles) && 
                p.open_roles.some(r => r.toLowerCase().includes(roleFilter.toLowerCase()))
            );
        }

        if (categoryFilter && categoryFilter !== 'All') {
            projects = projects.filter(p => p.category === categoryFilter);
        }

        return projects;
    }

    /**
     * Retrieve project by ID with applications
     */
    static async getById(projectId) {
        const { data: project, error } = await supabase
            .from('collab_projects')
            .select('*')
            .eq('id', projectId)
            .single();

        if (error) throw error;

        const { data: applications } = await supabase
            .from('project_applications')
            .select('*')
            .eq('project_id', projectId);

        return {
            ...project,
            applications: applications || []
        };
    }

    /**
     * Create a new project pitch
     */
    static async create(projectData) {
        const newProject = {
            id: projectData.id || `proj-${Date.now()}`,
            title: projectData.title,
            pitch: projectData.pitch,
            category: projectData.category || 'Web Development',
            tech_stack: projectData.tech_stack || ['React', 'JavaScript'],
            open_roles: projectData.open_roles || ['Contributor'],
            team_size: 1,
            max_team_size: projectData.max_team_size || 4,
            members: projectData.members || [{ name: 'John Student', role: 'Project Lead', avatar: 'images/pic-2.jpg' }],
            status: 'recruiting',
            created_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('collab_projects')
            .insert(newProject)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    /**
     * Submit an application to join a project
     */
    static async apply(projectId, applicationData) {
        const newApplication = {
            project_id: projectId,
            user_id: applicationData.user_id || 'user-1',
            user_name: applicationData.user_name || 'Student',
            user_avatar: applicationData.user_avatar || 'images/pic-2.jpg',
            role_applied: applicationData.role_applied || 'Contributor',
            status: 'pending'
        };

        const { data: appData, error: appError } = await supabase
            .from('project_applications')
            .insert(newApplication)
            .select()
            .single();

        if (appError) throw appError;

        // Increment team size if not full
        const { data: proj } = await supabase
            .from('collab_projects')
            .select('team_size, max_team_size')
            .eq('id', projectId)
            .single();

        if (proj && proj.team_size < proj.max_team_size) {
            await supabase
                .from('collab_projects')
                .update({ team_size: proj.team_size + 1 })
                .eq('id', projectId);
        }

        return appData;
    }
}

module.exports = Project;
