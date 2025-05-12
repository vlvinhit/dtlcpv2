<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NhomCHCTL extends Model
{
    use HasFactory;
    protected $fillable = [
        'nhom_cau_hoi',
        'mo_ta',
        'ghi_chu',
    ];
}
