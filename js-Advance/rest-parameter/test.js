function hitung (...myArgs) {
    // let result = 0
    // for(let i=0; i<=myArgs.length; i++) {
    //     result += i
    // }
    // return result

    // let result = 0
    // for(let i of myArgs) {
    //     result += i
    // }
    // return result

    let result =  myArgs.reduce((result, i) => result + i)
    return result
}
console.log(hitung(1,2,3,4,5))

function cthFilter(...myArgs) {
    return myArgs.filter(i => parseFloat(i))
}
console.log(cthFilter('string', 2, true, 5, 'ronaldo', 1, false, 3, 'messi', 4))

let brand = {
    nama : 'Apple',
    product : 'PC',
    status : 'Sold'
}
for(let i in brand) {
    console.log(`${i} : ${brand[i]}`)
}