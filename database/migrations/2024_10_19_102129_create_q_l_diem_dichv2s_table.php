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
        Schema::create('q_l_diem_dichv2s', function (Blueprint $table) {
            $table->id();
            $table->integer('nam');
            $table->integer('SL_diem_dich');
            $table->string('kinh_do', 255);
            $table->string('vi_do', 255);
            $table->string('phuong_xa', 255);
            $table->string('huyen_tp', 255);
            $table->string('tinh', 255);
            $table->string('ghi_chu', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('q_l_diem_dichv2s');
    }
};
