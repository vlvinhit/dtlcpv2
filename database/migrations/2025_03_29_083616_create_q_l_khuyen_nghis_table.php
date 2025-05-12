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
        Schema::create('q_l_khuyen_nghis', function (Blueprint $table) {
            $table->id();
            $table->string('ten_khuyen_nghi', 255);
            $table->string('mo_ta', 255);
            $table->string('ghi_chu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('q_l_khuyen_nghis');
    }
};
