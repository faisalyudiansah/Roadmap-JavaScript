// for(of) pada arguments di function

function hitung() {
    console.log(arguments)      // cek arguments
    let result = 0              // misalnya mau hitung total jumlah dari arguments
    for(let i of arguments) {
        result += i
    }
    return result
}
console.log(hitung(1,2,3,4,5))

