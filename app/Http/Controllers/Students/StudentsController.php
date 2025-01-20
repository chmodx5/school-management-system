<?php

namespace App\Http\Controllers\students;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class StudentsController extends Controller
{
    // display students home page
    public function getHomePage(Request $request): Response
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        return Inertia::render('Dashboard/Students/StudentsHomePage', [
            'user' => $user,
            'roles' => $userRoles, // Pass the user's roles
        ]);
    }

    // display add student page
    public function getAddStudentPage(Request $request): Response
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        return Inertia::render('Dashboard/Students/AddStudentPage', [
            'user' => $user,
            'roles' => $userRoles, // Pass the user's roles
        ]);
    }

    // display student list page
    public function getStudentsListPage(Request $request): Response
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        // Fetch the list of students
        $students = Student::all();

        return Inertia::render('Dashboard/Students/StudentsListPage', [
            'user' => $user,
            'roles' => $userRoles, // Pass the user's roles
            'students' => $students
        ]);
    }

    public function getStudentDetailsPage($registration_no)
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        // Find the student by registration_no
        $student = Student::where('registration_no', $registration_no)->first();

        // If student doesn't exist, you can redirect or show an error
        if (!$student) {
            return redirect()->route('students.listPage')->with('error', 'Student not found');
        }

        // Pass the student data to the view (StudentDetailsPage)
        return Inertia::render('Dashboard/Students/StudentDetailsPage', [
            'user' => $user,
            'roles' => $userRoles,
            'student' => $student
        ]);
    }

    public function getUpdateStudentPage($id)
    {
        $user = Auth::user();
        $userRoles = $user->roles()->pluck('name');

        // Find the student by registration_no
        $student = Student::where('id', $id)->first();

        // If student doesn't exist, you can redirect or show an error
        if (!$student) {
            return redirect()->route('students.listPage')->with('error', 'Student not found');
        }

        // Pass the student data to the view (StudentDetailsPage)
        return Inertia::render('Dashboard/Students/UpdateStudentPage', [
            'user' => $user,
            'roles' => $userRoles,
            'student' => $student
        ]);
    }
}
