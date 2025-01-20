<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InternationalTeachingStaff extends Model
{
    //fillable fields

    protected $fillable = [
        'tcu_number',
        'tcu_expiry_date',
        'teaching_license_no',
        'teaching_license_expiry_date',
        'work_permit_no',
        'work_permit_expiry_date',
        'resident_permit_no',
        'resident_permit_expiry_date',
        'passport_no',
        'passport_expiry_date',
        'staff_id',
    ];


    //  Get the staff that owns the international teaching staff record.

    public function staff(): BelongsTo
    {
        return $this->belongsTo(Staff::class, 'staff_id');
    }
}
