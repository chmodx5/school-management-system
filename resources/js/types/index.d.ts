export enum UserRole {
    Admin = 'admin',
    Teacher = 'teacher',
    Student = 'student',
    Parent = 'parent',
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    role: UserRole;
}

export interface Student {
    id: number;
    registration_no: string;
    first_name: string;
    middle_name: string | null;
    surname: string;
    preferred_name: string | null;
    nationality: string;
    date_of_birth: string;
    gender: 'Male' | 'Female';
    birth_certificate_no: string | null;
    passport_no: string | null;
    passport_photo: string | null;
    student_pass_number: string | null;
    student_pass_expiry_date: string | null;
    age_at_admission: number;
    current_status: string;
    status_date: string | null;
    anticipated_year_level: string;
    proposed_entry_date: string;
    actual_entry_date: string;
    // General information
    special_things_about_child: string | null;
    child_medical_conditions: string | null;
    former_school: string | null;
    home_residents: string | null;
    primary_language_home: string | null;
    has_other_children_enrolled: boolean;
    other_children_details: string | null;
    referred_by_family: boolean;
    referrer_details: string | null;
    employer_contribution: boolean;
    contribution_percentage: number | null;
    created_at: string;
    updated_at: string;
}

interface Parent {
    id: number;
    full_name: string;
    occupation?: string | null; // nullable field
    residential_address?: string | null; // nullable field
    contact_phone: string;
    whatsapp_number?: string | null; // nullable field
    email_address?: string | null; // nullable field
    preferred_contact: 'Phone' | 'Email' | 'SMS' | 'WhatsApp';
    created_at: string; // ISO 8601 format date string
    updated_at: string; // ISO 8601 format date string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
