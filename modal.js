// Modal ablak és képek kezelése
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImg");
var images = [
  { src: "1.webp" },
  { src: "2.webp" },
  { src: "3.webp" },
  { src: "4.webp" },
  { src: "5.webp" },
  { src: "6.webp" },
  { src: "7.webp" },
  { src: "8.webp" },
  { src: "9.webp" },
  { src: "10.webp" },
  { src: "11.webp" },
  { src: "12.webp" },
  { src: "13.webp" },
  { src: "14.webp" },
  { src: "15.webp" },
  { src: "16.webp" },
  { src: "17.webp" },
  { src: "18.webp" },
  { src: "19.webp" },
  { src: "20.webp" },
  { src: "21.webp" },
  { src: "22.webp" },
  { src: "23.webp" },
  { src: "24.webp" },
  { src: "25.webp" },
  { src: "26.webp" },
  { src: "27.webp" },
  { src: "28.webp" },
  { src: "29.webp" },
  { src: "30.webp" },
  { src: "31.webp" },
  { src: "32.webp" },
  { src: "33.webp" },
  { src: "34.webp" },
  { src: "35.webp" },
  { src: "36.webp" },
]; // Itt adhatod meg a képek forrásait
var currentImageIndex = 0;

// Modal megnyitása
document.getElementById("galleryButton").addEventListener("click", function () {
  modal.style.display = "block";
  modalImg.src = images[currentImageIndex].src;
});

// Modal bezárása
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    modal.style.display = "none";
  });

// Következő kép megjelenítése
document
  .getElementsByClassName("next")[0]
  .addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex].src;
  });

// Előző kép megjelenítése
document
  .getElementsByClassName("prev")[0]
  .addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex].src;
  });

// Ha a modalon kívül kattintunk, akkor bezáródjon a modal
window.onclick = (function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});