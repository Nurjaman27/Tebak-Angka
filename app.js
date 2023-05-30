const Angka = Math.floor(Math.random() * 10) + 1;
const notif = document.getElementById('result')

console.log(Angka)
function tebakAngka() {
    const input = document.getElementById('inputAngka').value
    if (input < 1) {
      notif.textContent = ("Masukan Angka Terlebuh Dahulu")
    }else {
      if (input == Angka) {
        notif.textContent = ("Tebakan Anda Benar")
      }else if (input > Angka) {
        notif.textContent = ("Tebakan Anda Terlalu Tinggi")
      }else {
        notif.textContent = ("Tebakan Anda Terlalu Rendah")
      }
    }
  }

