// let title = document.querySelector('.nama')
// console.log(title.innerHTML)
let title2 = document.querySelectorAll('.nama')
console.log(title2[0].innerHTML)

let result = []
for (let i = 0; i<title2.length; i++) {
    result.push(title2[i].innerHTML)
}
console.log(result)

let result2 = [...title2].map(i => i.innerHTML)         // map wajib di ubah ke array dulu
console.log(result2)

let result3 = []
Array.from(title2).map(i => result3.push(i.innerHTML))  // map wajib di ubah ke array dulu (kalo push array.from)
console.log(result3)

let result4 = []
title2.forEach(i => result4.push(i.innerHTML))
console.log(result4)

let result5 = []
for(let i of title2) {
    result5.push(i.innerHTML)
}
console.log(result5)

let result6 = title2.forEach(i => console.log(i.innerHTML))

let result7 = ''
title2.forEach(i => result7 += i.innerHTML)
console.log(result7)

// let result = [...title.innerHTML].map(i => `<span class="per-title">${[i]}</span>`).join('')
// console.log(result)
// title.innerHTML = result

