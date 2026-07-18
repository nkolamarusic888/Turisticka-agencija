// ====================== PARSIRANJE PARAMETARA IZ URL-a ======================
const params = new URLSearchParams(window.location.search);
const country = params.get('drzava') || 'spanija';

// ====================== PODACI ZA DESTINACIJE ======================
const data = {
  spanija:{
    title:"Španija",
    description:"Sunce, fiesta i luksuzni resorti sa najboljim plažama Mediterana.",
    images:[
      {src:"../img/Barcelona.jpg", caption:"Barselona"},
      {src:"../img/Ibiza.jpeg", caption:"Ibiza"},
      {src:"../img/Malaga.jpg", caption:"Malaga"}
    ],
    info:[
      {title:"Kultura", text:"Flamenco, fiesta i bogata istorija."},
      {title:"Hrana", text:"Paella, tapas i sangria."},
      {title:"Aktivnosti", text:"Plaže, noćni život i izleti."}
    ]
  },
  grcka:{
    title:"Grčka",
    description:"Romantična ostrva i tirkizno more.",
    images:[
      {src:"../img/Santorini2.jpg", caption:"Santorini"},
      {src:"../img/Zakintos.jpg", caption:"Zakynthos"},
      {src:"../img/Mikonos.jpg", caption:"Mikonos"}
    ],
    info:[
      {title:"Kultura", text:"Mitologija i istorija."},
      {title:"Hrana", text:"Gyros i musaka."},
      {title:"Aktivnosti", text:"Plaže i izleti."}
    ]
  },
  turska:{
    title:"Turska",
    description:"Luksuzni resorti, tirkizno more i vrhunska usluga.",
    images:[
      {src:"../img/Antalya.jpg", caption:"Antalija"},
      {src:"../img/Bodrum.jpg", caption:"Bodrum"},
      {src:"../img/Kusadasi.jpg", caption:"Kušadasi"}
    ],
    info:[
      {title:"Kultura", text:"Spoj Evrope i Azije."},
      {title:"Hrana", text:"Kebab, baklava i turska kafa."},
      {title:"Aktivnosti", text:"Resorti, bazeni i vodeni sportovi."}
    ]
  },
  dubai:{
    title:"Dubai",
    description:"Luksuzni hoteli, moderne plaže i futuristička arhitektura.",
    images:[
      {src:"../img/Palm Jurmeiah.jpg", caption:"Palm Jumeirah"},
      {src:"../img/Marina Dubai bolje.jpg", caption:"Dubai Marina"},
      {src:"../img/Burj.jpg", caption:"Burj Al Arab"}
    ],
    info:[
      {title:"Luksuz", text:"Najpoznatiji luksuzni hoteli na svetu."},
      {title:"Atrakcije", text:"Burj Khalifa i Palm Jumeirah."},
      {title:"Aktivnosti", text:"Safari u pustinji i šoping."}
    ]
  },
  egipat:{
    title:"Egipat",
    description:"Egipat je jedna od najpopularnijih letnjih destinacija sa toplim Crvenim morem, luksuznim hotelima i bogatom istorijom.",
    images:[
      {src:"../img/Hurghada.jpg", caption:"Hurgada"},
      {src:"../img/Sharm.jpg", caption:"Šarm el Šeik"},
      {src:"../img/Marsa.jpg", caption:"Marsa Alam"}
    ],
    info:[
      {title:"Kultura", text:"Egipat je poznat po piramidama, faraonima i drevnoj civilizaciji."},
      {title:"Hrana", text:"Popularna jela su falafel, kebab i tradicionalni egipatski specijaliteti."},
      {title:"Aktivnosti", text:"Ronjenje u Crvenom moru, safari u pustinji i izleti do piramida u Gizi."}
    ]
  },
  italija:{
    title:"Italija",
    description:"Prelepa obala, istorijski gradovi i vrhunska kuhinja.",
    images:[
      {src:"../img/Amalfi.jpg", caption:"Amalfi"},
      {src:"../img/Sicilija.jpg", caption:"Sicilija"},
      {src:"../img/Sardinija.jpg", caption:"Sardinija"}
    ],
    info:[
      {title:"Kultura", text:"Bogata istorija i umetnost."},
      {title:"Hrana", text:"Pizza, pasta i gelato."},
      {title:"Aktivnosti", text:"Plaže i istorijski gradovi."}
    ]
  },
  crnagora:{
    title:"Crna Gora",
    description:"Prelepa jadranska obala i istorijski gradovi.",
    images:[
      {src:"../img/Budva.jpg", caption:"Budva"},
      {src:"../img/Kotor.jpg", caption:"Kotor"},
      {src:"../img/Herceg Novi.jpg", caption:"Herceg Novi"}
    ],
    info:[
      {title:"Priroda", text:"Planine i kristalno more."},
      {title:"Hrana", text:"Riblji specijaliteti i mediteranska kuhinja."},
      {title:"Aktivnosti", text:"Plaže i izleti."}
    ]
  },
  hrvatska:{
    title:"Hrvatska",
    description:"Jedna od najlepših obala Jadrana sa brojnim ostrvima.",
    images:[
      {src:"../img/Dubrovnik.jpg", caption:"Dubrovnik"},
      {src:"../img/Split.jpg", caption:"Split"},
      {src:"../img/Hrvar.jpg", caption:"Hvar"}
    ],
    info:[
      {title:"Kultura", text:"Stari gradovi i istorija."},
      {title:"Hrana", text:"Morski plodovi i mediteranska kuhinja."},
      {title:"Aktivnosti", text:"Plaže i izleti na ostrva."}
    ]
  }
};

