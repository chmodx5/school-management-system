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
        Schema::create('resident_teaching_staff', function (Blueprint $table) {
            $table->id();
            $table->string('national_id');
            $table->string('nssf_number');
            $table->string('tin_no');
            $table->string('teaching_license');
            $table->timestamps();

            // foreign key to the staff table
            $table->foreignId('staff_id')->unique()->constrained('staff')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resident_teaching_staff');
    }
};
