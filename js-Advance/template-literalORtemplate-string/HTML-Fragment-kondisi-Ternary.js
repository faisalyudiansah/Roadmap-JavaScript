//================================================ PENGKONDISIAN Ternary
let pemain = {
    nama : 'ronaldo',
    club : 'real madrid',
    status : 'Cidera',
    no : 7
}
let pemain1 = 
`<div class="plyr">
    <ul>
        <li>Nama = ${pemain.nama}</li>
        <li>Club = ${pemain.club}. ${pemain.status ? `Status = ${pemain.status}` : `Status = Fit` }</li>
    </ul>
</div>`
document.body.innerHTML = pemain1
