<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Student extends Model
{
    // fillable fields
    protected $fillable = [
        'registration_no',
        'first_name',
        'middle_name',
        'surname',
        'preferred_name',
        'nationality',
        'date_of_birth',
        'gender',
        'birth_certificate_no',
        'passport_no',
        'passport_photo',
        'student_pass_number',
        'student_pass_expiry_date',
        'age_at_admission',
        'current_status',
        'status_date',
        'anticipated_year_level',
        'proposed_entry_date',
        'actual_entry_date',
        'special_things_about_child',
        'child_medical_conditions',
        'former_school',
        'home_residents',
        'primary_language_home',
        'has_other_children_enrolled',
        'other_children_details',
        'referred_by_family',
        'referrer_details',
        'employer_contribution',
        'contribution_percentage',
    ];

    // parents that belong to the student
    public function parents(): BelongsToMany
    {
        return $this->belongsToMany(Parents::class);
    }
    // the emergency contacs of the students 
    public function emergencyContacts(): HasMany
    {
        return $this->hasMany(EmergencyContact::class);
    }

    // the doctors of the students 
    public function doctors(): HasMany
    {
        return $this->hasMany(Doctor::class);
    }
}
