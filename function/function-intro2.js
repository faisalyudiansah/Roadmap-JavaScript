// var kubus1 = 8
// var kubus2 = 3
// function totalKubus (kubus1,kubus2) {
//     var vk1 = kubus1 * kubus1 * kubus1
//     console.log('Total volume kubus 1 : ' + vk1)
//     var vk2 = kubus2 * kubus2 * kubus2
//     console.log('Total volume kubus 2 : ' + vk2)
//     var totalVolume = vk1 + vk2
//     return totalVolume
// }
// console.log('Total volume kedua kubus : ' + totalKubus(kubus1, kubus2))

// var kubus1 = ''
// var kubus2 = ''
// function totalKubus (kubus1,kubus2) {
//     var vk1 = kubus1 * kubus1 * kubus1
//     console.log('Total volume kubus 1 : ' + vk1)
//     var vk2 = kubus2 * kubus2 * kubus2
//     console.log('Total volume kubus 2 : ' + vk2)
//     var totalVolume = vk1 + vk2
//     return totalVolume
// }
// console.log('Total volume kedua kubus : ' + totalKubus(8, 3))
// console.log('Total volume kedua kubus : ' + totalKubus(2, 4))

var kubus1 = prompt('sisi kubus 1 : ')
var kubus2 = prompt('sisi kubus 2 : ')
function totalKubus (kubus1,kubus2) {
    var vk1, vk2, totalVolume
    vk1 = kubus1 * kubus1 * kubus1
    console.log('Total volume kubus 1 : ' + vk1)
    vk2 = kubus2 * kubus2 * kubus2
    console.log('Total volume kubus 2 : ' + vk2)
    totalVolume = vk1 + vk2
    return totalVolume
}
var hasilTotalKubus = totalKubus(kubus1,kubus2)

console.log('Total volume kedua kubus : ' + hasilTotalKubus)
alert('Total volume kedua kubus : ' + hasilTotalKubus)