// LEXICAL SCOPE //

// kenapa pakai function =
// 1. untuk membuat function FACTORY
// 2. untuk membuat private method

// closure = sebuah function yang sudah memiliki data dari hasil function yang lain
// closure = sebuah function yang di return oleh function yg lain. yg memiliki akses ke lingkungan saat ia diciptakan
// ada akses/interaksi/ambil aktivitas dari parent scope
// FUNCTION DI RETURN OLEH FUNCTION YANG LAIN
// contoh closure

//========================================= CLOSURE =========================================//

function functionParent () {
    let namaLocal = 'LOCAL'
    function functionInner(){
        console.log(namaLocal)   // CLOSURE
    }
    functionInner()
    console.dir(functionInner)
}
functionParent()

// function functionParent (namaGlobal) {
//     let namaLocal = 'LOCAL'
//     function functionInner(){
//         console.log(namaGlobal)   // CLOSURE
//         console.log(namaLocal)   // CLOSURE
//     }
//     functionInner()
//     console.dir(functionInner)
// }
// functionParent('GLOBAL')

//========================================= SCRIPT =========================================//

//// Script = ngambil nilainya berasal dari global

// let namaGlobal = 'GLOBAL'
// function functionParent () {
//     function functionInner(){
//         console.log(namaGlobal)   // SCRIPT
//     }
//     functionInner()
//     console.dir(functionInner)
// }
// functionParent()

// let namaGlobal = 'GLOBAL'
// function functionParent (namaGlobal) {
//     console.log(namaGlobal)   // SCRIPT 
//     console.dir(functionParent)
// }
// functionParent(namaGlobal)

//=================================== SCRIPT dan CLOSURE ===================================//

// let namaGlobal = 'GLOBAL'
// function functionParent (namaGlobal) {
//     function functionInner(){
//         console.log(namaGlobal)   // CLOSURE dan SCRIPT bersamaan
//     }
//     functionInner()
//     console.dir(functionInner)
// }
// functionParent(namaGlobal)
// //// CLOSURE (karena ada aktivitas Function parent memanggil variabel global)
// //// SCRIPT (karena nilainya berasal dari global)

// let namaGlobal = 'GLOBAL'
// function functionParent (namaGlobal) {
//     let namaLocal = 'LOCAL'
//     function functionInner(){
//         console.log(namaGlobal)   // CLOSURE dan SCRIPT bersamaan
//         console.log(namaLocal)   // CLOSURE
//     }
//     functionInner()
//     console.dir(functionInner)
// }
// functionParent(namaGlobal)