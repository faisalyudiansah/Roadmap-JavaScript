//// menggunakan prototype inheritance menggunakan object constructor function
//// Mirip konsep class bahasa pemrograman oriented : java, php

// //// ini bukan object yg kita harus bikin baru tapi ini udah ada nempel kedalam object yang baru saja kita bikin template nya (object yang diatas)
// KarakterGame.prototype.tambahEnergi = function(pasif) {
//     this.energi += pasif
//     console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
// }
// KarakterGame.prototype.kurangEnergi = function(pasif) {
//     this.energi -= pasif
//     console.log(`Karakter ${this.nama} energi berkurang sebanyak ${pasif}`)
// }
// function KarakterGame(nama, energi) {
//     // let this = Object.create(KarakterGame.prototype) // ga perlu karena sudah bawaan javascript
//     this.nama = nama,
//     this.energi = energi
//     // return this  // ga perlu karena sudah bawaan javascript
// }

// let karakter1 = new KarakterGame('ling', 10)
// let karakter2 = new KarakterGame('fanny', 8)


////////////////////////////////////// VERSI CLASS ///////////////////////////////////////////
//// sama saja, sebenarnya yang terjadi dibelakang layar adalah yang diatas


class KarakterGame {
    constructor(nama, energi) {
        this.nama = nama,
        this.energi = energi
    }
    tambahEnergi (pasif) {
        this.energi += pasif
        console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
    }
    kurangEnergi (pasif) {
        this.energi -= pasif
        console.log(`Karakter ${this.nama} energi berkurang sebanyak ${pasif}`)
    }
}
let karakter1 = new KarakterGame('ling', 10)
let karakter2 = new KarakterGame('fanny', 8)