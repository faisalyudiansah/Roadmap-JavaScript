//======================================================= cth 2. promise pending (ada waktu proses)
let ditepati = true
let janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Janji ditepati')
        }, 2000);
    } else {
        setTimeout(() => {
            reject('TIDAK ditepati')
        }, 2000);
    }
})
console.log('mulai')
// console.log(janji2.then(() => console.log('OK '))) // UNTUK LIHAT PROSES pending NYA
janji2
    // finally biasanya digunakan untuk off animation loading
    // pada saat promise mulai jalan (pending), animation ON, ketika di finally animation OFF
    .finally(() => console.log('selesai menunggu')) 
    .then(result => console.log('OK : ' + result))
    .catch(result => console.log('NOT OK : ' + result))
console.log('selesai')
