//// untuk mencari banyak nilai

var nomor = [5,1,0,2029,3,9,19,8,10]

var cetak = nomor.filter(function(x) {
    return x == 3
})
console.log(cetak.join(' - '))

var cetak2 = nomor.filter(function(x) {
    return x > 3
})
console.log(cetak2.join(' - '))

var cetak3 = nomor.filter(function(x) {
    return x < 3
})
console.log(cetak3.join(' - '))

///////////////////////// boolean true false /////////////////////////////////

nomor.filter(function (e) {
    console.log(e == 3)
}) //// cuma menghasilkan boolean true false

nomor.filter(function (e) {
    console.log(e > 3)
}) //// cuma menghasilkan boolean true false

var arr = ['faisal', 'yudiansah', 'ronaldo', 'messi', 'neymar', 'yudiansah']
var cetak4 = arr.filter(function(x) {
    return x == 'yudiansah'
})
console.log(cetak4)

var arr = ['faisal', 'yudiansah', 'ronaldo', 'messi', 'neymar', 'yudiansah']
var cetak5 = arr.filter(function(x) {
    return x !== 'yudiansah'
})
console.log(cetak5)