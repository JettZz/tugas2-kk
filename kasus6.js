let daftar = [10, 8, 9, 7, 8, 9, 8] 
function hitungGajiMinggu(jam){
    let totalJam = 0;
    for (i = 0; i < jam.length; i++){
        totalJam += jam[i]
    }
    
    console.log(`Total Jam Kerja: ${totalJam}`)
    let gaji;

    if (totalJam > 40) {
        let jamNormal = 40;
        let jamLembur = totalJam - 40

        gaji = (jamNormal * 40000) + (jamLembur * 75000)
    } else {
        gaji = totalJam * 50000
    }
    return gaji
}

const totalGaji = hitungGajiMinggu(daftar);
console.log(`Total gaji mingguan: Rp ${totalGaji.toLocaleString('id-ID')}` );