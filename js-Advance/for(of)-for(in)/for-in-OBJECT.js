// object bisa di looping isi (properties) oleh for(in)
// kalo pakai for(of) tidak bisa karena object ga iterable
// object itu enumerable

let pemain = {
    nama : 'ronaldo',
    club : 'real madrid',
    no : 7
}
//========================= output ini keluar hanya key properties : nama, club, no . (VALUE TIDAK IKUT)
for(let i in pemain) {  
    console.log(i)
}

//========================= output : VALUE properties object tersebut
for(let i in pemain) { 
    console.log(pemain[i])
}
