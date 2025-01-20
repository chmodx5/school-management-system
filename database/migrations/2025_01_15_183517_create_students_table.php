<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('registration_no')->unique();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('surname');
            $table->string('preferred_name')->nullable();
            $table->string('nationality');
            $table->date('date_of_birth');
            $table->enum('gender', ['Male', 'Female']);
            $table->string('birth_certificate_no')->nullable();
            $table->string('passport_no')->nullable();
            $table->string('passport_photo')->nullable(); // File path
            $table->string('student_pass_number')->nullable();
            $table->date('student_pass_expiry_date')->nullable();
            $table->integer('age_at_admission');
            $table->string('current_status');
            $table->date('status_date')->nullable();
            $table->string('anticipated_year_level');
            $table->date('proposed_entry_date');
            $table->date('actual_entry_date');

            // general information
            $table->text('special_things_about_child')->nullable();
            $table->text('child_medical_conditions')->nullable();
            $table->string('former_school')->nullable();
            $table->string('home_residents')->nullable();
            $table->string('primary_language_home')->nullable();
            $table->boolean('has_other_children_enrolled')->default(false);
            $table->string('other_children_details')->nullable();
            $table->boolean('referred_by_family')->default(false);
            $table->string('referrer_details')->nullable();
            $table->boolean('employer_contribution')->default(false);
            $table->integer('contribution_percentage')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
