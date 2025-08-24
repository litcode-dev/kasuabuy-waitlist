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
        Schema::create('waitlist_entries', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 100);
            $table->string('phone_number', 20)->unique();
            $table->enum('language', ['en', 'ha'])->default('en');
            $table->timestamps();
            
            // Add indexes for better performance
            $table->index('language', 'idx_waitlist_language');
            $table->index('created_at', 'idx_waitlist_created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('waitlist_entries');
    }
};
