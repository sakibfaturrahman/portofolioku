
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

//modal popup
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('myModal');
const modalVideo = document.getElementById('modalVideo');
const modalDescription = document.getElementById('modalDescription');
const overlay = document.querySelector('.overlay');
let currentMediaType = '';

portfolioItems.forEach(item => {
    item.addEventListener('click', function () {
        const mediaType = this.dataset.mediaType;
        const mediaSource = this.dataset.mediaSource;
        const description = this.dataset.description; // Mendapatkan deskripsi dari atribut dataset
        openModal(mediaType, mediaSource, description);
    });
});

//modal popup
function openModal(mediaType, mediaSource, description) {
    modal.style.display = 'block';
    overlay.style.display = 'block';

    if (mediaType === 'image') {
        document.querySelector('.media-container video').style.display = 'none';
        document.querySelector('.media-container img').style.display = 'block';
        document.querySelector('.media-container img').src = mediaSource;
    } else if (mediaType === 'video') {
        document.querySelector('.media-container img').style.display = 'none';
        document.querySelector('.media-container video').style.display = 'block';
        modalVideo.src = mediaSource;
        modalVideo.play();
    }

    modalDescription.textContent = description; // Menetapkan teks deskripsi
    currentMediaType = mediaType;
    document.body.classList.add('modal-open');
}

function closeModal() {
  document.body.classList.remove('modal-open');

  // Menambahkan kelas animasi fade out ke modal
  modal.classList.add('fade-out-modal');

  // Setelah animasi selesai, atur kembali propertinya
  modal.addEventListener('animationend', function () {
      modal.style.display = 'none';
      overlay.style.display = 'none';
      modal.classList.remove('fade-out-modal');
  }, { once: true });

  if (currentMediaType === 'video') {
      modalVideo.pause();
      modalVideo.src = ''; // Menghentikan dan mengosongkan sumber video
  }
}



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
    const sectionTop = item.offsetTop + 2600;

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
  strings: ["Backend Developer", "Videographer"],
  typeSpeed: 70,
  backSpeed: 100,
  backDelay: 700,
  loop: true,
});

// menu bar 
let menuBar = document.querySelector(".menu-bar");
let navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener('click', () => {
  navMenu.classList.toggle('menu-active');
})