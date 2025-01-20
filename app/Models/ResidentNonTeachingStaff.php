<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ResidentNonTeachingStaff extends Model
{
    //fillable fields
    protected $fillable = [
        'national_id',
        'nssf_number',
        'tin_no',
        'staff_id',
    ];

    /**
     * Get the staff that owns the resident non-teaching staff record.
     */
    public function staff(): BelongsTo
    {
        return $this->belongsTo(Staff::class, 'staff_id');
    }
}
