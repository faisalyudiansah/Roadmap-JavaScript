let pemain = ['ronaldo', 'messi', 'neymar' ,'kaka']

//================================================ for()
// for(let i=0; i<pemain.length; i++) {
//     console.log(pemain[i])
// }
//================================================ forEach()
// pemain.forEach(i => console.log(i))

// let print = i => console.log(i)
// pemain.forEach(print)
//================================================ map()
// pemain.map(i => console.log(i))

// let print2 = i => console.log(i)
// pemain.map(print2)

//================================================ FOR (OF) pada ARRAY
for (let i of pemain) {
    console.log(i)
}
//================================================ FOR (OF) pada STRING (foreach/map tidak bisa looping string)
const brand = 'samsung'
for(let i of brand) {
    console.log(i)
}
