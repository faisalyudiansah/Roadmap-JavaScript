// OBJECT LITERAL

// let karakter1 = {
//     nama : 'ling',
//     energi : 10,
//     tambahEnergi : function(pasif) {
//         this.energi = this.energi + pasif
//         console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
//     }
// }

// let karakter2 = {
//     nama : 'fanny',
//     energi : 8,
//     tambahEnergi : function(pasif) {
//         this.energi = this.energi + pasif
//         console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
//     }
// }

//// atau membuat method diluar

let karakter1 = {
    nama : 'ling',
    energi : 10,
}
karakter1.tambahEnergi = function(pasif) {
    this.energi += pasif
    console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
}
karakter1.kurangEnergi = function(pasif) {
    this.energi -= pasif
    console.log(`Karakter ${this.nama} telah mengurangi energi sebanyak ${pasif}`)
}
