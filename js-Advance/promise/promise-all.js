//======================================================= cth 3. promise METHOD Promise.all()
//======================================================= untuk menjalankan banyak promise sekaligus

let film = new Promise(resolve => { // cuma ambil ditepati saja
    setTimeout(() => {
        resolve([{
            title : 'One Piece Live Action',
            runtime : '120min',
            sutradara : 'Ronaldo'
        }])
    }, 2000);
})
let anime = new Promise(resolve => { // cuma ambil ditepati saja
    setTimeout(() => {
        resolve([{
            title : 'Naruto',
            runtime : '22min',
            sutradara : 'Messi'
        }])
    }, 1000);
})
//================================================ cara biasa, URUTAN NYA SESUAI DENGAN setTimeOut
// film.then(result => console.log(result))
// anime.then(result => console.log(result))

//================================================ cara Promise.all() . URUTAN SESUAI CONSOLE
Promise.all([film, anime])
    // .then(result => console.log(result))    // output dalam bentuk array
    .then(result => {                          // agar output tidak didalam array yang sama (dipisah)
        let [film, anime] = result
        console.log(film)
        console.log(anime)
    })