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
        Schema::create('q_l_dia_gioi_hanh_chinh_t_g_s', function (Blueprint $table) {
            $table->id();
            $table->string('ma_gis', 255);
            $table->string('phuong_xa', 255);
            $table->string('huyen_tp', 255);
            $table->string('ghi_chu', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('q_l_dia_gioi_hanh_chinh_t_g_s');
    }
};
