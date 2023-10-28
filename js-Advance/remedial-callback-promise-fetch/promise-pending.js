//=============================================================== Pending
//=============================================================== Pakai promise setelah waktu tertentu


let ditepati = true
let janji2 = new Promise((resolve, reject) => {
    if(ditepati) {
        setTimeout(() => {
            resolve('Janji ditepati')
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Janji TIDAK ditepati')
        }, 2000);
    }
})

console.log('Mulai')

// untuk liat proses pendingnya
console.log(janji2
    .finally(() => console.log('Selesai menunggu :'))
    .then(() => console.log(janji2))
    .catch(() => console.log(janji2))
)

// janji2
//     .finally(() => console.log('Selesai menunggu :'))
//     .then(result => console.log('OK : ' + result))
//     .catch(result => console.log('NOT OK : ' + result))

console.log('Selesai')