// ====================== DOBAVLJANJE HTML ELEMENTA ======================
const destTitle = document.getElementById("dest-title");
const destDesc = document.getElementById("dest-description");
const destInfo = document.getElementById("dest-info");
const destGallery = document.getElementById("dest-gallery");

// Modal elementi
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");

// ⚡ Samo dugmad unutar modala
const closeBtn = modal.querySelector(".modal-close");
const prevBtn = modal.querySelector(".prev");
const nextBtn = modal.querySelector(".next");

// Trenutni indeks slike u galeriji
let currentIndex = 0;

// ====================== POSTAVLJANJE NASLOVA I OPISA ======================
destTitle.textContent = data[country].title;
destDesc.textContent = data[country].description;

// ====================== GENERISANJE INFO KARTICA ======================
data[country].info.forEach((item, i) => {
  const card = document.createElement("div");
  card.className = "info-card";
  card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
  destInfo.appendChild(card);

  // Animacija kartica
  setTimeout(() => {
    card.style.opacity = 1;
    card.style.transform = "translateY(0) scale(1)";
  }, i * 800);
});

// ====================== GENERISANJE GALERIJE ======================
data[country].images.forEach((img, i) => {
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.innerHTML = `<img src="${img.src}"><div class="overlay">${img.caption}</div>`;
  destGallery.appendChild(div);

  // Animacija prikaza
  setTimeout(() => {
    div.style.opacity = 1;
    div.style.transform = "scale(1)";
  }, i * 800);

  // Otvaranje modala na klik
  div.onclick = () => openModal(i);
});

// ====================== MODAL FUNKCIJE ======================
function openModal(i) {
  currentIndex = i;
  modal.style.display = "block";
  updateModal();
}

function updateModal() {
  modalImg.src = data[country].images[currentIndex].src;
  modalCaption.textContent = data[country].images[currentIndex].caption;
}

function closeModal() {
  modal.style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + data[country].images.length) % data[country].images.length;
  updateModal();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % data[country].images.length;
  updateModal();
}
// ====================== EVENT LISTENERI ======================
closeBtn.onclick = closeModal;
prevBtn.onclick = prevImage;
nextBtn.onclick = nextImage;

// Zatvaranje modala klikom van slike
window.onclick = e => {
  if (e.target == modal) closeModal();
};