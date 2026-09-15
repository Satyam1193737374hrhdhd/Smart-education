/**
 * Profile Model & Data Access Layer
 * Manages user profile information, XP progression, levels, and badges.
 */

const { supabase } = require('../config/supabase');

class Profile {
    /**
     * Retrieve user profile by user ID
     */
    static async getById(userId) {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

        if (error) {
            // Return default student profile if not found
            return {
                id: userId,
                name: 'John Student',
                email: 'student@educa.com',
                avatar: 'images/pic-2.jpg',
                role: 'student',
                xp: 180,
                level: 2,
                streak: 3,
                badges: ['badge-1', 'badge-2']
            };
        }
        return data;
    }

    /**
     * Upsert / update user profile
     */
    static async save(profileData) {
        const payload = {
            id: profileData.id || 'user-1',
            name: profileData.name,
            email: profileData.email,
            avatar: profileData.avatar || 'images/pic-2.jpg',
            role: profileData.role || 'student',
            xp: profileData.xp || 0,
            level: profileData.level || 1,
            streak: profileData.streak || 1,
            badges: profileData.badges || ['badge-1'],
            updated_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('profiles')
            .upsert(payload)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    /**
     * Award XP to user profile
     */
    static async addXP(userId, amount) {
        const current = await this.getById(userId);
        const newXP = (current.xp || 0) + amount;
        const newLevel = Math.floor(newXP / 100) + 1;

        const { data, error } = await supabase
            .from('profiles')
            .update({ xp: newXP, level: newLevel, updated_at: new Date().toISOString() })
            .eq('id', userId)
            .select()
            .single();

        if (error) throw error;
        return data;
    }
}

module.exports = Profile;
