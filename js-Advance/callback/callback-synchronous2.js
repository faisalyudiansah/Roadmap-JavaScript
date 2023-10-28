let pemain = [
    {
        nama : 'Ronaldo',
        club : 'Real Madrid',
        position : 'Striker',
        no : 7
    },
    {
        nama : 'Kaka',
        club : 'AC Milan',
        position : 'Midfielder',
        no : 22
    },
    {
        nama : 'Ferdinand',
        club : 'Manchester United',
        position : 'Defender',
        no : 4
    },
]

// masih sycnhronous/ masih blocking
// console.log('MULAI')

    pemain.forEach(i => console.log(i.nama))
    
    // pemain.forEach(i => {        // di simulasi ke async
    //     setTimeout(() => {
    //         console.log(i.nama)
    //     }, 2000);
    // })

    // let hasil = []
    // pemain.forEach(i => hasil.push(i.nama))
    // console.log(hasil)

    let show = pemain.map(i => i.nama)
    console.log(show)

// console.log('SELESAI')