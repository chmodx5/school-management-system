<?php

namespace App\Http\Controllers\Parents;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Parents;

class ParentActionsController extends Controller
{
    public function store(Request $request)
    {
        // Get the authenticated user
        $user = Auth::user();

        // Check if the user has the 'admin' role
        if (!$user->hasRole('admin')) {
            return redirect()->back()->with('error', 'You are not authorized to perform this action.');
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'occupation' => 'nullable|string|max:255',
            'residential_address' => 'nullable|string|max:255',
            'contact_phone' => 'nullable|string|max:255',
            'whatsapp_number' => 'nullable|string|max:255',
            'email_address' => 'nullable|email|max:255',
            'preferred_contact' => 'nullable|string|max:255',
        ]);

        // Add the parent to the database
        Parents::create($validatedData);

        return redirect()->route('parents.listPage')->with('success', 'Parent added successfully!');
    }

    public function update(Request $request)
    {
        // Get the authenticated user
        $user = Auth::user();

        // Check if the user has the 'admin' role
        if (!$user->hasRole('admin')) {
            return redirect()->back()->with('error', 'You are not authorized to perform this action.');
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'id' => 'required|integer|exists:parents,id',
            'full_name' => 'required|string|max:255',
            'occupation' => 'nullable|string|max:255',
            'residential_address' => 'nullable|string|max:255',
            'contact_phone' => 'nullable|string|max:255',
            'whatsapp_number' => 'nullable|string|max:255',
            'email_address' => 'nullable|email|max:255',
            'preferred_contact' => 'nullable|string|max:255',
        ]);

        // Find the parent by ID
        $parent = Parents::findOrFail($validatedData['id']);

        // Update the parent's details
        $parent->update($validatedData);

        return redirect()->route('parents.listPage')->with('success', 'Parent updated successfully!');
    }

    public function delete($id)
    {
        try {
            // Find the parent by ID
            $parent = Parents::findOrFail($id);

            // Perform the delete (soft delete if using `SoftDeletes`, otherwise hard delete)
            $parent->delete();

            return redirect()->back()->with('success', 'Parent deleted successfully.');
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle the case where the parent is not found
            return redirect()->back()->with('error', 'Parent not found.');
        } catch (\Exception $e) {
            // Handle other errors
            return redirect()->back()->with('error', 'An error occurred while deleting the parent: ' . $e->getMessage());
        }
    }
}
