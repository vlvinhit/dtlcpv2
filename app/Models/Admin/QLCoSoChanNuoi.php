<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLCoSoChanNuoi extends Model
{
    use HasFactory;
    protected $fillable = [
        'ten_chu_cs',
        'so_dien_thoai',
        'zalo',
        'trang_thai_dich',
        'kinh_do',
        'vi_do',
        'dia_chi',
        'phuong_xa',
        'huyen_tp',
        'tinh',
        'ghi_chu',
    ];
}
