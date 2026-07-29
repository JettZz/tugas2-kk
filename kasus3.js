let plat = [1945, 2454, 2372, 2567]
let tgl = 29;

function filterParkirGanjilGenap (plat, tgl){
    let kendaraanDiizinkan = [];
    for (let i = 0; i < plat.length; i++){
        let digitTerakhir = (plat[i] % 10)

        if (digitTerakhir %2 === tgl %2){
            kendaraanDiizinkan.push(plat[i])
        } 
        return kendaraanDiizinkan
    }
}
let hasil = filterParkirGanjilGenap(plat, tgl)
console.log(`Tanggal: ${tgl}`)

if (tgl %2 === 0){
    console.log('Hari ini tanggal genap')
} else {
    console.log('Hari ini tanggal ganjil')
}

console.log(`kendaraan yang boleh masuk: ${hasil}`)