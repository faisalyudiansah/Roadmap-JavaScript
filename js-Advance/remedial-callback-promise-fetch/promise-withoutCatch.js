let ditepati = true
function janji2() {
    return new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji ditepati')
    } else {
        reject('Janji TIDAK ditepati')
    }
    })
}
janji2()                                    // TANPA CATCH. MENDING PAKAI CATCH. kalo function pakai()
    .then((result) => {
        console.log('OK : ' + result)
    }, (error) => {
        console.log('NOT OK : ' + error)
    })

// janji2()
//     .then(result => console.log('OK : ' + result))
//     .catch(result => console.log('NOT OK : ' + result))