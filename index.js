

function dieukien(khuvuc, doituong, mon_1, mon_2, mon_3) {
    //dieukien diemchuan<30 & >0 
    var diem_khuvuc = 0;
    var diem_doituong = 0;
    var diem_tongtb = 0;


    // lấy điểm khu vực
    switch (khuvuc) {
        case "A":
            diem_khuvuc = 1;
            break;
        case "B":
            diem_khuvuc = 2;
            break;
        case "C":
            diem_khuvuc = 3;
            break;
        default:
            diem_khuvuc = 0;
            break;
    }

    // Lấy điểm đối tượng
    switch (doituong) {
        case "dt_1":
            diem_doituong = 1;
            break;
        case "dt_2":
            diem_doituong = 2;
            break;
        case "dt_3":
            diem_doituong = 3;
            break;
        default:
            diem_doituong = 0;
            break;
    }
    diem_tongtb = mon_1 + mon_2 + mon_3 + diem_khuvuc + diem_doituong;
    return diem_tongtb
}

document.getElementById("btn-tinhdiem").onclick = function () {
    var diemchuan = document.getElementById("id_diemchuan").value * 1
    var khuvuc = document.getElementById("khuvuc").value
    var doituong = document.getElementById("doituong").value
    var mon_1 = document.getElementById("diem_1").value * 1
    var mon_2 = document.getElementById("diem_2").value * 1
    var mon_3 = document.getElementById("diem_3").value * 1
    var xuattheP = document.getElementById("xuat_kq");
    console.log(diemchuan, khuvuc, doituong, mon_1, mon_2, mon_3)

    if (mon_1 == 0 || mon_2 == 0 || mon_3 == 0) {
        xuattheP.innerHTML = "Có điểm Liệt = 0 : Rớt"
        return
    } else if (diemchuan > 30 || diemchuan <= 0) {
        alert("Điểm Chuẩn phải <=30 và >0");
        return
    } else {
        var loc_kq = dieukien(khuvuc, doituong, mon_1, mon_2, mon_3)
        if (loc_kq < diemchuan) {
            document.getElementById("xuat_kq").innerHTML = ` Tổng Điểm : ${loc_kq} => Rớt `
        }
        else {
            document.getElementById("xuat_kq").innerHTML = ` Tổng Điểm : ${loc_kq} => Đậu`
        }
    }

}

//##### Bài Tập 2 #####//
const MAX_50 = 25000 //50*500
const MAX_50_1 = 32500 // 50*650
const MAX_100_2 = 85000 //850*100
const MAX_150_3 = 165000 // 150*1100

function tinhTienDien(kw) {
    var tiendien = 0;
    if (kw > 350) {
        tiendien = (kw - 350) * 1300 + MAX_150_3 + MAX_100_2 + MAX_50_1 + MAX_50
    } else if (kw > 200 && kw <= 350) {
        tiendien = (kw - 200) * 1100 + MAX_100_2 + MAX_50_1 + MAX_50
    } else if (kw > 100 && kw <= 200) {
        tiendien = (kw - 100) * 850 + MAX_50_1 + MAX_50
    } else if (kw > 50 && kw <= 100) {
        tiendien = (kw - 50) * 650 + MAX_50
    } else {
        tiendien = kw * 500
    }
    return tiendien
}

document.getElementById("btn-bt2").onclick = function () {
    var hoten = document.getElementById("id_hoten").value;
    var kw = document.getElementById("id_kw").value * 1;

    var kq_tien = tinhTienDien(kw)
    document.getElementById("xuatkq_bt2").innerHTML = `Họ&Tên : ${hoten} <br> Tiền Điện ${kq_tien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`
}


///### Bài 3 ###



const NPT = 1600000; // tiền trợ cấp người phụ thuộc
const LUONG = 4000000; //tiền Lương
const THUE_5 = 60000000 * 0.05 // 5% cho 60tr đầu
const THUE_10 = 60000000 * 0.1 //10% cho  trên 60tr-120tr
const THUE_15 = 90000000 * 0.15 //15 % cho trên 120tr-210tr
const THUE_20 = 174000000 * 0.2 //20% cho trên 210tr - 384tr
const THUE_25 = 240000000 * 0.25 // 25% cho trên 384tr-624
const THUE_30 = 336000000 * 0.3 // 30% cho trên 624 - 960tr;

// Khia báo mốc
const MOC_960 = 960000000;
const MOC_624 = 624000000;
const MOC_384 = 384000000;
const MOC_210 = 210000000;
const MOC_120 = 120000000;
const MOC_60 = 600000000

