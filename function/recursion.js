// for(i=10; i>0; i--){
//     console.log(i)
// }

////rekursif//////////////////////////////////////////////////////////////
// function cetakAngka(n) {
//     if (n === 0) {
//         return
//     }
//     console.log(n)
//     return cetakAngka(n-1)
// }
// cetakAngka(10)

// function faktorial2 (n){
//     var hasil = 1
//     for(i=n; i>0; i--){
//         hasil = hasil * i
//     }
//     return hasil
// }
// var cek2 = faktorial2(5)
// console.log(cek2)   // 5! = 5 x 4 x 3 x 2 x 1 = 120

////rekursif//////////////////////////////////////////////////////////////
function faktorial(n) {
    if(n === 0) {
        return 1
    }
    console.log(n)
    return n * faktorial(n - 1)
}
var cek = faktorial(5)
console.log(cek) // 5! = 5 x 4 x 3 x 2 x 1 = 120
