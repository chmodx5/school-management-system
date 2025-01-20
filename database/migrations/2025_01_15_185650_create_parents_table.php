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
        Schema::create('parents', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('occupation')->nullable();
            $table->string('residential_address')->nullable();
            $table->string('contact_phone');
            $table->string('whatsapp_number')->nullable();
            $table->string('email_address')->nullable();
            $table->enum('preferred_contact', ['Phone', 'Email', 'SMS', 'WhatsApp']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parents');
    }
};
