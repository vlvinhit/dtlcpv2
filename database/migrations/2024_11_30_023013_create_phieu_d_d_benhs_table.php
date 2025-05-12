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
        Schema::create('phieu_d_d_benhs', function (Blueprint $table) {
            $table->id();
            $table->string('thong_tin', 255);
            $table->string('user_name', 255);
            $table->integer('nhiet_do');
            $table->integer('loai_heo');
            $table->integer('da');
            $table->integer('suc_song');
            $table->integer('than_kinh');
            $table->integer('bo_an');
            $table->integer('chaynuoc_mat_mui');
            $table->integer('ho_hap');
            $table->integer('tieu_hoa');
            $table->integer('ho');
            $table->integer('chet_dotngot');
            $table->integer('ket_qua');
            $table->string('ghi_chu', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phieu_d_d_benhs');
    }
};
