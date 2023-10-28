//// OBJECT CONSTRUCTOR

// function karakterGame(nama, energi, tambahEnergi) {
//     this.nama = nama,
//     this.energi = energi,
//     this.tambahEnergi = function(pasif) {
//         this.energi = this.energi + pasif
//         console.log(`Karakter ${this.nama} telah menambah energi sebanyak ${pasif}`)
//     }
// }
// let karakter1 = new karakterGame('ling', 10)
// let karakter2 = new karakterGame('fanny', 8)

// ATAU 

function Player(namaDepan,namaBelakang,umur,club,negara) {
  this.namaDepan = namaDepan
  this.namaBelakang = namaBelakang
  this.umur = umur
  this.club = club
  this.negara = negara
  this.namaplayer = function() {
      return this.namaDepan + ' ' + this.namaBelakang
  }
}
let player1 = new Player('Cristiano', 'ronaldo', 38, 'Real Madrid', 'Portugal')
console.log(`Nama pemain = ${player1.namaplayer()}`)
console.log(`Nama club = ${player1.club}`)