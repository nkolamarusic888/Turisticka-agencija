// ====================== SLIDER ======================
// Selektovanje svih slajdova i tačkica
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let current = 0;

// Funkcija koja prikazuje određeni slajd i aktivira odgovarajuću tačkicu
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active"); 
    dots[i].classList.remove("active"); 
    if (i === index) {
      slide.classList.add("active"); 
      dots[i].classList.add("active");
    }
  });
}

// Automatska promena slajdova na svakih 7 sekundi
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 7000);

// Klik na tačkice menja slajd odmah
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    showSlide(current);
  });
});


// ====================== FADE IN NA SKROL ======================
const elements = document.querySelectorAll(".zasto-card, .testimonial-card");

// Inicijalno postavljanje svih elemenata u nevidljivo stanje
elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

// Funkcija koja prikazuje elemente kada uđu u viewport
function reveal() {
  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visibleOffset = 100; // Kada je element 100px unutar ekrana

    if (elementTop < windowHeight - visibleOffset) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// Aktiviranje funkcije na scroll i inicijalno
window.addEventListener("scroll", reveal);
reveal();


// ====================== TESTIMONIALS TEKST ======================
const testimonials = [
  { text: "Putovanje u Grčku je bilo savršeno. Organizacija odlična!", author: "— Marko Petrović" },
  { text: "Fantastično iskustvo! Hotel i plaža su bili savršeni.", author: "— Ana Nikolić" },
  { text: "Sigurno ponovo putujem sa vama sledeće godine.", author: "— Nikola Jovanović" },
  { text: "Nezaboravan odmor, sve preporuke!", author: "— Milica Stojanović" },
  { text: "Predivna destinacija, ljubazno osoblje i odlična usluga.", author: "— Ivan Pavlović" },
  { text: "Zaista uživanje, hvala agenciji na svemu!", author: "— Katarina Lazić" }
];

let currentTestimonial = 0;

// Funkcija koja prikazuje sledeći testimonial sa fade animacijom
function showTestimonial() {
  const textEl = document.getElementById("testimonial-text");
  const authorEl = document.getElementById("testimonial-author");

  textEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    // Promena teksta
    textEl.textContent = testimonials[currentTestimonial].text;
    authorEl.textContent = testimonials[currentTestimonial].author;

    // Fade in novog teksta
    textEl.style.opacity = 1;
    authorEl.style.opacity = 1;

    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }, 500); 
}

// Automatsko menjanje komentara svakih 4 sekunde
setInterval(showTestimonial, 4000);