// var penumpang = []
var penumpang = ['faisal', undefined, 'ronaldo']
//// for untuk cek keseluruhan di dalam angkot secara looping
for(var i=0; i<penumpang.length; i++){
    if (penumpang[i] == undefined){
        console.log('Jumlah penumpang saat ini = ' + (penumpang.length - 1))
    }
}
if (penumpang.length == 0) {
    console.log('Angkot sedang kosong')
} 

var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        // nama penumpang jgn kosong (kalo angkot kosong)
        if (namaPenumpang == '') {
            console.log('isi nama penumpang terlebih dahulu')
            return penumpang
        } else {
            penumpang.push(namaPenumpang)
            return penumpang
        }
    } else {
        for(var i=0; i<penumpang.length; i++){
            // menggantikan undefined
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang
                return penumpang
            // cari nama penumpang
            } else if (penumpang[i] == namaPenumpang){  
                console.log('Penumpang ' + namaPenumpang + ' sudah ada di dalam angkot')
                return penumpang
            // menambah isi array ke index terakhir kalo ga ada undefined
            // cek jika seluruh kursi telah ditelusuri
            } else if (i == penumpang.length - 1) { // terhitung 3 karena lenght array nya 3. harusnya 0,1,2
                penumpang.push(namaPenumpang)
                return penumpang
            // nama penumpang jgn kosong (kalo angkot ga kosong)
            } else if (namaPenumpang == '') {
                console.log('isi nama penumpang terlebih dahulu')
                return penumpang
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot sedang kosong')
        return penumpang
    } else {
        for (var i=0; i<penumpang.length; i++){
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined
                return penumpang
            // karena pilihan hanya DUA yaitu NAMA SAMA dan TIDAK SAMA maka langsung cek seluruh kursi
            // pilihan NAMA SAMA sudah dicek di if atas, nah tinggal yang TIDAK SAMA
            // jika pakai else saja, hanya cek bagian index [0] saja. harus cek seluruh kursi
            // dikurang 1 karena kursi ada 3. tapi di index 0 , 1 , 2
            } else if (i == penumpang.length - 1) {
                console.log('Nama penumpang tersebut tidak ada di dalam angkot')
                return penumpang
            }
        }
    }
}