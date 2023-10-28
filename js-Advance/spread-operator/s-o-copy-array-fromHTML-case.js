let title = document.querySelector('.title')
console.log(title)
console.log(title.innerHTML)
console.log(...title.innerHTML)

let huruf = [...title.innerHTML].map(i => `<span class="per-title">${i}</span>`).join('')
console.log(huruf)
title.innerHTML = huruf

// let judul = [...title].map(i => i.innerHTML)
// console.log(judul)

// KALO PAKAI querySelectorAll()
// let pertitle = Array.from(...judul).map(i => `<span class="per-title">${[i]}</span>`).join('')
// console.log(pertitle)
// title.innerHTML = pertitle

// //==========================================================
// let pisahJudul = []
// for(let i=0; i<[...judul].length; i++) {
//     pisahJudul.push(...judul[i])
// }
// console.log(pisahJudul)

// //==========================================================
// let pisahJudul2 = Array.from(...judul).map(i => i);
// console.log(pisahJudul2);

// //==========================================================
// let pisahJudul3 = judul[0].split("")
// console.log(pisahJudul3)

// //==========================================================
// let pisahJudul4 = judul.join().split("");
// console.log(pisahJudul4);
