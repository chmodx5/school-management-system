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
        Schema::create('international_non_teaching_staff', function (Blueprint $table) {
            $table->id();
            $table->string('work_permit_no');
            $table->date('work_permit_expiry_date');
            $table->string('resident_permit_no');
            $table->date('resident_permit_expiry_date');
            $table->string('passport_no');
            $table->date('passport_expiry_date');
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
        Schema::dropIfExists('international_non_teaching_staff');
    }
};
