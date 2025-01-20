<?php

use App\Http\Controllers\Parents\ParentActionsController;
use App\Http\Controllers\parents\ParentsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Students\StudentActionsController;
use App\Http\Controllers\students\StudentsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $user = Auth::user();

    // Check the user's role directly
    if ($user->hasRole('admin')) {
        $userRoles = $user->roles()->pluck('name');
        return Inertia::render('Dashboard/Index', [
            'user' => $user,
            'roles' => $userRoles, // Pass the user's roles
        ]);
    } elseif ($user->hasRole('teacher')) {
        return Inertia::render('Dashboard/Index');
    } elseif ($user->hasRole('student')) {
        return Inertia::render('Dashboard/Index', [
            'user' => $user
        ]);
    } elseif ($user->hasRole('parent')) {
        return Inertia::render('Dashboard/Index');
    } else {
        // Redirect this invalid user to the login page
        Auth::logout();
        return redirect()->route('login');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //Student pages
    Route::get('/dashboard/students', [StudentsController::class, 'getHomePage'])->name('students.homePage');
    Route::get('/dashboard/students/add-student', [StudentsController::class, 'getAddStudentPage'])->name('students.addStudentPage');
    Route::get('/dashboard/students/students-list', [StudentsController::class, 'getStudentsListPage'])->name('students.listPage');
    Route::get('/dashboard/students/{registration_no}', [StudentsController::class, 'getStudentDetailsPage'])->name('students.detailsPage');
    // update student page
    Route::get('/dashboard/students/update/{id}', [StudentsController::class, 'getUpdateStudentPage'])->name('students.updatePage');

    // create student 
    Route::post('/add-student', [StudentActionsController::class, 'store'])->name('student.store');
    // updade students 
    Route::patch('/update-student', [StudentActionsController::class, 'update'])->name('student.update');
    // delete students  
    Route::delete('/delete-student{id}', [StudentActionsController::class, 'delete'])->name('student.delete');

    // parents pages
    Route::get('/dashboard/parents', [ParentsController::class, 'getHomePage'])->name('parents.homePage');
    Route::get('/dashboard/parents/add-parent', [ParentsController::class, 'getAddParentPage'])->name('parents.addParentPage');
    Route::get('/dashboard/parents/parents-list', [ParentsController::class, 'getParentsListPage'])->name('parents.listPage');
    // update parent page
    Route::get('/dashboard/parents/update/{id}', [ParentsController::class, 'getUpdateParentPage'])->name('parents.updatePage');

    // create parent 
    Route::post('/add-parent', [ParentActionsController::class, 'store'])->name('parent.store');
    // updade parent 
    Route::patch('/update-parent', [ParentActionsController::class, 'update'])->name('parent.update');
    // delete parent  
    Route::delete('/delete-parent{id}', [ParentActionsController::class, 'delete'])->name('parent.delete');
});

// this is a small snippet for adding the user role middleware to a route: RoleMiddleware::class . ':student'

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
