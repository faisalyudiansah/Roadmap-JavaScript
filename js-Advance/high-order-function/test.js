let clubs = Array.from(document.querySelectorAll('[data-duration]'))
let laliga = clubs.filter(club => club.innerHTML.includes('La Liga'))
            .map(item => item.dataset.duration)
            .map(time => {
                let timeToArray = time.split(':').map(stringToINT => parseFloat(stringToINT))
                return timeToArray[0]*60 + timeToArray[1]
            })
            .reduce((accumulator, currentValue) => accumulator + currentValue)
let jam     = Math.floor(laliga / 3600)
    laliga  = laliga - jam * 3600
let menit   = Math.floor(laliga / 60)
let detik   = laliga - menit * 60

let pTotalClub = document.querySelector('.total-club')
let pDuration = document.querySelector('.duration-match')
pTotalClub.innerHTML = `${clubs.filter(club => club.innerHTML.includes('La Liga')).length} Club`
pDuration.innerHTML = `${jam}jam, ${menit}menit, ${detik}detik`

// BUAT PEMBELAJARAN ULANG SAJA

// function showAlert(){
//     return alert
// }
// setTimeout(() => {
//     showAlert()('hallo')
// }, 1000)

function showAlert(){
    return alert
}
function showStar(desc, showAlert) {
    let star = ''
    let zehaha = `${desc}`
    for(let i=1; i<=5; i++) {
        for(let a=1; a<=i; a++) {
            star += '*'
        }
        star += '\n'
    }
    console.log(zehaha)
    return showAlert()(star)
}
showStar('ronaldo', showAlert)