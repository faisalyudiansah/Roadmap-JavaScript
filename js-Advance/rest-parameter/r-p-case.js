// Filtering pada argument/parameter yang dikirimkan
// cth = memfilter nilai-nilai berdasar tipe datanya

function cthFilter(...myArgs) {
    // return myArgs.filter(i => parseFloat(i))         // ambil angka dengan parseFloat()
    return myArgs.filter(i => typeof i === 'number');   // ambil angka tergantung '..'
}
console.log(cthFilter('string', 2, true, 5, 'ronaldo', 1, false, 3, 'messi', 4))


// bisa pasang tambahan parameter untuk menangkap tipe data yang mau di filter
// tinggal ubah di argument mau tipe data apa

function cthFilter2(type, ...myArgs) {
    console.log(myArgs[0]) // output 2 karena 'string' sudah menjadi arg untuk par 'type'
    return myArgs.filter(i => typeof i === type);   // ambil angka tergantung argument[0]
}
console.log(cthFilter2('string', 2, true, 5, 'ronaldo', 1, false, 3, 'messi', 4))