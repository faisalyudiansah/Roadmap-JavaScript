let pemain = document.querySelectorAll('.nama')
// let pemain = [...document.querySelectorAll('.nama')]             // ubah ke array dengan SPREAD OPERATOR
// let pemain = Array.from(document.querySelectorAll('.nama'))      // ubah ke array
console.log(pemain)
console.log(pemain[0])
console.log(pemain[0].innerHTML)
console.log(...pemain[0].innerHTML)

//========================================= cara biasa tanpa looping
let arrayPemain1 = [pemain[0].innerHTML, pemain[1].innerHTML, pemain[2].innerHTML]
console.log(arrayPemain1)

//========================================== LOOPING BIASA
let arrayPemain2 = []
for (let i = 0; i<pemain.length; i++) {
    arrayPemain2.push(pemain[i].innerHTML)
}
console.log(arrayPemain2)

//========================================== LOOPING dengan forEach
let arrayPemain3 = []
pemain.forEach(i=> arrayPemain3.push(i.innerHTML))
console.log(arrayPemain3)

//========================================== LOOPING dengan map + push
let arrayPemain4 =  []
Array.from(pemain).map(i=> arrayPemain4.push(i.innerHTML))
console.log(arrayPemain4)

//========================================== LOOPING dengan map saja
let arrayPemain5 = Array.from(pemain).map(i=> i.innerHTML)
console.log(arrayPemain5)

//========================================== LOOPING dengan for(of)
let arrayPemain6 = []
for(let i of pemain) {
    arrayPemain6.push(i.innerHTML)
}
console.log(arrayPemain6)

//========================================== LOOPING dengan SPREAD OPERATOR + map
let arrayPemain7 = [...pemain].map(i => i.innerHTML)
console.log(arrayPemain7)

//========================================== LOOPING dengan SPREAD OPERATOR + map + push TIDAK BISA