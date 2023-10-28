// ambil semua element club
// Array from ubah node list to array = Array.from
let clubs = Array.from(document.querySelectorAll('[data-duration]')) // cariin element yang didalam nya ada atribut ini

// hanya menghitung jumlah club laliga
let totalClub = clubs.filter(club => club.innerHTML.includes('La Liga')).length

// pilih hanya la liga
let laliga = clubs.filter(club => club.innerHTML.includes('La Liga'))
    // ambil duration (bentuk string) masing-masing club
    .map(item => item.dataset.duration) // method dataset untuk mengambil atribut
    .map(waktu => { 
        // ubah duration string menjadi int, ubah menit jadi detik
        // delimiter/pembatasnya (':') & parse to int
        // split. misal 10:23 => [10, 23]
        let timeToArray = waktu.split(':').map(stringtoINT => parseFloat(stringtoINT))
        return (timeToArray[0]*60) + timeToArray[1]
    })
    // jumlahkan semua detik
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// ubah formatnya jadi jam menit detik (ubah satu-satu dari jam menit detik)
let jam = Math.floor(laliga / 3600) // math.floor pembulatan ke bawah karena waktu
    laliga = laliga - jam * 3600    // sisa menit
let menit = Math.floor(laliga / 60)
let detik = laliga - menit * 60

// simpan di dom
let pTotalClub = document.querySelector('.total-club')
let pDuration = document.querySelector('.duration-match')
pTotalClub.innerHTML = `${totalClub} Club`
pDuration.innerHTML = `${jam} jam, ${menit} menit, ${detik} detik.`