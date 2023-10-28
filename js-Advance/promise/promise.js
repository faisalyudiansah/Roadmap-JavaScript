// promise
// Promise adalah sebuah OBJECT yang mempresentasikan keberhasilan/kegagalan dari sebuah event yang ASYNCHRONOUS di masa yang akan datang

// Promise = janji (terpenuhi / ingkar)
// si janji ini keadaan nya disebut STATES (fulfilled, rejected, pending)
// 1. fulfilled = terpenuhi
// 2. rejected = ingkar
// 3. pending = waktu tunggu sebelum janji nya terpenuhi atau tidak

// untuk menjalankan keadaan di atas, ada 3 fungsi callback
// 1. resolve = ketika janji nya terpenuhi
// 2. reject = ketika janji nya TIDAK terpenuhi
// 3. finally = ketika waktu pending selesai (mau itu terpenuhi atau ingkar)

// aksi ketika janji terpenuhi ATAU tidak tepenuhi
// 1. then = method jika terpenuhi (untuk menjalankan resolve)
// 2. catch = method jika TIDAK terpenuhi (untuk menjalankan reject)

// PROMISE BIASANYA DIGUNAKAN UNTUK REQUEST KE SEBUAH API
// fetch mengembalikan promise

// let movies = fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=one-piece')
// console.log(movies)  // output promise

fetch('http://www.omdbapi.com/?apikey=ba41c0fc&s=one-piece')
    .then(result => result.json()) // Method json mengembalikan promise
    .then(result => console.log(result)) // output sama kayak ajak jquery

// PROMISE BIASANYA DIGUNAKAN UNTUK REQUEST KE SEBUAH API

//======================================================= cth 1. promise sederhana
let ditepati = true
// karena dia object, pakai new untuk membuat object. TAPI object nya object khusus, YAITU PROMISE
// OBJECT tsb punya 2 paramter, bikin pakai callback
let janji1 = new Promise((resolve, reject) => {  
    if (ditepati) {
        resolve('Janji ditepati')
    } else {
        reject('Janji TIDAK ditepati')
    }
})
console.log(janji1) // untuk menjalankan nya secara langsung. output : promise

// UNTUK TANGKAP resolve dan reject nya, gunakan method then dan catch
janji1
    .then(result => console.log('OK : ' + result))          // then untuk menangkap resolve
    .catch(result => console.log('NOT OK : ' + result))     // catch untuk menangkap reject

