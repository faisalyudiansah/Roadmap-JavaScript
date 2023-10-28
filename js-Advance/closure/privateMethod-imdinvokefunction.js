//// untuk menghitung sudah berapa kali tombol di klik
//// CLOSURE
//// private method untuk melindungi variabel counter agar mengantisipasi untuk terganggu nya nilai tersebut
//// variabel counter akan terganggu jika ditaruh diluar

// let add = function() {
//     let counter = 0
//     return function(){
//         return ++counter
//     }
// }

// counter = 100 // TIDAK AKAN MENGGANGGU FUNCTION NYA

// let a = add()
// console.dir(add()) //// CLOSURE
// console.log(a())
// console.log(a())
// console.log(a())


//===================================== di ringkas =====================================//


//===================================== immediately invoked function expression
//===================================== supaya automatis menjalankan function. Tanpa harus memindahkan ke variabel
//===================================== function expression dan tetap CLOSURE

let add = (function() {
    let counter = 0
    return function(){
        return ++counter
    }
})()

counter = 100 // TIDAK AKAN MENGGANGGU FUNCTION NYA

console.dir(add)
console.log(add())
console.log(add())
console.log(add())
console.log(add())