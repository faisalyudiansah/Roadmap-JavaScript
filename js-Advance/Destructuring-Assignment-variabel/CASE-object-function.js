// contoh kasus destructuring OBJECT function return value

function hitung(a,b) {
    return {
        tambah : a + b,
        kurang : a - b,
        kali : a * b,
        bagi : a / b
    }
}
console.log(hitung(4,2))
console.log(hitung(4,2).tambah)
console.log(hitung(4,2).kurang)
console.log(hitung(4,2).kali)
console.log(hitung(4,2).bagi)

//================================================== dengan destructuring OBJECT function
function hitung2(a,b) {
    return {
        tambah : a + b,
        kurang : a - b,
        kali : a * b,
        bagi : a / b
    }
}
let {tambah, 
    kurang = 'DATA TIDAK ADA', 
    kali : DIKALI, 
    bagi : DIBAGI = 'DATA TIDAK ADA'} = hitung2(4,2)
console.log(hitung2(4,2))
console.log(tambah)
console.log(kurang)
console.log(DIKALI)
console.log(DIBAGI)

//================================================== dengan destructuring OBJECT function
function hitung3(a,b) {
    return {
        tambah : a + b,
        kurang : a - b,
        kali : a * b,
        bagi : a / b
    }
}
let {...result} = hitung3(4,2)
console.log(result)
console.log(result.tambah)
console.log(result.kurang)
console.log(result.kali)
console.log(result.bagi)