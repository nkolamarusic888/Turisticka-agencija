// ======================
// FORMA I DATUM
// ======================
const forma = document.getElementById("forma");
const datumInput = document.getElementById("datum");

// Postavljanje minimalnog datuma (danasnji dan)
const danas = new Date().toISOString().split("T")[0];
datumInput.min = danas;

// ======================
// FUNKCIJA ZA PRIKAZ GREŠKE
// ======================
function prikaziGresku(id, tekst, input) {
  const e = document.getElementById(id);
  e.textContent = tekst;
  e.style.display = "block";
}

// ======================
// FUNKCIJA ZA ZATVARANJE POPUP-A
// ======================
function zatvoriPopup() {
  document.getElementById("popup").style.display = "none";
}

// ======================
// VALIDACIJA FORME
// ======================
forma.addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  // Resetovanje grešaka i klasa
  document.querySelectorAll(".error").forEach(e => e.style.display = "none");
  document.querySelectorAll(".input-group").forEach(e => e.classList.remove("valid"));

  // --- Ime i prezime ---
  const ime = document.getElementById("ime");
  const imeRegex = /^[A-ZČĆŽŠĐ][a-zčćžšđ]+ [A-ZČĆŽŠĐ][a-zčćžšđ]+$/;
  if (!ime.value.trim() || !imeRegex.test(ime.value.trim())) {
    prikaziGresku("imeError", "Unesite ime u formatu: Mika Perić", ime);
    valid = false;
  } else {
    ime.parentElement.classList.add("valid");
  }

  // --- Email ---
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    prikaziGresku("emailError", "Unesite validan email", email);
    valid = false;
  } else {
    email.parentElement.classList.add("valid");
  }

  // --- Destinacija ---
  const dest = document.getElementById("destinacija");
  if (dest.value === "") {
    prikaziGresku("destError", "Izaberite destinaciju", dest);
    valid = false;
  } else {
    dest.parentElement.classList.add("valid");
  }

  // --- Datum ---
  const datum = document.getElementById("datum");
  if (!datum.value) {
    prikaziGresku("datumError", "Izaberite datum", datum);
    valid = false;
  } else if (datum.value < danas) {
    prikaziGresku("datumError", "Datum ne može biti pre danas", datum);
    valid = false;
  } else {
    datum.parentElement.classList.add("valid");
  }

  // --- Tip smeštaja ---
  const smestaj = document.querySelector('input[name="smestaj"]:checked');
  if (!smestaj) {
    const e = document.getElementById("smestajError");
    e.textContent = "Izaberite smeštaj";
    e.style.display = "block";
    valid = false;
  }

  // --- Broj osoba ---
  const osobe = document.getElementById("osobe");
  if (!osobe.value || osobe.value < 1) {
    prikaziGresku("osobeError", "Minimum 1 osoba", osobe);
    valid = false;
  } else {
    osobe.parentElement.classList.add("valid");
  }

  // --- Ako je sve validno ---
  if (valid) {
    document.getElementById("popup").style.display = "flex";
    forma.reset();
  }
});