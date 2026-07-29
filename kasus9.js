let daftarPemain = [
    {nama: 'sanz', skor: 1000, rank:''},
    {nama: 'matt', skor: 340, rank:''},
    {nama:'albert', skor: 790, rank:''},
]

function prosesLeaderboard(rank){
    let ranked = []
    for (i = 0; i < rank.length; i++){
        if (rank[i].skor >= 900){
            rank[i].rank = 'Gold Tier'
        } else if(rank[i].skor >= 700) {
            rank[i].rank = 'Silver Tier'
        } else {
            rank[i].rank = 'Bronze Tier'
        }
        ranked.push(rank[i])
    }
    return ranked
}

let hasil = prosesLeaderboard(daftarPemain)
console.log("List tier Pemain")
console.log(hasil)