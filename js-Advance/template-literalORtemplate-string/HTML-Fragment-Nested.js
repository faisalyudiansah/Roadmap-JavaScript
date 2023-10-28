//=============================================== Nested HTML Freagment bersarang + LOOPING map()
// let pemain = {
//     nama : 'ronaldo',
//     club : ['real madrid', 'Manchester United', 'Sporting Lisbon', 'Club Arab'],
//     no : 7
// }
// let pemain1 = 
// `<div class="plyr">
//     <ul>
//         <li>Nama = ${pemain.nama}</li>
//         <li>Club =</li>
//             ${pemain.club.map(i => 
//                 `<ul>    
//                     <li>${i}</li>
//                 </ul>`
//             ).join('')}
//         <li>Club = ${pemain.no}</li>
//     </ul>
// </div>`
// document.body.innerHTML = pemain1

//=============================================== Nested HTML Freagment bersarang + map() disimpang ke function
let pemain = {
    nama : 'ronaldo',
    club : ['real madrid', 'Manchester United', 'Sporting Lisbon', 'Club Arab'],
    no : 7
}
function printClub(clubbbb) {
    return `
    <ol>
        ${clubbbb.map(i => `<li>${i}</li>`).join('')}
    </ol>`
}
let pemain1 = 
`<div class="plyr">
    <ul>
        <li>Nama = ${pemain.nama}</li>
        <ul>Club = ${printClub(pemain.club)}</ul>
        <li>Club = ${pemain.no}</li>
    </ul>
</div>`
document.body.innerHTML = pemain1