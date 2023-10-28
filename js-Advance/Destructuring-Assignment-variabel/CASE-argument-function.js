// DESTRUCTURING (berguna untuk object yg KOMPLEX)

let pemain = {
    nama : 'ronaldo',
    club : 'realmadrid',
    no : 7
}

function methodPemain1({nama, club, no}) {
    return [nama, no]
}
console.log(methodPemain1(pemain))
//=========================================================== REST PARAMATER
function methodPemain2({...value}) {
    return value.nama
}
console.log(methodPemain2(pemain))

//==========================================================================
// DESTRUCTURING (berguna untuk object yg KOMPLEX)
//==========================================================================
let player = {
    nama : 'ronaldo',
    club : 'realmadrid',
    no : 7,
    former : {
        club1 : 'Sporting Lisbon',
        club2 : 'Manchester united',
        club3 : 'Juventus'
    }
}
function mmmethodPemain1({nama, former, no}) {
    return [nama, former.club1, no]
}
console.log(mmmethodPemain1(player))
//=========================================================== DESTRUCTURING nested (BERSARANG)
function mmmethodPemain2({nama, former:{club1}, no}) {
    return [nama, club1, no]
}
console.log(mmmethodPemain2(player))
//=========================================================== REST PARAMATER
function mmmethodPemain3({...value}) {
    return [value.nama, value.former.club1, value.no]
}
console.log(mmmethodPemain3(player))
//=========================================================== REST PARAMATER - DESTRUCTURING nested (BERSARANG)
function mmmethodPemain4({nama, former:{...value}, no}) {
    return [nama, value.club1, no]
}
console.log(mmmethodPemain4(player))