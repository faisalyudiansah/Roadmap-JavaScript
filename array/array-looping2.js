///// LOOPING map /////////////

var angka =[1, 2, 3, 4]
// for(var i=0; i<angka.length; i++) {
    //     console.log(angka[i])
    // }   
//// untuk setiap element (e) yang ada pada element di array (angka), lakukan function berikut ini (console)

//// sama kayak forEach jika nama method nya saja diganti
angka.map(function (e) {
    console.log(e * 2)
})

angka.map(function (e) {
    console.log('nomor ke ' + e)
})

///////////////////// map mengembalikan nilai array sedangkan forEach tidak ////////////////////////
//// kayak array biasa yang langsung pakai console.log tanpa method for
var angka2 = angka.map(function (e) {
    return e * 2
})
console.log(angka2)
console.log(angka2.join(' - ')) //// ubah jadi string
console.log('nomor ke ' + angka2)   //// tidak bisa

//////////////////////////////////// perbedaan dengan forEach /////////////////////////////////////////

angka.forEach(function (e) {
    console.log(e * 2)
})

angka.forEach(function (e) {
    console.log('nomor ke ' + e)
})