let namea = 'ronaldo'
let club = 'santos'

// function methodFunction(mainArray, ...expression) {
//     let result = ''
//     mainArray.forEach((str, i) => {
//         result += `${str}<span class='highlight'>${expression[i] || ''}</span>`
//     });
//     return result
// }

function methodFunction(string, ...expression) {
    return string.reduce((result, str, i) => `${result}${str}${expression[i] || ''}`, '')
}


let player = methodFunction`woi ${namea} pindah ke ${club}`
// document.body.innerHTML = player
console.log(player)
// <span class='highlight'>