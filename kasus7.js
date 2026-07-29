let daftar = [
    {nama: 'KFC', rating: 4.5, aktif: true},
    {nama: 'MCD', rating: 4.0, aktif: false},
    {nama: 'Wendys', rating: 5.0, aktif: true},
    {nama: 'MBG', rating: 2.3, aktif: true}
]

function filterRestoranFavorit (rate){
    let penuhKriteria = [];
    for (i = 0; i < rate.length; i++){
        if (rate[i].rating >= 4.5 && rate[i].aktif === true){
            penuhKriteria.push(rate[i])
        }
    } 
    return penuhKriteria
}
let hasil = filterRestoranFavorit(daftar)
console.log(`List Restoran yang memenuhi kriteria:`)
console.log(hasil)