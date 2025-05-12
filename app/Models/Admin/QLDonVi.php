<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLDonVi extends Model
{
    use HasFactory;
    protected $fillable = [
        'ten_don_vi',
        'so_dien_thoai',
        'dia_chi',
        'phuong_xa',
        'huyen_tp',
        'tinh',
        'ghi_chu',
    ];
}
