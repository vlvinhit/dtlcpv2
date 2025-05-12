<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QLDiemDichv2Seeder extends Seeder
{
    // Hàm getMaGis để lấy giá trị ma_gis từ bảng q_l_dia_gioi_hanh_chinh_t_g_s
    public function getMaGis($phuong_xa, $huyen_tp)
    {
        // Chuyển phuong_xa và huyen_tp về chữ thường để so sánh không phân biệt hoa thường
        $phuong_xa = strtolower($phuong_xa);
        $huyen_tp = strtolower($huyen_tp);

        // Lấy giá trị ma_gis từ cơ sở dữ liệu, nếu không tìm thấy thì trả về chuỗi trống
        $maGis = DB::table('q_l_dia_gioi_hanh_chinh_t_g_s')
            ->whereRaw('LOWER(phuong_xa) = ?', [$phuong_xa])
            ->whereRaw('LOWER(huyen_tp) = ?', [$huyen_tp])
            ->pluck('ma_gis')
            ->first();

        // Kiểm tra nếu maGis không phải null thì ép kiểu về string, nếu không trả về chuỗi trống
        return is_null($maGis) ? '' : strval($maGis);
    }

    public function run()
    {
        // Dữ liệu từ bảng nhaplieu
        $nhaplieu = [
            ['phuong_xa' => 'Xã Tân Hội', 'SL_diem_dich' => 1],
            ['phuong_xa' => 'Xã Tân Phú', 'SL_diem_dich' => 2],

        ];
        $huyen_defaut = 'Thị xã Cai Lậy';
        // Lặp qua mỗi dòng dữ liệu trong bảng nhaplieu và thực hiện insert vào QLDiemDich
        foreach ($nhaplieu as $item) {
            // Lấy ma_gis từ bảng q_l_dia_gioi_hanh_chinh_t_g_s
            $maGis = $this->getMaGis($item['phuong_xa'], $huyen_defaut);

            // Thực hiện insert dữ liệu vào bảng QLDiemDich
            DB::table('q_l_diem_dichv2s')->insert([
                'nam' => 2024,
                'SL_diem_dich' => $item['SL_diem_dich'],
                'kinh_do' => '',
                'vi_do' => '',
                'phuong_xa' => $item['phuong_xa'],
                'huyen_tp' => $huyen_defaut,
                'tinh' => 'Tỉnh Tiền Giang',
                'ghi_chu' => $maGis
            ]);
        }
    }
}
