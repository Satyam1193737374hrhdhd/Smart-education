/**
 * Doubt Model & Data Access Layer
 * Manages queries and mutations for questions and answers in Supabase.
 */

const { supabase } = require('../config/supabase');

class Doubt {
    /**
     * Retrieve all doubts with associated answers
     */
    static async getAll(filterTag = null, search = null) {
        let query = supabase
            .from('doubts')
            .select('*')
            .order('created_at', { ascending: false });

        const { data: doubts, error } = await query;
        if (error) throw error;

        // Fetch answers
        const { data: answers, error: ansError } = await supabase
            .from('doubt_answers')
            .select('*')
            .order('created_at', { ascending: true });

        if (ansError) throw ansError;

        let results = doubts.map(d => ({
            ...d,
            answers: answers ? answers.filter(a => a.doubt_id === d.id) : []
        }));

        if (filterTag && filterTag !== 'All') {
            results = results.filter(d => Array.isArray(d.tags) && d.tags.includes(filterTag));
        }

        if (search) {
            const term = search.toLowerCase();
            results = results.filter(d => 
                (d.title && d.title.toLowerCase().includes(term)) ||
                (d.description && d.description.toLowerCase().includes(term))
            );
        }

        return results;
    }

    /**
     * Retrieve single doubt by ID
     */
    static async getById(doubtId) {
        const { data: doubt, error } = await supabase
            .from('doubts')
            .select('*')
            .eq('id', doubtId)
            .single();

        if (error) throw error;

        const { data: answers } = await supabase
            .from('doubt_answers')
            .select('*')
            .eq('doubt_id', doubtId);

        return {
            ...doubt,
            answers: answers || []
        };
    }

    /**
     * Create a new doubt question
     */
    static async create(doubtData) {
        const newDoubt = {
            id: doubtData.id || `doubt-${Date.now()}`,
            author_id: doubtData.author_id || 'user-1',
            author_name: doubtData.author_name || 'Student',
            author_avatar: doubtData.author_avatar || 'images/pic-2.jpg',
            author_level: doubtData.author_level || 'Level 2',
            title: doubtData.title,
            description: doubtData.description,
            tags: doubtData.tags || ['General'],
            bounty_xp: doubtData.bounty_xp || 50,
            upvotes: 0,
            solved: false,
            created_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('doubts')
            .insert(newDoubt)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    /**
     * Increment upvotes on a doubt
     */
    static async upvote(doubtId) {
        const { data: current, error: fetchErr } = await supabase
            .from('doubts')
            .select('upvotes')
            .eq('id', doubtId)
            .single();

        if (fetchErr) throw fetchErr;

        const newVotes = (current.upvotes || 0) + 1;
        const { data, error } = await supabase
            .from('doubts')
            .update({ upvotes: newVotes })
            .eq('id', doubtId)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    /**
     * Add an answer to a doubt
     */
    static async addAnswer(doubtId, answerData) {
        const newAnswer = {
            id: `ans-${Date.now()}`,
            doubt_id: doubtId,
            author_id: answerData.author_id || 'user-1',
            author_name: answerData.author_name || 'Contributor',
            author_avatar: answerData.author_avatar || 'images/pic-2.jpg',
            author_badge: answerData.author_badge || 'Contributor',
            content: answerData.content,
            upvotes: 0,
            is_accepted: false,
            created_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('doubt_answers')
            .insert(newAnswer)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    /**
     * Mark an answer as accepted solution
     */
    static async acceptAnswer(doubtId, answerId) {
        // 1. Reset other answers to not accepted
        await supabase
            .from('doubt_answers')
            .update({ is_accepted: false })
            .eq('doubt_id', doubtId);

        // 2. Mark this answer as accepted
        const { data: answer, error: ansError } = await supabase
            .from('doubt_answers')
            .update({ is_accepted: true })
            .eq('id', answerId)
            .select()
            .single();

        if (ansError) throw ansError;

        // 3. Mark doubt as solved
        await supabase
            .from('doubts')
            .update({ solved: true })
            .eq('id', doubtId);

        return answer;
    }
}

module.exports = Doubt;
