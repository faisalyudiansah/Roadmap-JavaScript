//// sort untuk meng-urutkan isi array

//// urutan hanya dari 0-9 saja. element belasan atau puluhan tidak terurut dengan benar
var angka = [5,1,0,3,9,8]
angka.sort()
console.log('sort ' + angka.join('-'))    //// ascending

angka.reverse()
console.log('reverse ' + angka.join('-'))    //// desc

///////////////////////////////////////////////////////////////////////////////////////////

//// urutan sempurna pakai function express
var nomor = [5,1,0,2029,3,9,19,8,10]
var ascending = nomor.sort(function(a,b) {
    return a-b
})
console.log('sort asc ' + ascending.join('-'))


var descending = nomor.sort(function(a,b) {
    return b-a
})
console.log('sort desc ' + descending.join('-'))


//// reverse urutan sempurna pakai function expression 
var ascendingg = nomor.reverse(function(a,b) {
    return a-b
})
console.log('reverse asc ' + ascendingg.join('-'))


var descendingg = nomor.reverse(function(a,b) {
    return b-a
})
console.log('reverse desc ' + descendingg.join('-'))