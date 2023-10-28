// contoh arrow function

// FUNCTION map()
// Untuk mempetahkan sebuah function ke dalam OBJECT

//================================================== Cara biasa function map
// let pemain = ['ronaldo', 'messi', 'neymar']
// let hitungPerhuruf = pemain.map(function(nama) {
//     return {
//         nama : nama,
//         jumlahHuruf : nama.length
//     }
// })
// console.log(hitungPerhuruf)
// console.table(hitungPerhuruf)
// // console.log(pemain.map(nama => nama))

//================================================== Cara ARROW FUNCTION biasa
// let pemain = ['ronaldo', 'messi', 'neymar']
// let hitungPerhuruf = pemain.map((nama) => {
//     return {
//         nama : nama,
//         jumlahHuruf : nama.length
//     }
// })
// console.log(hitungPerhuruf)
// console.table(hitungPerhuruf)

//============================================ Cara ARROW FUNCTION diringkas (IMPLISIT RETURN)
//============================================ Ga perlu bungkus (nama) parameter karena hanya satu parameter
//============================================ Ga perlu "return" karena isi hanya return saja
//============================================ Ga perlu {} karena isi hanya return saja
//============================================ GA PERLU nama:nama lagi JIKA properti SAMA nilai nya
let pemain = ['ronaldo', 'messi', 'neymar']
let hitungPerhuruf = pemain.map(nama => ({ // dibungkus ({..}) agar javascript tau jika kita membuat object
        nama,
        jumlahHuruf : nama.length
    })
)
console.log(hitungPerhuruf)
console.table(hitungPerhuruf)