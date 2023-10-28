//// prototype menggunakan object constructor function
//// Mirip konsep class bahasa pemrograman oriented : java, php

//// JIKA PAKAI CONSTRUCTOR expression, KarakterGame nya harus di definisikan terlebih dahulu

let KarakterGame = function (nama, energi) {
    // let this = Object.create(KarakterGame.prototype) // dibelakang layar, javascript membuat seperti ini
    this.nama = nama
    this.energi = energi
    // return this // dibelakang layar, javascript membuat seperti ini
}
let karakter1 = new KarakterGame('ling', 10)

KarakterGame.prototype.tambahEnergi = function(pasif) {
    this.energi += pasif
    return `Karakter ${this.nama} menambah energi sebanyak ${pasif}`
}
KarakterGame.prototype.kurangEnergi = function(pasif) {
    this.energi -= pasif
    return `Karakter ${this.nama} mengurangi energi sebanyak ${pasif}`
}

////////////////////////////// VERSI class //////////////////////////////

// class KarakterGame {
//     constructor(nama, energi) { // properti didalam classs
//         this.nama = nama
//         this.energi = energi
//     }
//     tambahEnergi(pasif) {
//         this.energi += pasif
//         return `Karakter ${this.nama} menambah energi sebanyak ${pasif}`
//     }
//     kurangEnergi(pasif) {
//         this.energi -= pasif
//         return `Karakter ${this.nama} mengurangi energi sebanyak ${pasif}`
//     }
// }
// let karakter1 = new KarakterGame('ling', 10)
