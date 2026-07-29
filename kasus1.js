let daftarHarga = [20000, 45000, 60000, 70000]

function hitungTotalBuku(totalHarga) {
    let totalSemua = 0;
    for (let i = 0; i < totalHarga.length; i++){
        totalSemua += totalHarga[i]
    }
    
     console.log('Harga Akhir: Rp.' + totalSemua)
    if (totalSemua > 150000){
        console.log('anda mendapat diskon 15%')
        totalSemua = totalSemua - (totalSemua * 15 / 100) 
        console.log(`Harga akhir: Rp.${totalSemua}`)
    } else {
        console.log('Tidak mendapat potongan')
    }
   
    return totalSemua
}

hitungTotalBuku(daftarHarga)