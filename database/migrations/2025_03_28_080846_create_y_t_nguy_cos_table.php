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
        Schema::create('y_t_nguy_cos', function (Blueprint $table) {
            $table->id();
            $table->string('ten_YTNC', 255);
            $table->string('mo_ta', 255);
            $table->string('khuyen_nghi', 255);
            $table->integer('ti_trong');
            $table->string('ghi_chu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('y_t_nguy_cos');
    }
};
