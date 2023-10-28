// contoh kasus untuk kasih highlight ke sebuah kata pada kalimat

let nama = 'neymar'
let club = 'PSG'
let negara = 'brazil'

let highlight = function(parameter, ...isiExpression) {  
    return parameter.reduce((result, tiaptiapElemenParamter, i) =>
        `${result}${tiaptiapElemenParamter}<span class="hl">${isiExpression[i] || ''}</span>`, '')
}

let pemain = highlight`Halo nama saya ${nama} dari club ${club} warga negara ${negara}`
console.log(pemain)
document.body.innerHTML = pemain