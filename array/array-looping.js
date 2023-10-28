///// LOOPING forEach /////////////

var angka =[1, 2, 3, 4, 5, 6, 7, 8]
// for(var i=0; i<angka.length; i++) {
    //     console.log(angka[i])
    // }   
//// untuk setiap element (e) yang ada pada element di array (angka), lakukan function berikut ini (console)
angka.forEach(function (e) {
    console.log(e)
})

var arr = ['faisal', 'yudiansah', 'ronaldo', 'messi', 'neymar']
arr.forEach(function (e, i) {   ///// untuk memakai index, harus tambah i
    console.log('mahasiswa ke ' + (i+1) + ' adalah ' + e)
})


//// ATAU PAKAI FUNCTION EXPRESSION //////////////////////////////////////////////////////////////


var laptop = ['acer', 'asus', 'lenovo', 'apple', 'dell']
var cetak = function (a) {
    console.log(a)
}
laptop.forEach(cetak)


var game = ['genshin', 'pubg', 'coc']
var print = function(e, i) {
    console.log('no ' + (i+1) + ' adalah game ' + e)
}
game.forEach(print)