let ipk = [2.5, 3.5, 4.0, 2.3, 4.5]
let pend = [5000000, 2500000, 1000000, 3000000, 1500000]

function seleksiBeasiswa(nilai, pendapatan) {
    for (let i = 0; i < nilai.length; i++){
        if (nilai[i] >= 3.5 && pendapatan[i] <= 5000000) {
            console.log(`Siswa ke-${i + 1} dengan ipk ${nilai[i]} lulus`)
        } else {
            console.log(`Siswa ke-${i + 1} dengan ipk ${nilai[i]} tidak lulus`)
        }
    }
}

seleksiBeasiswa(ipk, pend)