// strinng literal

let string1 = 'ronaldo 1'
let string2 = "ronaldo 2"
let string3 = `ronaldo 3` // template literal

//================================================ HTML FRAGMENTS
let pemain = {
    nama : 'ronaldo',
    club : 'real madrid',
    negara : 'portugal',
    no : 7,
    posisi : 'striker'
}
let pemain1 = 
`<div class="plyr">
    <h2>${pemain.nama}</h2>
    <span class="club">${pemain.club}</span>
</div>`
console.log(pemain1)
document.body.innerHTML = pemain1