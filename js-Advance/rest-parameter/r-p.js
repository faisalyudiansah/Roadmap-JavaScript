let pemain = {
    nama : 'ronaldo',
    club : 'realmdmd'
}
let {...iniRestParameterObject} = pemain    // menghasilkan OBJECT
console.log(iniRestParameterObject)
console.log(iniRestParameterObject.nama)

let player = ['kaka', 'marcelo', 'ibrahimovic', 'modric', 'casillas']
let [...iniRestParameterArray] = player     // menghasilkan ARRAY
console.log(iniRestParameterArray)
console.log(iniRestParameterArray[0])

//========================================= // REST PARAMETER sebagai paramater pada function menjadi ARRAY
// function myfunction(...myArgs) {
//     console.log(myArgs)                 // cek rest pasameter JADI ARRAY
//     console.log(arguments)              // cek arguments BUKAN ARRAY
//     console.log(Array.from(arguments))  // Mengubah arguments menjadi ARRAY
//     console.log([...arguments])         // Mengubah arguments menjadi ARRAY dengan SPREAD OPERATOR
// }
// console.log(myfunction(1,2,3,4,5))

//========================================== // kasus hitung
function hitung(...myArgs) {
    // return myArgs[0] + myArgs[1] + myArgs[2] + myArgs[3] + myArgs[4]    // cara biasa

    // let result = 0
    // for(let i of myArgs){                // cara pengulangan for(of)
    //     result += i
    // }
    // return result
    
    // let result = 0
    // for(let i=0; i<=myArgs.length; i++){    // cara pengulangan for biasa
    //     result += i
    // }
    // return result

    // let result = myArgs.reduce((result, i) => result + i)    // cara high order function reduce
    // return result

    return myArgs.reduce((result, i) => result + i)             // cara CEPAT reduce
}
console.log(hitung(1,2,3,4,5))