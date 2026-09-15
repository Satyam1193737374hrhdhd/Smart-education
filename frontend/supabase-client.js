/**
 * Educa - Supabase Realtime Backend Service Client
 * Connects directly to Supabase Project: Education (jybnhvlsccruhkdsvvtq)
 * Provides REST queries, mutations, and Realtime WebSocket subscriptions.
 */

const SUPABASE_URL = "https://jybnhvlsccruhkdsvvtq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Ym5odmxzY2NydWhrZHN2dnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NTI5ODQsImV4cCI6MjEwNTAyODk4NH0.9TK6gA-nHvOczZTKABrYJPeOsr4dLowIwumj8i_BPBI";

// Initialize Supabase Client if library is available
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        realtime: {
            params: {
                eventsPerSecond: 10
            }
        }
    });
    console.log("⚡ [Educa Supabase] Client initialized successfully.");
} else {
    console.warn("⚠️ [Educa Supabase] Supabase JS library not loaded. Falling back to offline mode.");
}

const EducaBackend = {
    client: supabaseClient,
    isOnline: !!supabaseClient,

    /**
     * 1. User Profile Services
     */
    async getUserProfile(userId = 'user-1') {
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('profiles')
                    .select('*')
                    .eq('id', userId)
                    .single();
                if (!error && data) return data;
            } catch (err) {
                console.warn("[Supabase] getUserProfile failed, falling back to local data:", err);
            }
        }
        return JSON.parse(localStorage.getItem('educa_user')) || {
            id: 'user-1',
            name: 'John Student',
            email: 'john.student@educa.edu',
            role: 'student',
            avatar: 'images/pic-2.jpg',
            xp: 305,
            level: 2,
            streak: 3,
            badges: ['badge-1', 'badge-2', 'badge-3']
        };
    },

    async saveUserProfile(user) {
        if (this.client) {
            try {
                await this.client
                    .from('profiles')
                    .upsert({
                        id: user.id || 'user-1',
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                        role: user.role || 'student',
                        xp: user.xp,
                        level: user.level,
                        streak: user.streak,
                        badges: user.badges,
                        updated_at: new Date().toISOString()
                    });
            } catch (err) {
                console.warn("[Supabase] saveUserProfile failed:", err);
            }
        }
        localStorage.setItem('educa_user', JSON.stringify(user));
    },

    /**
     * 2. Courses Services
     */
    async getCourses() {
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('courses')
                    .select('*')
                    .order('created_at', { ascending: true });
                if (!error && data && data.length > 0) return data;
            } catch (err) {
                console.warn("[Supabase] getCourses failed, using local cache:", err);
            }
        }
        return JSON.parse(localStorage.getItem('educa_courses')) || [];
    },

    /**
     * 3. Doubts Nexus (with Realtime)
     */
    async getDoubts() {
        if (this.client) {
            try {
                const { data: doubtsData, error: doubtsError } = await this.client
                    .from('doubts')
                    .select('*')
                    .order('created_at', { ascending: false });

                const { data: answersData } = await this.client
                    .from('doubt_answers')
                    .select('*');

                if (!doubtsError && doubtsData) {
                    return doubtsData.map(d => ({
                        ...d,
                        answers: answersData ? answersData.filter(a => a.doubt_id === d.id) : []
                    }));
                }
            } catch (err) {
                console.warn("[Supabase] getDoubts failed, using local cache:", err);
            }
        }
        return JSON.parse(localStorage.getItem('educa_doubts')) || [];
    },

    async postDoubt(doubtData) {
        const id = 'doubt-' + Date.now();
        const doubtRecord = {
            id: id,
            author_id: doubtData.author_id || 'user-1',
            author_name: doubtData.author_name || 'John Student',
            author_avatar: doubtData.author_avatar || 'images/pic-2.jpg',
            author_level: doubtData.author_level || 'Level 2',
            title: doubtData.title,
            description: doubtData.description,
            tags: doubtData.tags || [],
            bounty_xp: doubtData.bounty_xp || 50,
            upvotes: 0,
            solved: false,
            created_at: new Date().toISOString()
        };

        if (this.client) {
            try {
                const { error } = await this.client
                    .from('doubts')
                    .insert(doubtRecord);
                if (error) console.error("[Supabase] postDoubt error:", error);
            } catch (err) {
                console.warn("[Supabase] postDoubt failed:", err);
            }
        }

        // Local cache sync
        const local = JSON.parse(localStorage.getItem('educa_doubts')) || [];
        local.unshift({ ...doubtRecord, answers: [] });
        localStorage.setItem('educa_doubts', JSON.stringify(local));
        return doubtRecord;
    },

    async upvoteDoubt(doubtId) {
        if (this.client) {
            try {
                const { data: current } = await this.client
                    .from('doubts')
                    .select('upvotes')
                    .eq('id', doubtId)
                    .single();
                if (current) {
                    await this.client
                        .from('doubts')
                        .update({ upvotes: (current.upvotes || 0) + 1 })
                        .eq('id', doubtId);
                }
            } catch (err) {
                console.warn("[Supabase] upvoteDoubt error:", err);
            }
        }
    },

    async postAnswer(doubtId, answerContent, author = {}) {
        const id = 'ans-' + Date.now();
        const answerRecord = {
            id: id,
            doubt_id: doubtId,
            author_id: author.id || 'user-1',
            author_name: author.name || 'John Student',
            author_avatar: author.avatar || 'images/pic-2.jpg',
            author_badge: author.badge || 'Verified Contributor',
            content: answerContent,
            upvotes: 0,
            is_accepted: false,
            created_at: new Date().toISOString()
        };

        if (this.client) {
            try {
                await this.client
                    .from('doubt_answers')
                    .insert(answerRecord);
            } catch (err) {
                console.warn("[Supabase] postAnswer error:", err);
            }
        }

        // Local sync
        const local = JSON.parse(localStorage.getItem('educa_doubts')) || [];
        const doubt = local.find(d => d.id === doubtId);
        if (doubt) {
            if (!doubt.answers) doubt.answers = [];
            doubt.answers.push(answerRecord);
            localStorage.setItem('educa_doubts', JSON.stringify(local));
        }
        return answerRecord;
    },

    async acceptAnswer(doubtId, answerId) {
        if (this.client) {
            try {
                await this.client
                    .from('doubt_answers')
                    .update({ is_accepted: true })
                    .eq('id', answerId);

                await this.client
                    .from('doubts')
                    .update({ solved: true })
                    .eq('id', doubtId);
            } catch (err) {
                console.warn("[Supabase] acceptAnswer error:", err);
            }
        }
    },

    /**
     * 4. Project Collab Vault (with Realtime)
     */
    async getProjects() {
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('collab_projects')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (!error && data && data.length > 0) return data;
            } catch (err) {
                console.warn("[Supabase] getProjects failed, using local cache:", err);
            }
        }
        return JSON.parse(localStorage.getItem('educa_collab_projects')) || [];
    },

    async createProject(projectData) {
        const id = 'proj-' + Date.now();
        const projectRecord = {
            id: id,
            title: projectData.title,
            pitch: projectData.pitch,
            category: projectData.category || 'Development',
            tech_stack: projectData.tech_stack || [],
            open_roles: projectData.open_roles || [],
            team_size: 1,
            max_team_size: projectData.max_team_size || 4,
            members: projectData.members || [{ name: 'John Student', role: 'Project Lead', avatar: 'images/pic-2.jpg' }],
            status: 'recruiting',
            created_at: new Date().toISOString()
        };

        if (this.client) {
            try {
                await this.client
                    .from('collab_projects')
                    .insert(projectRecord);
            } catch (err) {
                console.warn("[Supabase] createProject failed:", err);
            }
        }

        const local = JSON.parse(localStorage.getItem('educa_collab_projects')) || [];
        local.unshift(projectRecord);
        localStorage.setItem('educa_collab_projects', JSON.stringify(local));
        return projectRecord;
    },

    async applyToProject(projectId, user = {}, roleApplied = 'Developer') {
        if (this.client) {
            try {
                // 1. Insert application
                await this.client
                    .from('project_applications')
                    .insert({
                        project_id: projectId,
                        user_id: user.id || 'user-1',
                        user_name: user.name || 'John Student',
                        user_avatar: user.avatar || 'images/pic-2.jpg',
                        role_applied: roleApplied,
                        status: 'pending'
                    });

                // 2. Increment team size if not full
                const { data: proj } = await this.client
                    .from('collab_projects')
                    .select('team_size, max_team_size')
                    .eq('id', projectId)
                    .single();

                if (proj && proj.team_size < proj.max_team_size) {
                    await this.client
                        .from('collab_projects')
                        .update({ team_size: proj.team_size + 1 })
                        .eq('id', projectId);
                }
            } catch (err) {
                console.warn("[Supabase] applyToProject failed:", err);
            }
        }

        // Local cache
        const local = JSON.parse(localStorage.getItem('educa_collab_projects')) || [];
        const p = local.find(x => x.id === projectId);
        if (p && p.team_size < p.max_team_size) {
            p.team_size += 1;
            localStorage.setItem('educa_collab_projects', JSON.stringify(local));
        }
    },

    /**
     * 5. Academic Resources
     */
    async getResources() {
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('resources')
                    .select('*')
                    .order('downloads', { ascending: false });
                if (!error && data && data.length > 0) return data;
            } catch (err) {
                console.warn("[Supabase] getResources failed, using local cache:", err);
            }
        }
        return JSON.parse(localStorage.getItem('educa_resources')) || [];
    },

    /**
     * 6. Contact Messages
     */
    async submitContactMessage(contactData) {
        if (this.client) {
            try {
                await this.client
                    .from('contact_messages')
                    .insert({
                        name: contactData.name,
                        email: contactData.email,
                        phone: contactData.phone,
                        message: contactData.message
                    });
                return true;
            } catch (err) {
                console.warn("[Supabase] submitContactMessage failed:", err);
            }
        }
        return false;
    },

    /**
     * 7. Realtime WebSockets Listener Engine
     */
    initRealtime(callbacks = {}) {
        if (!this.client) return;

        console.log("⚡ [Educa Supabase] Subscribing to Realtime changes across channels...");

        // Channel for Doubts and Answers
        this.client
            .channel('public:doubts_realtime')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'doubts' },
                (payload) => {
                    console.log("⚡ [Realtime] Doubt mutation received:", payload);
                    if (typeof showToast === 'function') {
                        if (payload.eventType === 'INSERT') {
                            showToast(`⚡ New Doubt Asked: "${payload.new.title.substring(0, 32)}..."`, false);
                        } else if (payload.eventType === 'UPDATE' && payload.new.solved) {
                            showToast(`⚡ Doubt Solved: "${payload.new.title.substring(0, 32)}..."`, false);
                        }
                    }
                    if (callbacks.onDoubtChange) callbacks.onDoubtChange(payload);
                }
            )
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'doubt_answers' },
                (payload) => {
                    console.log("⚡ [Realtime] Doubt answer mutation received:", payload);
                    if (typeof showToast === 'function' && payload.eventType === 'INSERT') {
                        showToast(`⚡ New Answer Posted by ${payload.new.author_name}!`, false);
                    }
                    if (callbacks.onAnswerChange) callbacks.onAnswerChange(payload);
                }
            )
            .subscribe();

        // Channel for Collaboration Projects and Applications
        this.client
            .channel('public:collab_realtime')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'collab_projects' },
                (payload) => {
                    console.log("⚡ [Realtime] Collab project mutation:", payload);
                    if (typeof showToast === 'function' && payload.eventType === 'INSERT') {
                        showToast(`🚀 New Team Pitch Launched: "${payload.new.title}"`, false);
                    }
                    if (callbacks.onCollabChange) callbacks.onCollabChange(payload);
                }
            )
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'project_applications' },
                (payload) => {
                    console.log("⚡ [Realtime] Application submitted:", payload);
                    if (typeof showToast === 'function' && payload.eventType === 'INSERT') {
                        showToast(`🤝 Student Applied to Join Team!`, false);
                    }
                    if (callbacks.onApplicationChange) callbacks.onApplicationChange(payload);
                }
            )
            .subscribe();
    }
};

// Export globally
window.EducaBackend = EducaBackend;
