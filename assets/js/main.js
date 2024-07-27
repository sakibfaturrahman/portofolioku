particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

/* ============= animasi nomor ================ */
function animate(obj, initVal, lastVal, duration) {
  let startTime = null;

  //get waktu hari ini - paste ke variabel
  let currentTime = Date.now();

  //terapkan ke function
  const step = (currentTime) => {
    //jika waktu mulai adalah nol, tetapkan waktu saat ini ke startTime
    if (!startTime) {
      startTime = currentTime;
    }

    //menghitung nilai yang akan digunakan dalam menghitung angka yang akan ditampilkan
    const progress = Math.min((currentTime - startTime) / duration, 1);

    //hitung apa yang akan ditampilkan menggunakan nilai yang didapat di atas
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    //memeriksa untuk memastikan penghitung tidak melebihi nilai terakhir (lastVal)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  //mulai animasi
  window.requestAnimationFrame(step);
}
let text1 = document.getElementById("year");
let text2 = document.getElementById("project");
const load = () => {
  animate(text1, 0, 20, 7000);
  animate(text2, 0, 100, 7000);
};

addEventListener("scroll", load());

/* ======== MIXITUP FILTER PORTFOLIO ========== */
let mixerPortfolio = mixitup(".portfolio-container", {
  selectors: {
    target: ".portfolio-item",
  },
  animation: {
    duration: 300,
  },
});

/* ============= filter Active =============== */
let tabfilter = document.querySelectorAll(".filter-portfolio button");

function activefilter() {
  tabfilter.forEach((l) => l.classList.remove("active-portfolio"));
  this.classList.add("active-portfolio");
}

tabfilter.forEach((l) => l.addEventListener("click", activefilter));

// Animasi progres
let span = $(".progress-bar span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    2000
  );
});

$(".resume").scroll(span);

/* ============ modal pop up ============= */
const portfolioItems = document.querySelectorAll(".portfolio-item");
const modal = document.getElementById("myModal");
const mediaContainer = document.querySelector(".carousel-images");
const modalDescription = document.getElementById("modalDescription");
let currentSlide = 0;
let totalSlides = 0;
let images = [];

portfolioItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").src;
    const description = this.querySelector(".description").dataset.description;
    // Mengambil semua gambar dalam modal
    images = [imgSrc];
    openModal(images, description);
  });
});

function openModal(imageArray, description) {
  mediaContainer.innerHTML = "";

  // Mengisi slider dengan gambar
  imageArray.forEach((src) => {
    const img = document.createElement("img");
    img.src = src.trim();
    mediaContainer.appendChild(img);
  });

  totalSlides = imageArray.length;
  currentSlide = 0;
  updateSlidePosition();

  modalDescription.textContent = description;

  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  updateSlidePosition();
}

function updateSlidePosition() {
  mediaContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Close modal when clicking outside of the modal content
document.querySelector(".modal-overlay").addEventListener("click", closeModal);

// Close modal when pressing 'Esc' key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

/* ============ SCROLL SECTIONS ACTIVE LINK ============= */
let sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu li a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu li a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ============ SCROLL SECTIONS RESUME LINK ============= */
const resumeItem = document.querySelectorAll(".resume-item");

function scrollResume() {
  const scrollY = window.pageYOffset;

  resumeItem.forEach((item) => {
    const sectionHeight = item.offsetHeight;
    const sectionTop = item.offsetTop + 2000;

    resumeId = item.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".sidebar a[href*=" + resumeId + "]")
        .classList.add("active-resume");
    } else {
      document
        .querySelector(".sidebar a[href*=" + resumeId + "]")
        .classList.remove("active-resume");
    }
  });
}

window.addEventListener("scroll", scrollResume);

/* ============ Active card testimonial ============= */
let cardsTest = document.querySelectorAll(".testimonial .card");

function activeCard() {
  cardsTest.forEach((card) => card.classList.remove("active-card"));
  this.classList.add("active-card");
}

cardsTest.forEach((card) => card.addEventListener("click", activeCard));

/* ============ Active card testimonial ============= */
let dataId = cardsTest.forEach((card) => card.getAttribute("data-id"));
let texts = document.querySelectorAll(".testimonial .text");
let textId = texts.forEach((text) => text.getAttribute("id"));

function textActive() {
  texts.forEach((text) => text.classList.remove("active-text"));
  let current = this.getAttribute("data-id");
  document
    .querySelector(".testimonial .text[id*=" + current + "]")
    .classList.add("active-text");
}

cardsTest.forEach((card) => card.addEventListener("click", textActive));

// Typed.js main portofolio ==========
var typed = new Typed("#typed", {
  strings: ["Web Developer", "Backend Developer"],
  typeSpeed: 70,
  backSpeed: 100,
  backDelay: 700,
  loop: true,
});

// menu bar
let menuBar = document.querySelector(".menu-bar");
let navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});
