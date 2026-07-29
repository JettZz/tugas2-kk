function cekRestockGudang(produk, threshold) {
    let daftarRestock = []; 
    for (let i = 0; i < produk.length; i++) {
        if (produk[i].stok < threshold && produk[i].aktif === true) {
            daftarRestock.push(produk[i]);
        }
    }
    return daftarRestock;
}

const produk = [
    { nama: "Laptop", stok: 10, aktif: true },
    { nama: "Mouse", stok: 3, aktif: true },
    { nama: "Keyboard", stok: 8, aktif: false },
    { nama: "Monitor", stok: 2, aktif: true },
    { nama: "Printer", stok: 5, aktif: true }
];

const hasil = cekRestockGudang(produk, 5);
console.log(hasil);