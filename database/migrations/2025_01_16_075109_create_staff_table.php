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
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->string('staff_id');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('surname');
            $table->enum('gender', ['Male', 'Female']);
            $table->date('dob');
            $table->string('nationality');
            $table->string('position');
            $table->string('qualification');
            $table->integer('work_experience_years');
            $table->integer('years_at_ccis');
            $table->text('comment')->nullable();
            $table->string('resume')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};
