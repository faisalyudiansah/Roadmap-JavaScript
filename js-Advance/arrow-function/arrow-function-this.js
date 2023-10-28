// function declaration & function expression memiliki konsep this
// jika mengubah function expression menjadi ARROW FUNCTION, konteks this nya jadi berbeda

//====================================== CONSTRUCTOR FUNCTION
// let Pemain = function (){
//     this.nama = 'ronaldo'
//     this.umur = 38
//     this.sayHello = function() {
//         return `Saya ${this.nama} dan berumur ${this.umur}`
//     }
// }
// let pemain1 = new Pemain()
// console.log(pemain1.sayHello())

//====================================== ARROW FUNCTION dengan OBJECT CONTSTRUCTOR FUNCTION
//================================ tidak bisa mengubah semua function jadi arrow function
//================================ tidak bisa membuat constructor function menggunakan arrow function
//============ TAPI METHOD BISA (constructor method arrow atau function biasa sama) ============//
//================================ arrow function tidak menyimpan konsep this. AKAN cari keluar/window global

// let Pemain = function() {
//     this.nama = 'ronaldo'
//     this.umur = 38
//     this.sayHello = () => `Saya ${this.nama} dan berumur ${this.umur}`
// }
// let pemain1 = new Pemain()
// console.log(pemain1.sayHello())

//====================================== ARROW FUNCTION dengan OBJECT LITERAL 
//================================ akan berbeda dengan constructor
//================================ AKAN UNDEFINED KARENA GA ADA this.nama diatas maupun diglobal
let pemain = {
    nama : 'ronaldo',
    umur : 38,
    sayHello : () => `Saya ${this.nama} dan berumur ${this.umur}` 
}
console.log(pemain.sayHello())