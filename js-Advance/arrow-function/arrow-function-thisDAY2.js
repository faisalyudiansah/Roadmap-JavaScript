// object function constructor

function Pemain(){
    this.nama = 'ronaldo'
    this.umur = 38
    this.sayHello = function() {
        return `halo ${this.nama}, saya berumur ${this.umur}`
    }
    // setInterval(() => {
    //     return console.log(this.umur++)
    // }, 500)
}
let pemain1 = new Pemain()
console.log(pemain1.sayHello())

