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
        Schema::create('q_l_cau_hois', function (Blueprint $table) {
            $table->id();
            $table->string('loai_cau_hoi', 255);
            $table->string('cau_hoi', 255);
            $table->string('cau_tra_loi', 255);
            $table->string('dap_an', 255);
            $table->string('ghi_chu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('q_l_cau_hois');
    }
};
