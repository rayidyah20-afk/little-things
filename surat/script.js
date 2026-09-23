const pages = document.querySelectorAll(".page");

const openBtn = document.getElementById("openBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let currentPage = 0;

// =========================
// PINDAH HALAMAN
// =========================

function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  currentPage = index;
}

// =========================
// OPEN
// =========================

openBtn.addEventListener("click", () => {
  document.body.classList.add("opened");

  music.volume = 0.35;

  music.play().catch(() => {});

  showPage(1);
});

// =========================
// NEXT
// =========================

const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      showPage(currentPage + 1);
    }
  });
});

// =========================
// MUSIC
// =========================

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    musicBtn.textContent = "♫";
  } else {
    music.pause();

    musicBtn.textContent = "Ⅱ";
  }
});
