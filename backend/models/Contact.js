/**
 * Contact Message Model & Data Access Layer
 */

const { supabase } = require('../config/supabase');

class Contact {
    /**
     * Submit a contact message
     */
    static async create(contactData) {
        const newMessage = {
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone || contactData.subject || '',
            message: contactData.message,
            created_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('contact_messages')
            .insert(newMessage)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    /**
     * Get all contact messages (Admin only)
     */
    static async getAll() {
        const { data, error } = await supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    }
}

module.exports = Contact;
