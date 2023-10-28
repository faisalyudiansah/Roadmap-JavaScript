let clubs = Array.from(document.querySelectorAll('[data-duration]'))
let laliga = clubs.filter(club => club.innerHTML.includes('La Liga'))
    .map(item => item.dataset.duration) 
    .map(waktu => { 
        let timeToArray = waktu.split(':').map(stringtoINT => parseFloat(stringtoINT))
        return (timeToArray[0]*60) + timeToArray[1]
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

let jam = Math.floor(laliga / 3600)
    laliga = laliga - jam * 3600
let menit = Math.floor(laliga / 60)
let detik = laliga - menit * 60

let pDuration = document.querySelector('.duration-match')
let pTotalClub = document.querySelector('.total-club')
pDuration.innerHTML = `${jam} jam, ${menit} menit, ${detik} detik.`
pTotalClub.innerHTML = `${clubs.filter(club => club.innerHTML.includes('La Liga')).length} Club`