/**
 * Academic Resource Model & Data Access Layer
 */

const { supabase } = require('../config/supabase');

class Resource {
    /**
     * Retrieve all resources
     */
    static async getAll(category = null, search = null) {
        let query = supabase
            .from('resources')
            .select('*')
            .order('downloads', { ascending: false });

        const { data, error } = await query;
        if (error) throw error;

        let resources = data || [];

        if (category && category !== 'All') {
            resources = resources.filter(r => r.category === category);
        }

        if (search) {
            const term = search.toLowerCase();
            resources = resources.filter(r => 
                (r.title && r.title.toLowerCase().includes(term)) ||
                (r.description && r.description.toLowerCase().includes(term)) ||
                (r.topic && r.topic.toLowerCase().includes(term))
            );
        }

        return resources;
    }

    /**
     * Share / upload a new academic resource
     */
    static async create(resourceData) {
        const newResource = {
            id: resourceData.id || `res-${Date.now()}`,
            title: resourceData.title,
            category: resourceData.category || 'Cheatsheet',
            topic: resourceData.topic || 'General',
            description: resourceData.description,
            author_name: resourceData.author_name || 'Peer Learner',
            downloads: 0,
            upvotes: 0,
            created_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('resources')
            .insert(newResource)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    /**
     * Increment download count
     */
    static async incrementDownloads(resourceId) {
        const { data: current, error: fetchErr } = await supabase
            .from('resources')
            .select('downloads')
            .eq('id', resourceId)
            .single();

        if (fetchErr) throw fetchErr;

        const { data, error } = await supabase
            .from('resources')
            .update({ downloads: (current.downloads || 0) + 1 })
            .eq('id', resourceId)
            .select()
            .single();

        if (error) throw error;
        return data;
    }
}

module.exports = Resource;
