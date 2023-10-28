let title = document.querySelector('.title')
console.log(title.innerHTML)
console.log(...title.innerHTML)

let judul = [...title.innerHTML]
console.log(judul)

let result = [...title.innerHTML].map(i => `<span class="per-title">${i}</span>`).join('')
title.innerHTML = result
console.log(result)

//============================================
// let pemain = ['REAL MADRID']
// console.log(...pemain[0])

// // let result0 = [...pemain[0]]
// // console.log(result0)

// // let result1 = [...pemain[0]].map(i => i)    // ada map untuk pasang <span>
// // console.log(result1)

// // let result2 = pemain[0].split('').map(i => i)
// // console.log(result2)

// // let result3 = Array.from(pemain[0], i => i)  // ini juga bisa pasang looping template literal
// // console.log(result3)

// let final = [...pemain[0]].map(i => `<span class="per-title">${i}</span>`).join('')
// console.log(final)
// let asu = `<h1 class="title" style="white-space: pre">${final}</h1>`
// console.log(asu)

// document.body.innerHTML = asu
