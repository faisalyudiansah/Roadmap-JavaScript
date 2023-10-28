var jumlahAngkot = 10
var noAngkotLembur = 8
var noAngkotLembur2 = 10
var angkotOperasi = 6
var noAngkot = 1
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotOperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else if (noAngkot === noAngkotLembur || noAngkot === noAngkotLembur2) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}