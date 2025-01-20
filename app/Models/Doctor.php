<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Doctor extends Model
{
    // fillable fields
    protected $fillable = [
        'full_name',
        'contact_phone',
        'student_id',
    ];

    // the student that the doctor belongs to 
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }
}
