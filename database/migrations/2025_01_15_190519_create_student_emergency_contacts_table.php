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
        Schema::create('student_emergency_contacts', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('relationship');
            $table->string('contact_phone');
            $table->string('whatsapp_number')->nullable();
            $table->timestamps();

            // foreign key to students table
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_emergency_contacts');
    }
};
