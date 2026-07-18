FAST TRAVEL - Turistička Agencija Web Sajt
==========================================

Opis:
------
Ovo je turistički web sajt "Fast Travel" koji omogućava pregled destinacija, galerije slika, informacije o destinacijama, kao i modal pregled slika sa navigacijom. 
Sajt je prilagođen za desktop, tablet i mobilne uređaje (responsive).

Struktura fajlova:
-------------------
/index.html             - Početna stranica sajta
/html/gallery.html      - Stranica sa galerijom destinacija
/html/destinacija.html  - Stranica za detalje pojedinačne destinacije
/html/contacts.html     - Stranica za rezervaciju letovanja

/css/style.css          - Glavni CSS za stilizaciju sajta
/css/gallery.css    	- Poseban CSS za stranicu gallery
/css/forma.css    	- Poseban CSS za formu(contacts.html)
/css/destinacija.css    - Poseban CSS za stranicu destinacija

/js/script.js      	- GLAVNI JavaScript za slider,efekte i kartice 
/js/destinacija.js      - JavaScript za dinamičko prikazivanje destinacija i modala
/js/forma.js      	- JavaScript za validaciju forme
/js/gallery.js      	- JavaScript za animacije i efekte kartica galerije
/img/                   - Folder sa slikama destinacija i slidera


Biblioteke i resursi:
---------------------
1. Google Fonts:
   - Oswald: https://fonts.googleapis.com/css2?family=Oswald&display=swap
   - Lato: https://fonts.googleapis.com/css2?family=Lato&display=swap

2. Nema korišćenih JavaScript biblioteka – sve funkcionalnosti (modal, slider, animacije) su napisane u čistom JavaScript-u (vanilla JS).

Instrukcije:
------------
1. Otvori `index.html` u web pregledaču da pokreneš sajt.
2. Klikom na destinaciju u galeriji se otvara detaljna stranica sa modal galerijom.
3. Modal ima dugmad za prethodnu/sledeću sliku i dugme za zatvaranje.
4. Klikom van slike modal se zatvara.
5. Sajt je responsivan i prilagođen različitim uređajima.
