let daftar = [
    {nama: 'budi', umur: 60, kategori: ''},
    {nama: 'siregar', umur: 45, kategori: ''},
    {nama: 'santoso', umur: 73, kategori: ''},
]
function kelompokkanAntreanPasien (kat){
    let kategori = []
    for (i = 0; i < kat.length; i++){
        if (kat >= 60) {
            kat[i].kategori = 'Prioritas Lansia'
        } else {
            kat[i].kategori = 'Antrean Reguler'
        }
        kategori.push(kat[i])
    }
    return kategori
}

let hasil = kelompokkanAntreanPasien(daftar)
console.log('Kategori Pasien:')
console.log(hasil)