function tinhthue(thunhap_3, nguoiPT_3) {
    var tien_PT = NPT * nguoiPT_3;
    var tienchiuThue = thunhap_3 - tien_PT - LUONG
    var tienthue = 0;

    if (tienchiuThue > MOC_960) {
        tienthue = (tienchiuThue - MOC_960) * 0.35 + THUE_30 + THUE_25 + THUE_20 + THUE_15 + THUE_10 + THUE_5
    } else if (tienchiuThue > MOC_624 && tienchiuThue <= MOC_960) {
        tienthue = (tienchiuThue - MOC_624) * 0.3 + THUE_25 + THUE_20 + THUE_15 + THUE_10 + THUE_5
    } else if (tienchiuThue > MOC_384 && tienchiuThue <= MOC_624) {
        tienthue = (tienchiuThue - MOC_384) * 0.25 + THUE_20 + THUE_15 + THUE_10 + THUE_5
    } else if (tienchiuThue > MOC_210 && tienchiuThue <= MOC_384) {
        tienthue = (tienchiuThue - MOC_210) * 0.2 + THUE_15 + THUE_10 + THUE_5
    } else if (tienchiuThue > MOC_120 && tienchiuThue <= MOC_210) {
        tienthue = (tienchiuThue - MOC_120) * 0.15 + THUE_10 + THUE_5
    } else if (tienchiuThue > MOC_60 && tienchiuThue <= MOC_120) {
        tienthue = (tienchiuThue - MOC_60) * 0.1 + THUE_5
    } else {
        tienthue = tienchiuThue * 0.05;
    }
    return {
        "TienThue": tienthue,
        "tiendongthue": tienchiuThue
    }

}

document.getElementById("btn-bt3").onclick = function () {
    let buocnhay = 1000000
    var hote_3 = document.getElementById("id_hoten_bt3").value;
    var thunhap_3 = document.getElementById("id_thunhap_bt3").value * 1 * buocnhay
    var nguoiPT_3 = document.getElementById("id_nguoipt").value * 1

    console.log(hote_3, thunhap_3, nguoiPT_3)
    var tienThue = tinhthue(thunhap_3, nguoiPT_3)

    if (hote_3 == "" || thunhap_3 == "" || nguoiPT_3 == "") {
        alert("Vui Lòng Nhập đủ thông tin")
        return
    } else {
        document.getElementById("xuatkq_bt3").innerHTML = ` Tên Người Nộp Thuế : ${hote_3} <br> Thu Nhập Chịu Thuế : ${tienThue.tiendongthue.toLocaleString('vi', { style: 'currency', currency: 'VND' })}  <br> Thuế Phải Đóng : ${tienThue.TienThue.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`
    }

}

// #### Bài Tập 4 ####///


//function gọi KH input khi doanh nghiệp
function myFunction() {
    var chonKH = document.getElementById("loaiKH").value;
    if (chonKH == "DoanhNGhiep") {
        document.getElementById("daunoi").style.display = "block"
    } else {
        document.getElementById("daunoi").style.display = "none"
    }
}

//function tính toán $
function tinhtienCap(loaiKH, soKenh, dauNoi) {
    var phiXULyHoaDon;
    var phiDichVuCoBan;
    var phiThuKenhCaoCap;
    var tienKenh;
    var total

    //xử lý riêng đầu nối dnghiep
    if (dauNoi <= 10 && dauNoi > 0) {
        tienKenh = 75;
    } else {
        tienKenh = 75 + (dauNoi - 10) * 5
    }

    // xử lý quy đổi ra chi phí
    switch (loaiKH) {
        case "DanCu":
            phiXULyHoaDon = 4.5
            phiDichVuCoBan = 20.5
            phiThuKenhCaoCap = 7.5 * soKenh;
            break;

        default:
            phiXULyHoaDon = 15
            phiDichVuCoBan = tienKenh;
            phiThuKenhCaoCap = 50 * soKenh;
            break;
    }

    //xử lý total 
    total = phiXULyHoaDon + phiDichVuCoBan + phiThuKenhCaoCap;
    return total;
}
document.getElementById("btn-tiencap").onclick = function () {
    var loaiKH = document.getElementById("loaiKH").value;
    var maKH = document.getElementById("maKH").value;
    var soKenh = document.getElementById("soKenh").value;
    var dauNoi = document.getElementById("daunoi").value;


    if (loaiKH == "" || maKH == "" || soKenh == "") {
        alert("vui lòng nhập đủ thông tin")
        return
    } else {
        var tienthu = tinhtienCap(loaiKH, soKenh, dauNoi);
        document.getElementById("xuatkq_bt4").innerHTML = ` Mã KH là : ${maKH} <br> Tiền Cap : ${tienthu.toLocaleString('us', { style: 'currency', currency: 'USD' })}`
    }
}
