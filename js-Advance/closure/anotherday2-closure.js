// function functionParent() {
//     let dariParent = 'DARI PARENT'
//     function functionInner() {
//         let zehaha = console.log(dariParent)
//         return zehaha
//     }
//     functionInner()
//     console.dir(functionInner)
// }
// functionParent()

// function functionParent(parameter) {
//     let dariParent = 'DARI PARENT'
//     function functionInner() {
//         let zehihi = console.log(parameter)
//         let zehaha = console.log(dariParent)
//         return zehaha, zehihi
//     }
//     functionInner()
//     console.dir(functionInner)
// }
// functionParent('DARI ARGUMENTS')


//=================================================== Cara biasa function factory
// function ucapkanSalam(waktu) {
//     function salam(nama) {
//         let kalimat = console.log(`halo ${nama}! selamat ${waktu}`)
//         return kalimat
//     }
//     return salam
// }

// let pagi = ucapkanSalam('pagi')
// let siang = ucapkanSalam('siang')
// let malam = ucapkanSalam('malam')
// pagi('ronaldo')
// siang('messi')
// malam('neymar')
// console.dir(pagi)

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         return console.log(`halo ${nama}! selamat ${waktu}`)
//     }
// }
// let pagi = ucapkanSalam('pagi')
// let siang = ucapkanSalam('siang')
// let malam = ucapkanSalam('malam')
// pagi('ronaldo')
// siang('messi')
// malam('neymar')
// console.dir(pagi)



//=================================================== Cara biasa private method
// function add(){
//     let hitButton = 0
//     function hitungHit () {
//         return ++hitButton
//     }
//     return hitungHit
// }
// let hit = add()
// console.dir(add())  // cek closure
// console.log(hit())
// console.log(hit())
// console.log(hit())


//=================================================== Cara anonymous function
// function add(){
//     let hitButton = 0
//     return function () {
//         return ++hitButton
//     }
// }
// let hit = add()
// console.dir(add())  // cek closure
// console.log(hit())
// console.log(hit())
// console.log(hit())


//=================================================== Cara immediately invoked function expression
//=================================================== function expression
let add = (function () {
    let hitButton = 0
    return function () {
        return ++hitButton
    }
})()
console.dir(add)  // cek closure
console.log(add())
console.log(add())
console.log(add())