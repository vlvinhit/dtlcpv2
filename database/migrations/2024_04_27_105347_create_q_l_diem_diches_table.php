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
        Schema::create('q_l_diem_diches', function (Blueprint $table) {
            $table->id();
            $table->float('kinh_do', 10, 6);
            $table->float('vi_do', 10, 6);
            $table->string('dia_chi', 255);
            $table->string('phuong_xa', 255);
            $table->string('huyen_tp', 255);
            $table->string('tinh', 255);
            $table->integer('id_co_so_chan_nuoi');
            $table->string('ghi_chu', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('q_l_diem_diches');
    }
};
