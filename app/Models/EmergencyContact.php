<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EmergencyContact extends Model
{
    //fillable fields
    protected $fillable = [
        'full_name',
        'relationship',
        'contact_phone',
        'whatsapp_number',
        'student_id',
    ];

    // the student that this emergency contact belong to 
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }
}
