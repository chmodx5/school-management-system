<?php

namespace App\Http\Controllers\parents;

use App\Http\Controllers\Controller;
use App\Models\Parents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ParentsController extends Controller
{
    // display parents home page
    public function getHomePage(Request $request): Response
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        return Inertia::render('Dashboard/Parents/ParentsHomePage', [
            'user' => $user,
            'roles' => $userRoles, // Pass the user's roles
        ]);
    }

    // display add parents page 
    public function getAddParentPage(Request $request): Response
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        return Inertia::render('Dashboard/Parents/CreateParentPage', [
            'user' => $user,
            'roles' => $userRoles, // Pass the user's roles
        ]);
    }

    // display parents list page
    public function getParentsListPage(Request $request): Response
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');



        // Fetch the list of parents
        $parents = Parents::all();

        return Inertia::render('Dashboard/Parents/ParentsListPage', [
            'user' => $user,
            'roles' => $userRoles, // Pass the user's roles
            'parents' => $parents
        ]);
    }


    // display the update parent page
    public function getUpdateParentPage($id)
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        // Find the parent by ID
        $parent = Parents::where('id', $id)->first();

        // If parent doesn't exist, you can redirect or show an error
        if (!$parent) {
            return redirect()->route('parents.listPage')->with('error', 'Parent not found');
        }

        // Pass the parent data to the view (UpdateParentPage)
        return Inertia::render('Dashboard/Parents/UpdateParentPage', [
            'user' => $user,
            'roles' => $userRoles,
            'parent' => $parent
        ]);
    }
}
