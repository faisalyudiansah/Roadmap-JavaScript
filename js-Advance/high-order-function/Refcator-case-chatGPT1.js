// ambil semua element club
let clubs = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya la liga
let laLigaClubs = clubs.filter(club => club.innerHTML.includes('La Liga'));

// konversi duration string ke detik
const convertToSeconds = function(duration) {
  let [minutes, seconds] = duration.split(":").map(time => parseInt(time));
  return minutes * 60 + seconds;
};

// ambil duration dari masing-masing club dan konversi ke detik
let laLigaDurationsInSeconds = laLigaClubs.map(club => convertToSeconds(club.dataset.duration));

// jumlahkan semua durasi dalam detik
let totalDurationInSeconds = laLigaDurationsInSeconds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// konversi total detik ke jam, menit, detik
let hours = Math.floor(totalDurationInSeconds / 3600);
let minutes = Math.floor(totalDurationInSeconds % 3600 / 60);
let seconds = totalDurationInSeconds % 60;

// simpan hasil di DOM
let pDuration = document.querySelector('.duration-match');
pDuration.innerHTML = `${hours} jam, ${minutes} menit, ${seconds} detik.`;

// hitung total club
let totalClubs = laLigaClubs.length;

// simpan hasil di DOM
let pTotalClub = document.querySelector('.total-club');
pTotalClub.innerHTML = `${totalClubs} Club`;
