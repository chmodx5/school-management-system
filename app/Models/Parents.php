<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Parents extends Model
{
    //fillable fields
    protected $fillable = [
        'full_name',
        'occupation',
        'residential_address',
        'contact_phone',
        'whatsapp_number',
        'email_address',
        'preferred_contact',
    ];

    // students that belong to the parent
    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class, 'student_parent', 'parent_id', 'student_id');
    }
}
