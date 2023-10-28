// Higher order function = function yang beroperasi pada function yang lain.
// baik itu digunakan dalam argument maupun sebagai return value

// FUNCTION YANG DI SIMPAN SEBAGAI ARGUMENT / PARAMETER DI SEBUT CALLBACK
// FUNCITON YANG MEMILIKI CALLBAcK DI SEBUT higher order function

// untuk : asbtraksi atau lebih simple

//=================================================================================================
                                            // contoh pada closure
function pemain(waktu){                     // closure termasuk di higher order function
    return function(nama) {
        console.log(`halo ${nama}, selamat ${waktu}`)
    }
}
let pemain1 = pemain('pagi')
pemain1('ronaldo')

//=================================================================================================
function mataKuliah(dosen, selesai) {   // selesai adalah callback, dosen adalah parameter biasa
    console.log(`Mulai mengerjakan tugas dari ${dosen}`)
    selesai()
}
function selesai() {
    alert('berakhir...')
}
mataKuliah('ronaldo', selesai)

//=================================================================================================
function hitung (n, functionLAIN) {     // FunctionLAIN adalah callback
    for(let i=1; i<=n; i++) {
        functionLAIN(n)
    }
}
hitung(5, console.log)

//=================================================================================================
setTimeout(function() {                 // function() adalah callback
    let say = 'hello world'
    console.log(say)
}, 500)                                 // ANGKA ini interger untuk simpan milisec

//=================================================================================================
let klik = document.querySelector('.button')
klik.addEventListener('click', function() {        //clik itu event, function adalah CALLBACK
    console.log('sudah diklik')
})

//=================================================================================================