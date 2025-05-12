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
        Schema::create('q_l_quy_mo_c_s_c_n_s', function (Blueprint $table) {
            $table->id();
            $table->string('ten_quy_mo', 255);
            $table->string('dieu_kien', 255);
            $table->string('ghi_chu', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('q_l_quy_mo_c_s_c_n_s');
    }
};
