// contoh kasus destructuring ARRAY function

function hitung(a,b) {
    return [a + b, a - b, a * b, a / b]
}
console.log(hitung(4,2))
console.log(hitung(2,3)[0])
console.log(hitung(2,3)[1])

//================================================== dengan destructuring array function
function hitung2(a,b) {
    return [a + b, , a * b, a / b]
}
let [tambah, kurang='DATA TIDAK ADA',kali, bagi = 'DATA TIDAK ADA'] = hitung2(4,2)
console.log(hitung2(4,2))
console.log(tambah)
console.log(kurang)
console.log(kali)
console.log(bagi)

//================================================== REST PARAMTER
function hitung3(a,b) {
    return [a + b, a - b, a * b, a / b]
}
let [...result] = hitung3(4,2)
console.log(result)
console.log(result[0])
console.log(result[1])
console.log(result[2])
console.log(result[3])