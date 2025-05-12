<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLCauHoi extends Model
{
    use HasFactory;
    protected $fillable = [
        'loai_cau_hoi',
        'cau_hoi',
        'cau_tra_loi',
        'dap_an',
        'ghi_chu',
    ];
}
