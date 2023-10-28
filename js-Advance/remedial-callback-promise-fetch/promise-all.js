// Method all() untuk menjalankan banyak promise sekaligus. 
// cth ngambil 2 API sekaligus

let club = true
let realmadrid = new Promise((resolve, reject) => {
    if(club) {
        setTimeout(() => {
            resolve([{
                striker : 'Ronaldo',
                mid : 'modric',
                defender : 'ramos',
                goalkeeper : 'Navas'
            }])
        }, 2000);
    } else {
        reject('Data error')
    }
})
let barcelona = new Promise((resolve, reject) => {
    if(club) {
        setTimeout(() => {
            resolve([{
                striker : 'Messi',
                mid : 'Iniesta',
                defender : 'Pique',
                goalkeeper : 'Valdes'
            }]) 
        }, 1000);
    } else {
        reject('Data error')
    }
})
//========================================================== CARA BIASA . Urutan tegantung setTimeOut
// realmadrid
//     .then(result => console.log(result))
//     .catch(result => console.log(result))
// barcelona
//     .then(result => console.log(result))
//     .catch(result => console.log(result))

//========================================================== KALO PAKAI ALL . Urutan tergantung dalam array
// Promise.all([realmadrid, barcelona])
//     .then(result => console.log(result))
//     .catch(result => console.log(result))

//========================================================== KALO PAKAI ALL tapi dipisah . Urutan dari console
//========================================================== Memisahkan dengan spread operator
Promise.all([realmadrid, barcelona])
    .then(result => {
        let [realmadrid, barcelona] = result
        console.log(realmadrid)
        console.log(barcelona)
    })
    .catch(result => console.log(result))