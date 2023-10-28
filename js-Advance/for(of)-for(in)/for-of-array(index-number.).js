let pemain = ['ronaldo', 'messi', 'neymar' ,'kaka']

//================================================= ANGKA INDEX dengan forEach
pemain.forEach((value, index) => console.log(`No.${index+1} ${value}`))

//================================================= ANGKA INDEX dengan for(of)
for(let [index , value] of pemain.entries()) {
    console.log(`No.${index+1} ${value}`)
}