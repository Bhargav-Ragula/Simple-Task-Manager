export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      feeding_schedules: {
        Row: {
          completed: boolean | null
          created_at: string | null
          id: string
          meal_plan_id: string | null
          portion_size: string
          time_of_day: string
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          meal_plan_id?: string | null
          portion_size: string
          time_of_day: string
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          id?: string
          meal_plan_id?: string | null
          portion_size?: string
          time_of_day?: string
        }
        Relationships: [
          {
            foreignKeyName: "feeding_schedules_meal_plan_id_fkey"
            columns: ["meal_plan_id"]
            isOneToOne: false
            referencedRelation: "meal_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      health_records: {
        Row: {
          activity_minutes: number | null
          created_at: string | null
          id: string
          notes: string | null
          pet_id: string | null
          record_date: string | null
          weight: number | null
        }
        Insert: {
          activity_minutes?: number | null
          created_at?: string | null
          id?: string
          notes?: string | null
          pet_id?: string | null
          record_date?: string | null
          weight?: number | null
        }
        Update: {
          activity_minutes?: number | null
          created_at?: string | null
          id?: string
          notes?: string | null
          pet_id?: string | null
          record_date?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "health_records_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      help_queries: {
        Row: {
          additional_info: Json | null
          created_at: string
          id: string
          message: string
          name: string
          query_type: string
          status: string
          subject: string
          updated_at: string
          user_email: string
          user_id: string | null
        }
        Insert: {
          additional_info?: Json | null
          created_at?: string
          id?: string
          message: string
          name: string
          query_type: string
          status?: string
          subject: string
          updated_at?: string
          user_email: string
          user_id?: string | null
        }
        Update: {
          additional_info?: Json | null
          created_at?: string
          id?: string
          message?: string
          name?: string
          query_type?: string
          status?: string
          subject?: string
          updated_at?: string
          user_email?: string
          user_id?: string | null
        }
        Relationships: []
      }
      meal_plans: {
        Row: {
          created_at: string | null
          daily_calories: number
          food_type: string
          id: string
          meals_per_day: number
          name: string
          pet_id: string | null
          special_instructions: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          daily_calories: number
          food_type: string
          id?: string
          meals_per_day: number
          name: string
          pet_id?: string | null
          special_instructions?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          daily_calories?: number
          food_type?: string
          id?: string
          meals_per_day?: number
          name?: string
          pet_id?: string | null
          special_instructions?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meal_plans_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      pet_documents: {
        Row: {
          created_at: string
          description: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          file_url: string
          id: string
          pet_name: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          file_url: string
          id?: string
          pet_name: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          file_url?: string
          id?: string
          pet_name?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      pets: {
        Row: {
          activity_level: string | null
          birth_date: string | null
          breed: string | null
          created_at: string | null
          dietary_restrictions: string[] | null
          health_conditions: string[] | null
          id: string
          name: string
          species: string
          updated_at: string | null
          user_id: string | null
          weight: number | null
        }
        Insert: {
          activity_level?: string | null
          birth_date?: string | null
          breed?: string | null
          created_at?: string | null
          dietary_restrictions?: string[] | null
          health_conditions?: string[] | null
          id?: string
          name: string
          species: string
          updated_at?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Update: {
          activity_level?: string | null
          birth_date?: string | null
          breed?: string | null
          created_at?: string | null
          dietary_restrictions?: string[] | null
          health_conditions?: string[] | null
          id?: string
          name?: string
          species?: string
          updated_at?: string | null
          user_id?: string | null
          weight?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
