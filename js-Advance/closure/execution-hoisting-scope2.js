// execution, hoisting, & scope

// execution = Creation phase, Execution phase

// a. Creation phase = fase pembuatan terjadi pada konteks global
// proses pencarian variabel dan function. lalu mengubah isi nya. setelah itu baru mengisi value sebenarnya
// nama var = undefined
// function = function()
// contoh jika terbalik =
    // console.log(nama)
    // var nama = 'faisal'

    // function pertambahan(a, b) {
    //     return a + b
    // }
    // console.log(pertambahan)

    // window = global window
    // this = window

// konsep diatas disebut HOISTING
// Meskipun ditulis dibawah, variabel dan function automatis akan dinaikkan ke atas

// b. Execution phase = eksekusi program dari atas kebawah

let nama = 'ronaldo'
function instaURL() {
    let link = ''
    for(let i=0; i<=arguments.length - 1; i++) {
        link += `https://instagram.com/${arguments[i]}`
        link += '\n'
    }
    return link
}
console.log(instaURL('messi', 'neymar'))
