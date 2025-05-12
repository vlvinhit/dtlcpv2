<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLDanhGia extends Model
{
    use HasFactory;
    protected $fillable = [
        'ten_danh_gia',
        'mo_ta',
        'ghi_chu',
    ];
}
