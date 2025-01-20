<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\User;

/**
 * @method BelongsToMany user()
 */
class Role extends Model
{
    //fillable fields 
    protected $fillable = ['name', 'description'];


    //   The users that belong to this role.
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'role_user');
    }
}
