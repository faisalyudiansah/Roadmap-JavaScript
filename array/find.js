// hanya menemukan satu nilai saja. NILAI YANG PERTAMA DIA TEMUKAN

var nomor = [5,1,0,2029,3,9,19,8,10]

//// JANGAN PAKAI .JOIN() .JOIN untuk menggabungkan isi array
//// karena find() tidak menghasilkan array, tapi menghasilkan satu nilai

var cetak = nomor.find(function(x) {
    return x == 3
})
console.log(cetak)

var cetak2 = nomor.find(function(x) {
    return x > 3
})
console.log(cetak2)

var cetak3 = nomor.find(function(x) {
    return x < 3
})
console.log(cetak3)

var arr = ['faisal', 'yudiansah', 'ronaldo', 'messi', 'neymar']
var cetak4 = arr.find(function(x) {
    return x == 'neymar'
})
console.log(cetak4)

var arr = ['faisal', 'yudiansah', 'ronaldo', 'messi', 'neymar']
var cetak5 = arr.find(function(x) {
    return x !== 'ronaldo'   //// yang muncul duluan si faisal karena faisal nilai pertama yang ditemukan
})
console.log(cetak5)
