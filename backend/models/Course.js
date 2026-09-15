/**
 * Course Model & Data Access Layer
 * Manages courses, playlists, and tutor metadata.
 */

const { supabase } = require('../config/supabase');

class Course {
    /**
     * Retrieve all courses
     */
    static async getAll(category = null, search = null) {
        let query = supabase
            .from('courses')
            .select('*')
            .order('created_at', { ascending: true });

        const { data, error } = await query;
        if (error) throw error;

        let courses = data || [];

        if (category && category.toLowerCase() !== 'all') {
            courses = courses.filter(c => c.category && c.category.toLowerCase() === category.toLowerCase());
        }

        if (search) {
            const term = search.toLowerCase();
            courses = courses.filter(c => 
                (c.title && c.title.toLowerCase().includes(term)) ||
                (c.description && c.description.toLowerCase().includes(term))
            );
        }

        return courses;
    }

    /**
     * Retrieve single course by ID
     */
    static async getById(courseId) {
        const { data, error } = await supabase
            .from('courses')
            .select('*')
            .eq('id', courseId)
            .single();

        if (error) throw error;
        return data;
    }
}

module.exports = Course;
