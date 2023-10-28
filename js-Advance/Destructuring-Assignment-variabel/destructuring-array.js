// BONGKAR NILAI ARRAY ATAU PROPERTI DARI OBJECT KE DALAM VARIABEL TERPISAH
// kalo ARRAY PAKAI [..] di panggilnya
// kalo OBJECT PAKAI {..} di panggilnya

//================================================== Array
let pemain = ['ronaldo', 'neymar', 'messi', 'balotelli', 'el-sharawwy']
// console.log(pemain[0])
// console.log(pemain[1])
// console.log(pemain[2])

let [ronaldooo, neymarrr, messiii] = pemain     // KEY nya ga harus sama KALO ARRAY
let [, , , balotelliii, elsharawwyyy] = pemain     // KEY nya KALO MAU SKIP index
console.log(pemain)
console.log(ronaldooo)
console.log(neymarrr)
console.log(messiii)
console.log(balotelliii)
console.log(elsharawwyyy)

//======================================================= swap items cth kasus : arrow-function-css.js

let realmadrid = ['ronaldo', 'neymar', 'messi', 'balotelli', 'el-sharawwy']
let arsenal = ['kaka', 'marcelo', 'ibrahimovic', 'modric', 'casillas']
console.log(realmadrid)
console.log(arsenal)
// swap
let [a, b, c, d, e] = realmadrid
let [q, w, r, t, y] = arsenal;      // harus ada ;
[realmadrid, arsenal] = [arsenal, realmadrid]
console.log(realmadrid)
console.log(arsenal)
//cek
console.log(a)  // tidak ketukar
console.log(arsenal[0]) // ketukar

// contoh simple
let x = 1
let z = 2;          // harus ada ;
[z, x] = [x, z]
console.log(x)
console.log(z)