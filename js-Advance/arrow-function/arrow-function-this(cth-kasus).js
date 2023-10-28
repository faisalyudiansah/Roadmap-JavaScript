// contoh kasus menggunakan object constructor function expression
// sebuah function yg automatis dijalankan

// FUNCTION DECLARATION KENA HOISTING sedangkan EXPRESSION TIDAK

let Pemain = function (){
    this.nama = 'ronaldo'
    this.umur = 38
    this.sayHello = function() {
        return `Saya ${this.nama} dan berumur ${this.umur}` 
    }
    setInterval(() => {
        return console.log(this.umur++)
    }, 1000);
}
let pemain1 = new Pemain()
console.log(pemain1.sayHello())