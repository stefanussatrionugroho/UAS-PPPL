// script.js
function validateForm() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua field harus diisi!");
    return false;
  }

  alert("Pendaftaran berhasil dikirim! Kami akan menghubungi Anda.");
  return true;
}