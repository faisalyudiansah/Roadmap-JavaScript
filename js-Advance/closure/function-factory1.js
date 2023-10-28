//======================================= yang biasanya :

// function functionParent(){
//     let namaLocal = 'LOCAL'
//     function functionInner(){
//         console.log(namaLocal)
//     }
//     functionInner()
//     console.dir(functionInner)
// }
// functionParent()

//======================================= diubah ke : (INI MEMUNGKINKAN KITA UNTUK BISA MELAKUKAN FUNCTION FACTORY)

// function functionParent(){
//     let namaLocal = 'LOCAL'
//     function functionInner(){
//         console.log(namaLocal)
//     }
//     return functionInner    // mengembalikan function ini tanpa menjalankannya
// }
// let panggil = functionParent() // agar bisa functionInner nya jalan
// panggil()   // untuk menampilakn functionInner
// console.dir(panggil)    // masih closure

//======================================= FUNCTION FACTORY
//======================================= misal : agar isi namaLocal tergantung user memasukkan nya
//======================================= TIDAK CLOSURE(*masih bingung dan dipertanyakan*)

// function functionParent(){
//     function functionInner(namaLocal){
//         console.log(namaLocal)
//     }
//     return functionInner    // mengembalikan function ini tanpa menjalankannya
// }
// let panggil = functionParent() // agar bisa functionInner nya jalan
// panggil('DARI ARGUMENT')   // untuk menampilkan functionInner dan menjalankannya
// panggil('DARI ARGUMENT 2') 
// console.dir(panggil)    // TIDAK closure

//======================================= ANONYMOUS FUNCTION
//======================================= yang diatas agar bisa lebih diringkas
//======================================= TIDAK CLOSURE(*masih bingung dan dipertanyakan*)

function functionParent(){
    return function (namaLocal){
        console.log(namaLocal)
    }
}
let panggil = functionParent() // agar bisa functionInner nya jalan
panggil('DARI ARGUMENT')   // untuk menampilkan functionInner dan menjalankannya
panggil('DARI ARGUMENT 2')
console.dir(panggil)    // TIDAK closure