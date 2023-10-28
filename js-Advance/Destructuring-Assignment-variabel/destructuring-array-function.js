// return value pada function

function pemain() {
    return ['ronaldo', 'messi', 'kaka']
}
//============================================ cara biasa
let a = pemain()
console.log(a[1])

//============================================ cara destructuring
let [cr7, m10, k8] = pemain()
console.log(m10)

//============================================ rest paramter
let [...short] = pemain()
console.log(short[1])
