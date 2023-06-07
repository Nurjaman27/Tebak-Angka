const Angka = Math.floor(Math.random() * 10) + 1;
const notif = document.getElementById('result')
let openPopupButton = document.getElementById('openPopup');
let closePopupButton = document.getElementById('closePopup');
let popupContainer = document.getElementById('popupContainer');

console.log(Angka)
function tebakAngka() {
    const input = document.getElementById('inputAngka').value
    if (input < 1) {
      notif.textContent = ("Masukan Angka Terlebuh Dahulu")
    }else {
      if (input == Angka) {
        popupContainer.style.display = 'block';

        closePopupButton.addEventListener('click', function() {
          popupContainer.style.display = 'none';
          location.reload()
        });
      }else if (input > Angka) {
        notif.textContent = ("Tebakan Anda Terlalu Tinggi")
      }else {
        notif.textContent = ("Tebakan Anda Terlalu Rendah")
      }
    }
  }
