let kaloriHarian = [175, 100, 184, 68, 167, 350, 105]
let target = 2500;

function evaluasiAsupanKalori (kal, trgt){
    let totalKal = 0;
    for (i = 0; i < kal.length; i++){
        totalKal += kal[i]
    } 

    console.log(`Total Kalori = ${totalKal}`)
    if (totalKal === trgt){
        console.log('target pas')
    } else if (totalKal < trgt){
        console.log('target kurang')
    } else if (totalKal > trgt){
        console.log('melebih target')
    }
}

evaluasiAsupanKalori(kaloriHarian, target)