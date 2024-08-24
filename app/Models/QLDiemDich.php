<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLDiemDich extends Model
{
    use HasFactory;
    protected $fillable = [
        'kinh_do',
        'vi_do',
        'dia_chi',
        'phuong_xa',
        'huyen_tp',
        'tinh',
        'id_co_so_chan_nuoi',
        'ghi_chu',
    ];
}
