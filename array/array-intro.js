var toArray = function (nama) {
    alert('halo ' + nama)
}
// toArray('faisal')

var myarray = ['teks', 3, false, toArray, [4,5,6, 'ibra', 'bale'], 'benzema']
console.log(myarray[4][3]) // untuk memanggil 5 pada array multidimensional
console.log(myarray[5]) // untuk memanggil 5 pada array multidimensional

let pemain = ['ronaldo', 'messi', 'neymar']
// pemain.push('robinho', 'kaka') // untuk nambahin ke array ke index terakhir
// pemain.pop() //// untuk menghilangkan index terakhir
// pemain.unshift('rooney') //// untuk menambahkan index pertama
// pemain.shift() //// untuk menghilangkan index pertama
// console.log(pemain)
for(i=0; i<pemain.length; i++){
    console.log(pemain[i])
}