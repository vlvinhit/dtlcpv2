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
        Schema::create('nhom_c_h_c_t_l_s', function (Blueprint $table) {
            $table->id();
            $table->string('nhom_cau_hoi', 255);
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
        Schema::dropIfExists('nhom_c_h_c_t_l_s');
    }
};
