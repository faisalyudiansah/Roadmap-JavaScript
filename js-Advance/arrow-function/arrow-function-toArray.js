// contoh arrow function

// FUNCTION map()
// Untuk mempetahkan sebuah function ke dalam ARRAY

//================================================== Cara biasa function map
// let pemain = ['ronaldo', 'messi', 'neymar']
// let hitungPerhuruf = pemain.map(function(nama) {
//     return nama.length
// })
// console.log(hitungPerhuruf)

//================================================== Cara ARROW FUNCTION biasa
// let pemain = ['ronaldo', 'messi', 'neymar']
// let hitungPerhuruf = pemain.map((nama) => {
//     return nama.length
// })
// console.log(hitungPerhuruf)

//================================================== Cara ARROW FUNCTION diringkas (IMPLISIT RETURN)
//================================================== Ga perlu ()parameter karena hanya satu parameter
//================================================== Ga perlu "return" karena isi hanya return saja
//================================================== Ga perlu {} karena isi hanya return saja
let pemain = ['ronaldo', 'messi', 'neymar']
let hitungPerhuruf = pemain.map(nama => nama.length)
console.log(pemain)