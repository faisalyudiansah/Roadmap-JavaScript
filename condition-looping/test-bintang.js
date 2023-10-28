var bintang = ''
for (i=1; i<=10; i++) {
    for (a=0; a<i; a++) {
        bintang += '*'
    }
    bintang += '\n'
}
for (i=10; i>=0; i--) {
    for (a=0; a<i; a++) {
        bintang += '*'
    }
    bintang += '\n'
}
console.log(bintang)