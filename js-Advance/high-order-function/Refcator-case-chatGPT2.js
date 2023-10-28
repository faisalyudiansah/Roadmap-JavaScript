// Ambil semua element club
let clubs = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya La Liga dan konversi duration ke detik
let totalDurationInSeconds = clubs.filter(club => club.innerHTML.includes('La Liga'))
  .map(club => {
    let [minutes, seconds] = club.dataset.duration.split(":").map(time => parseInt(time));
    return minutes * 60 + seconds;
  })
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Konversi total detik ke jam, menit, detik
let hours = Math.floor(totalDurationInSeconds / 3600);
let minutes = Math.floor(totalDurationInSeconds % 3600 / 60);
let seconds = totalDurationInSeconds % 60;

// Simpan hasil di DOM
document.querySelector('.duration-match').innerHTML = `${hours} jam, ${minutes} menit, ${seconds} detik.`;

// Hitung total club dan simpan hasil di DOM
document.querySelector('.total-club').innerHTML = `${clubs.filter(club => club.innerHTML.includes('La Liga')).length} Club`;