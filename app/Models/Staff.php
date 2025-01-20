<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Staff extends Model
{
    //fillable fields
    protected $fillable = [
        'staff_id',
        'first_name',
        'middle_name',
        'surname',
        'gender',
        'dob',
        'nationality',
        'position',
        'qualification',
        'work_experience_years',
        'years_at_ccis',
        'comment',
        'resume',
    ];

    // Relationship with the resident teaching staff
    public function residentTeachingStaff(): HasOne
    {
        return $this->hasOne(ResidentTeachingStaff::class, 'staff_id');
    }

    // Get the associated ResidentTeachingStaff or null
    public function getResidentTeachingStaff(): ?ResidentTeachingStaff
    {
        return $this->residentTeachingStaff()->first();
    }

    // Relationship with the international teaching staff
    public function internationalTeachingStaff(): HasOne
    {
        return $this->hasOne(InternationalTeachingStaff::class, 'staff_id');
    }

    // Get the associated InternationalTeachingStaff or null
    public function getInternationalTeachingStaff(): ?InternationalTeachingStaff
    {
        return $this->internationalTeachingStaff()->first();
    }

    // Relationship with the resident non-teaching staff
    public function residentNonTeachingStaff(): HasOne
    {
        return $this->hasOne(ResidentNonTeachingStaff::class, 'staff_id');
    }

    // Get the associated ResidentNonTeachingStaff or null
    public function getResidentNonTeachingStaff(): ?ResidentNonTeachingStaff
    {
        return $this->residentNonTeachingStaff()->first();
    }

    // Relationship with the international non-teaching staff
    public function internationalNonTeachingStaff(): HasOne
    {
        return $this->hasOne(InternationalNonTeachingStaff::class, 'staff_id');
    }

    // Get the associated InternationalNonTeachingStaff or null
    public function getInternationalNonTeachingStaff(): ?InternationalNonTeachingStaff
    {
        return $this->internationalNonTeachingStaff()->first();
    }
}
