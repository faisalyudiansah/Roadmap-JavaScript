// Tagged template literal = memungkinkan kita untuk membaca template literal melalui sebuah function

// menaruh nama function didepan `...` lalu template literal itu akan masuk seolah-olah parameter dari function itu

let nama = 'ronaldo'
let club = 'real madrid'

// cara biasa looping .map atau .forEach
// let iniFunction = function(parameter, ...isiExpression) {   // ...isiExpression adalah kumpulan expression dari `..`
//     let result = ''
//     parameter.forEach((tiaptiapElemenParamter, i) => {   // i untuk looping expression
//         // result += `${tiaptiapElemenParamter}${isiExpression[i] ? isiExpression[i] : ''}`
//         result += `${tiaptiapElemenParamter}${isiExpression[i] || ''}` // sama saja
//     })
//     return result
// }

// cara menggunakan .reduce karena reduce dapat menggabungkan ARRAY (parameter dan ...isiExpres adalah array)
let iniFunction = function(parameter, ...isiExpression) {  
    return parameter.reduce((result, tiaptiapElemenParamter, i) =>
        `${result}${tiaptiapElemenParamter}${isiExpression[i] || ''}`, '')  // biasanya kan 0 nilai awal untuk angka
}

let pemain = iniFunction`Nama saya ${nama} dari club ${club}`
console.log(pemain)