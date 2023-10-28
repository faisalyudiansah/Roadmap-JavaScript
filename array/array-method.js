var arr = ['faisal', 'yudiansah', 'ronaldo', 'messi', 'neymar']
arr [1] = undefined // menyembunyikan salah satu element pada array
console.log(arr)    //// menampilkan array nya bentuknya object
console.log(arr.join(' - '))    //// menggabungkan array nya dengan join()
console.log('nama = ' + arr)
//// pengulangan method for
for(i=0; i<arr.length; i++) {
    console.log('Nama pemain ke ' + (i + 1) + ' ' + arr[i])
}

// METHOD HARUS PAKAI TANDA ()

var game = ['genshin', 'pubg', 'coc', 'valorant', 'assassin']
console.log(game.join()) // mengubah array menjadi string
console.log(game.join(' - ')) // pemisah pakai -


let pemain = ['ibra', 'hazard', 'bale']
pemain.push('robinho', 'kaka') // untuk nambahin ke array di index terakhir
pemain.pop() //// untuk menghapus isi array pada index terakhir
console.log(pemain.join(' - '))


let makanan = ['kentang', 'nasi', 'ayam']
// makanan.unshift('ubi')    //// untuk menambahkan ke array di index PERTAMA
makanan.shift()    //// untuk menghapus isi array di index PERTAMA
console.log(makanan.join(' - '))


var mobil = ['audi', 'bmw', 'toyota', 'honda']
//// rumus splice =
//// splice(mulai dari index brp, mau dihapus brp, isiElement1. isiElement2, isiElement3, ...)
mobil.splice(2, 0, 'mercedez', 'suzuki') //// Menambah sebuah element di tengah array
mobil.splice(4, 2) //// menghapus mulai dari index 4, dan ada 2 index yang dihapus (toyota, honda)
console.log(mobil.join(' - '))


var motor = ['mio', 'klx', 'satria', 'ninja', 'beat']
// SLICE MENGHASILKAN ARRAY BARU, HARUS DI TAMPUNG
// motor.slice() //// mengiris array. mau mengambil beberapa bagian pada array untuk menjadi array yang baru
var motor2 = motor.slice(1, 3) //// Mengambil dari index KLX, sampai SATRIA. Ninja[3] TIDAK IKUT
//// rumus slice
//// splice(mulai dari index brp, sampai index brp)
console.log(motor.join(' - '))
console.log(motor2.join(' - '))