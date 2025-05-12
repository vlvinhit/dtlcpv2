<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Admin\MainController;
use App\Http\Controllers\Admin\QLGisController;
use App\Http\Controllers\Admin\QLDiemDichController;
use App\Http\Controllers\Admin\QLDiemDichv2Controller;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\QLPhanQuyenController;
use App\Http\Controllers\Admin\QLQuyMoCSCNController;
use App\Http\Controllers\Admin\QLCoSoChanNuoiController;
use App\Http\Controllers\PhieuDDBenhController;
use App\Http\Controllers\Admin\QLDonViController;
use App\Http\Controllers\Admin\YTNguyCoController;
use App\Http\Controllers\Admin\QLDanhGiaController;
use App\Http\Controllers\Admin\QLKhuyenNghiController;
use App\Http\Controllers\Admin\QLCanhBaoController;
use App\Http\Controllers\Admin\NhomCHCTLController;
use App\Http\Controllers\Admin\QLCauHoiController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/', function () {return redirect('/admin/users/login');});
Route::get('/admin/users/login', [LoginController::class, 'index'])->name('login');
Route::post('/admin/users/login/store', [LoginController::class, 'store']);
Route::get('/pl/bandogis/gis2', [QLGisController::class, 'index2']);
Route::middleware(['auth'])->group(function (){
    Route::prefix('admin')->group(function (){
        Route::get('/', [MainController::class, 'index']);
        Route::get('main', [MainController::class, 'index'])->name('admin');
        #QLCoSoChanNuoi
        Route::resource('/quanlycosochannuoi', QLCoSoChanNuoiController::class);
        Route::post('/addQLCoSoChanNuoi',[QLCoSoChanNuoiController::class, 'store']);
        Route::post('/destroyQLCoSoChanNuoi',[QLCoSoChanNuoiController::class, 'destroy']);
        Route::get('/quanlycosochannuoi/edit/{qlcosochannuoi}',[QLCoSoChanNuoiController::class, 'show']);
        Route::post('/editQLCoSoChanNuoi',[QLCoSoChanNuoiController::class, 'update']);
        #QLQuymocscn
        Route::resource('/quanlyquymocscn', QLQuyMoCSCNController::class);
        Route::post('/themQLQuyMoCSCN',[QLQuyMoCSCNController::class, 'store']);
        Route::post('/editQLQuyMoCSCN',[QLQuyMoCSCNController::class, 'update']);
        Route::post('/destroyQLQuyMoCSCN',[QLQuyMoCSCNController::class, 'destroy']);
        #QLPhanQuyen
        Route::resource('/quanlyphanquyen', QLPhanQuyenController::class);
        Route::post('/quanlyphanquyen',[QLPhanQuyenController::class, 'roleAddPermission']);
        #QLTaiKhoan
        Route::resource('/quanlytaikhoan', UserController::class);
        Route::post('/quanlytaikhoan2',[UserController::class, 'store'])->name('reg_user');
        Route::post('/quanlytaikhoan',[UserController::class, 'editphanquyen'])->name('edit_phanquyen');
        Route::get('/phanquyen/',[UserController::class, 'phanquyen']);
        #QLDiemDich
        Route::prefix('quanlydiemdich')->group(function (){
            Route::get('add',[QLDiemDichController::class, 'create']);
            Route::post('add',[QLDiemDichController::class, 'store']);
            Route::get('list',[QLDiemDichController::class, 'index']);
            Route::post('list',[QLDiemDichController::class, 'store']);
            Route::delete('destroy',[QLDiemDichController::class, 'destroy']);
            Route::get('edit/{qlDiemDich}',[QLDiemDichController::class, 'show']);
            Route::post('edit/{qlDiemDich}',[QLDiemDichController::class, 'update']);
        });
        #QLGis
        Route::get('/bandogis/gis', [QLGisController::class, 'index1']);
        Route::get('/bandogis/gis2', [QLGisController::class, 'index2']);
        Route::get('/bandogis/gis3', [QLGisController::class, 'index3']);
        Route::resource('/quanlygis', QLGisController::class);
        Route::post('/quanlygis/addqlgis',[QLGisController::class, 'store']);
        Route::get('/quanlygis/edit/{qlgis}',[QLGisController::class, 'show']);
        Route::post('/quanlygis/editqlgis',[QLGisController::class, 'update']);
        Route::post('/destroyqldiemdichv2',[QLGisController::class, 'destroy']);
        #QLDiemDichv2
        Route::resource('/quanlydiemdichv2', QLDiemDichv2Controller::class);
        Route::post('/quanlydiemdichv2/addQLDiemDichv2',[QLDiemDichv2Controller::class, 'store']);
        Route::post('/destroyqldiemdichv2',[QLDiemDichv2Controller::class, 'destroy']);
        Route::get('/quanlydiemdichv2/edit/{qldiemdichv2}',[QLDiemDichv2Controller::class, 'show']);
        Route::post('/quanlydiemdichv2/editqldiemdichv2',[QLDiemDichv2Controller::class, 'update']);
        #PHIEUDDBenh
        Route::resource('/phieududoanbenh', PhieuDDBenhController::class);
        Route::post('/phieududoanbenh/addphieududoanbenh',[PhieuDDBenhController::class, 'store']);

        #QLDonVi
        Route::resource('/quanlydonvi', QLDonViController::class);
        Route::post('/themQLDonVi',[QLDonViController::class, 'store']);
        Route::get('/editQLDonVi/{quanlydonvi}',[QLDonViController::class, 'show']);
        Route::post('/editQLDonVi',[QLDonViController::class, 'update']);
        Route::post('/destroyQLDonVi',[QLDonViController::class, 'destroy']);

        #YTNguyCo
        Route::resource('/yeutonguyco', YTNguyCoController::class);
        Route::post('/addYTNguyCo',[YTNguyCoController::class, 'store']);
        Route::get('/editYTNguyCo/{yeutonguyco}',[YTNguyCoController::class, 'show']);
        Route::post('/editYTNguyCo',[YTNguyCoController::class, 'update']);
        Route::post('/destroyYTNguyCo',[YTNguyCoController::class, 'destroy']);
        #QLDanhGia
        Route::resource('/quanlydanhgia', QLDanhGiaController::class);
        Route::post('/addQLDanhGia',[QLDanhGiaController::class, 'store']);
        Route::get('/editQLDanhGia/{quanlydanhgia}',[QLDanhGiaController::class, 'show']);
        Route::post('/editQLDanhGia',[QLDanhGiaController::class, 'update']);
        Route::post('/destroyQLDanhGia',[QLDanhGiaController::class, 'destroy']);
        #QLKhuyennghi
        Route::resource('/quanlykhuyennghi', QLKhuyenNghiController::class);
        Route::post('/addQLKhuyenNghi',[QLKhuyenNghiController::class, 'store']);
        Route::get('/editQLKhuyenNghi/{quanlykhuyennghi}',[QLKhuyenNghiController::class, 'show']);
        Route::post('/editQLKhuyenNghi',[QLKhuyenNghiController::class, 'update']);
        Route::post('/destroyQLKhuyenNghi',[QLKhuyenNghiController::class, 'destroy']);
        #QLCanhBao
        Route::resource('/quanlycanhbao', QLCanhBaoController::class);
        Route::post('/addQLCanhBao',[QLCanhBaoController::class, 'store']);
        Route::get('/editQLCanhBao/{quanlycanhbao}',[QLCanhBaoController::class, 'show']);
        Route::post('/editQLCanhBao',[QLCanhBaoController::class, 'update']);
        Route::post('/destroyQLCanhBao',[QLCanhBaoController::class, 'destroy']);
        #NhomCHCTL
        Route::resource('/nhomcauhoitraloi', NhomCHCTLController::class);
        Route::post('/addNhomCHCTL',[NhomCHCTLController::class, 'store']);
        Route::get('/editNhomCHCTL/{nhomcauhoitraloi}',[NhomCHCTLController::class, 'show']);
        Route::post('/editNhomCHCTL',[NhomCHCTLController::class, 'update']);
        Route::post('/destroyNhomCHCTL',[NhomCHCTLController::class, 'destroy']);
        #QLCauHoi
        Route::resource('/quanlycauhoi', QLCauHoiController::class);
        Route::post('/addQLCauHoi',[QLCauHoiController::class, 'store']);
        Route::get('/editQLCauHoi/{quanlycauhoi}',[QLCauHoiController::class, 'show']);
        Route::post('/editQLCauHoi',[QLCauHoiController::class, 'update']);
        Route::post('/destroyQLCauHoi',[QLCauHoiController::class, 'destroy']);
    });

});
