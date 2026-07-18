// ====================== KLIK NA SLIKU ======================
const images = document.querySelectorAll(".card img");

images.forEach(img => {
  img.addEventListener("click", () => {
    img.parentElement.querySelector(".btn").click();
  });
});

// ====================== SCROLL REVEAL ======================
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top; // Pozicija elementa od vrha viewporta
    const visible = 120; // Offset da se element aktivira malo pre nego što se potpuno vidi

    if (elementTop < windowHeight - visible) {
      // Dodavanje delay-a po indexu radi stagger animacije
      setTimeout(() => {
        element.classList.add("active");
      }, index * 250);
    }
  });
}

// Aktiviranje funkcije 
window.addEventListener("scroll", reveal);
reveal();

// ====================== 3D PARALLAX HOVER ======================
// Efekat naginjanja slike unutar kartice prilikom pomeranja miša
const cards = document.querySelectorAll(".gallery-card");

cards.forEach(card => {
  const img = card.querySelector(".gallery-card img");

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / 25; // Normalizacija pomeranja
    const dy = (y - cy) / 25;

    // Transformacija slike za 3D nagib i scale
    img.style.transform = `scale(1.15) rotateX(${-dy}deg) rotateY(${dx}deg)`;
  });

  // Reset 
  card.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1) rotateX(0) rotateY(0)";
  });
});