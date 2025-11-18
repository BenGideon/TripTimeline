import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
      };
      trips: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          start_date: string;
          end_date: string;
          destination: string;
          description: string | null;
          created_at: string;
          updated_at: string;
          is_public: boolean;
          currency: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          start_date: string;
          end_date: string;
          destination: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
          is_public?: boolean;
          currency?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          start_date?: string;
          end_date?: string;
          destination?: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
          is_public?: boolean;
          currency?: string;
        };
      };
      // Add other table types here as needed
    };
  };
};
