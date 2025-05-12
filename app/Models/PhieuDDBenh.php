<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhieuDDBenh extends Model
{
    use HasFactory;
    protected $fillable = [
        'thong_tin',
        'user_name',
        'nhiet_do',
        'loai_heo',
        'da',
        'suc_song',
        'than_kinh',
        'bo_an',
        'chaynuoc_mat_mui',
        'ho_hap',
        'tieu_hoa',
        'ho',
        'chet_dotngot',
        'ket_qua',
        'ghi_chu',
    ];
}
