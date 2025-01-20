<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next,  string $role): Response
    {
        $user = Auth::user();

        if (!$user) {
            abort(401, 'Unauthorized'); // User not logged in
        }

        if ($user->role !== $role) {
            abort(403, 'Unauthorized'); // Wrong role
        }

        return $next($request);
    }
}
