// ================================================  LOOPING dengan map karena map expression juga
// let pemain = [
//     {
//         nama : 'ronaldo',
//         no : 7
//     },
//     {
//         nama : 'messi',
//         no : 10
//     },
//     {
//         nama : 'robinho',
//         no : 9
//     }
// ]
// let pemain1 = 
// `<div class="plyr">${pemain.map(i =>
//     `<ul>
//         <li>${i.nama}</li>
//         <li>${i.no}</li>
//     </ul>`).join('')}
// </div>`
// document.body.innerHTML = pemain1

//================================================ Nested HTML Freagment + Looping
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

let pemain = [
    {
        nama : 'ronaldo',
        club : ['chelsea','bogor','depok']
    },
    {
        nama : 'neymar',
        club : ['kopi','bogor','mosue']
    },
    {
        nama : 'ronaldinho',
        club : ['teh','bogor','pxi']
    },
]
let pemain1 = `
<div class="ply">
    ${pemain.map(i => 
        `<h2>${i.nama}</h2> 
        ${i.club.map(a => 
            `<li>${a}</li>`).join('')}
    `).join('')}
</div>`
document.body.innerHTML = pemain1
