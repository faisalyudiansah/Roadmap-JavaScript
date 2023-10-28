// Async-await

// Async = Asynchronous function = sebuah function yang berkerja secara asynchronous melalui event loop yang menghasilkan implisit promise sebagai return value nya(function mengembalikan promise meskipun didalam nya tidak ada code yg asynchronous) tapi cara penulisan code nya menggunakan penulisan standar/SYNCHRONOUS
// atau untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promisenya selesai/resolve

// contoh async-await menggunakan promise biasa. buatan sendiri
// let coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// })
// console.log(coba)
// coba.then((coba) => console.log(coba))

function cobaPromise() {
    return new Promise((resolve, reject) => {
        let waktu = 5000
        if (waktu < 3000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu)
        } else {
            reject('kelamaan')
        }
    })
}
// cobaPromise()
//     .then(coba => console.log(coba))
//     .catch(err => console.log(err))

// let coba = cobaPromise()
//     .then(coba => console.log(coba))
//     .catch(err => console.log(err))

async function cobaAsync(){
    // cobaPromise()
    // .then(coba => console.log(coba))
    // .catch(err => console.log(err))
    try{
        let coba = await cobaPromise()
        console.log(coba)
    } catch(err) {
        console.log(err)
    }
}
cobaAsync()