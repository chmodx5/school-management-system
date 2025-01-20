<?php

namespace App\Http\Controllers\Students;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentActionsController extends Controller
{
    public function store(Request $request)
    {
        // get the authenticated user
        $user = Auth::user();

        // Check if the user has the 'admin' role
        if (!$user->hasRole('admin')) {
            return redirect()->back()->with('error', 'You are not authorized to perform this action.');
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'registration_no' => 'required|string|max:255|unique:students,registration_no',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'surname' => 'required|string|max:255',
            'preferred_name' => 'nullable|string|max:255',
            'nationality' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:Male,Female',
            'birth_certificate_no' => 'nullable|string|max:255',
            'passport_no' => 'nullable|string|max:255',
            'passport_photo' => 'nullable|string|max:255', // Expecting a file path
            'student_pass_number' => 'nullable|string|max:255',
            'student_pass_expiry_date' => 'nullable|date',
            'age_at_admission' => 'required|integer|min:1',
            'current_status' => 'required|string|max:255',
            'status_date' => 'nullable|date',
            'anticipated_year_level' => 'required|string|max:255',
            'proposed_entry_date' => 'required|date',
            'actual_entry_date' => 'required|date',
            'special_things_about_child' => 'nullable|string',
            'child_medical_conditions' => 'nullable|string',
            'former_school' => 'nullable|string|max:255',
            'home_residents' => 'nullable|string|max:255',
            'primary_language_home' => 'nullable|string|max:255',
            'has_other_children_enrolled' => 'nullable|boolean',
            'other_children_details' => 'nullable|required_if:has_other_children_enrolled,true|string|max:255',
            'referred_by_family' => 'nullable|boolean',
            'referrer_details' => 'nullable|required_if:referred_by_family,true|string|max:255',
            'employer_contribution' => 'nullable|boolean',
            'contribution_percentage' => 'nullable|required_if:employer_contribution,true|integer|min:0|max:100'
        ]);

        $validatedData['has_other_children_enrolled'] = $validatedData['has_other_children_enrolled'] ?? false;
        $validatedData['referred_by_family'] = $validatedData['referred_by_family'] ?? false;
        $validatedData['employer_contribution'] = $validatedData['employer_contribution'] ?? false;

        // add student to the database
        $student = Student::create($validatedData);

        return redirect()->route('students.listPage')->with('success', 'Student added successfully!');
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
            'id' => 'required|integer|exists:students,id',
            'registration_no' => 'required|string|max:255|unique:students,registration_no,' . $request->id,
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'surname' => 'required|string|max:255',
            'preferred_name' => 'nullable|string|max:255',
            'nationality' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:Male,Female',
            'birth_certificate_no' => 'nullable|string|max:255',
            'passport_no' => 'nullable|string|max:255',
            'passport_photo' => 'nullable|string|max:255',
            'student_pass_number' => 'nullable|string|max:255',
            'student_pass_expiry_date' => 'nullable|date',
            'age_at_admission' => 'required|integer|min:1',
            'current_status' => 'required|string|max:255',
            'status_date' => 'nullable|date',
            'anticipated_year_level' => 'required|string|max:255',
            'proposed_entry_date' => 'required|date',
            'actual_entry_date' => 'required|date',
            'special_things_about_child' => 'nullable|string',
            'child_medical_conditions' => 'nullable|string',
            'former_school' => 'nullable|string|max:255',
            'home_residents' => 'nullable|string|max:255',
            'primary_language_home' => 'nullable|string|max:255',
            'has_other_children_enrolled' => 'nullable|boolean',
            'other_children_details' => 'nullable|required_if:has_other_children_enrolled,true|string|max:255',
            'referred_by_family' => 'nullable|boolean',
            'referrer_details' => 'nullable|required_if:referred_by_family,true|string|max:255',
            'employer_contribution' => 'nullable|boolean',
            'contribution_percentage' => 'nullable|required_if:employer_contribution,true|integer|min:0|max:100'
        ]);

        // Find the student by ID
        $student = Student::findOrFail($validatedData['id']);

        // Update the student's details
        $student->update($validatedData);

        return redirect()->route('students.listPage')->with('success', 'Student updated successfully!');
    }

    public function delete(Request $request, $id)
    {
        try {
            // Find the student by ID
            $student = Student::findOrFail($id);

            // Perform the delete (soft delete if using `SoftDeletes`, otherwise hard delete)
            $student->delete();

            return redirect()->back()->with('success', 'Student deleted successfully.');
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle the case where the student is not found
            return redirect()->back()->with('error', 'Student not found.');
        } catch (\Exception $e) {
            // Handle other errors
            return redirect()->back()->with('error', 'An error occurred while deleting the student: ' . $e->getMessage());
        }
    }
}
