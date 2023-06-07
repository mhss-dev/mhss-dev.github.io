const addEventOnElem = function (e, t, a) {
    if (e.length > 1)
      for (let n = 0; n < e.length; n++) e[n].addEventListener(t, a);
    else e.addEventListener(t, a);
  },
  navbar = document.querySelector("[data-navbar]"),
  navbarLinks = document.querySelectorAll("[data-nav-link]"),
  navbarToggler = document.querySelector("[data-nav-toggler]"),
  toggleNav = function () {
    navbar.classList.toggle("active"), navbarToggler.classList.toggle("active");
  };
addEventOnElem(navbarToggler, "click", toggleNav);
const closeNav = function () {
  navbar.classList.remove("active"), navbarToggler.classList.remove("active");
};
addEventOnElem(navbarLinks, "click", closeNav);
const header = document.querySelector("[data-header]"),
  backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  window.scrollY >= 100
    ? (header.classList.add("active"), backTopBtn.classList.add("active"))
    : (header.classList.remove("active"),
      backTopBtn.classList.remove("active"));
});
const el_image = document.querySelector(".image"),
  el_name = document.querySelector(".name"),
  el_stars = document.querySelector(".stars"),
  el_review = document.querySelector(".review"),
  prev_btn = document.getElementById("prev-button"),
  next_btn = document.getElementById("next-button"),
  surprise_btn = document.getElementById("surprise"),
  reviews = [
    {
      id: 0,
      image: "/assets/images/woman-icon.png",
      name: "Rabia",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Cliente depuis des ann\xe9es et toujours aussi contente travaille impeccable tr\xe8s professionnelle irr\xe9prochable. Je recommande \xe0 100%100. Surtout pour un d\xe9tartrage tr\xe8s satisfaite.",
    },
    {
      id: 1,
      image: "/assets/images/male-icon.png",
      name: "Evaguelos",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Patient depuis plus de 30 ans, ma fid\xe9lit\xe9 est due aux conseils tr\xe8s professionnels et aux soins du dentiste qui a la main l\xe9g\xe8re. Cabinet moderne constamment mis au go\xfbt du jour avec un appareillage dernier cri. La propret\xe9 y est irr\xe9prochable. Je ne peux que vous le recommander.",
    },
    {
      id: 2,
      image: "/assets/images/woman-icon.png",
      name: "Doris Elkan",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Excellent service et amabilit\xe9 sans pareil. Je recommande vivement pour tout ce qui concerne les proth\xe8ses dentaires.",
    },
    {
      id: 3,
      image: "/assets/images/woman-icon.png",
      name: "Florence",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Le cabinet est tr\xe8s beau et tr\xe8s propre. Le personnel est g\xe9nial et m\xe9rite d'\xeatre reconnu pour son professionnalisme. Je vous le conseil \xe0 tous car c'est le meilleur \xe0 mes yeux. J'ai re\xe7u un accueil tr\xe8s chaleureux et sympathique.",
    },
    {
      id: 4,
      image: "/assets/images/male-icon.png",
      name: "Georges",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Sur les recommandations d’une connaissance je me suis rendu au cabinet  Denta  Confort . Excellent accueil ,personels gentils  et professionnels. Le cabinet est tr\xe8s bien \xe9quip\xe9 et l’hygi\xe8ne impeccable. Les soins sont d’une tres bonne qualite’. Je recommande Denta Confort. Merci Jean et \xe0 toute ton \xe9quipe.",
    },
    {
      id: 5,
      image: "/assets/images/woman-icon.png",
      name: "Sarah",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Premi\xe8re fois chez Denta confort, phobique du dentiste, j’avais appel\xe9 pour une urgence dentaire, on m’a dit de venir, j’ai \xe9t\xe9 re\xe7u en 10 min, tout c’est tr\xe8s bien pass\xe9 ! Personnel accueillant, tr\xe8s gentil, hygi\xe8ne tr\xe8s propre ! Contente de ma premi\xe8re venue !",
    },
    {
      id: 6,
      image: "/assets/images/woman-icon.png",
      name: "Angeliki Bouras",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Tr\xe8s bon  dentiste conventionn\xe9 ! Excellent proth\xe9siste sur place. Je recommande",
    },
    {
      id: 7,
      image: "/assets/images/woman-icon.png",
      name: "Teresa",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Toujours tr\xe8s content de votre travail je suis avec vous depuis des ann\xe9es et toujours tr\xe8s satisfait \uD83D\uDC4C\uD83C\uDFFD",
    },
    {
      id: 8,
      image: "/assets/images/male-icon.png",
      name: "Flow",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Accueil chaleureux  et conseils avis\xe9s ! Mr Jean est aux petits soins et \xe0 l \xe9coute ! Il prend son temps et c'est rare! Merci ! Je recommande vivement ce cabinet dentaire.",
    },
    {
      id: 9,
      image: "/assets/images/male-icon.png",
      name: "Gaetan Dartois",
      star: "⭐⭐⭐⭐⭐",
      review:
        "Quelle super service re\xe7u rapidement et efficace MERCI MERCI. A recommand\xe9 MILLE MERCIS ENCORE",
    },
  ];
let currentID = 0;
const arrayLength = reviews.length;
function previousReview() {
  (currentID = getCurrentID(-1)), updateDisplayInfo();
}
function randomReview() {
  (currentID = getCurrentID(0)), updateDisplayInfo();
}
function nextReview() {
  (currentID = getCurrentID(1)), updateDisplayInfo();
}
function getCurrentID(e) {
  let t = currentID;
  switch (e) {
    case -1:
      currentID > 0 ? t-- : (t = arrayLength - 1);
      break;
    case 0:
      let a = Math.floor(Math.random() * arrayLength);
      for (; a == t; ) a = Math.floor(Math.random() * arrayLength);
      t = a;
      break;
    case 1:
      currentID < arrayLength - 1 ? t++ : (t = 0);
  }
  return t;
}
function updateDisplayInfo() {
  let { image: e, name: t, star: a, review: n } = reviews[currentID];
  (el_image.src = e),
    (el_name.textContent = t),
    (el_stars.textContent = a),
    (el_review.textContent = n);
}
next_btn.addEventListener("click", nextReview),
  surprise_btn.addEventListener("click", randomReview);
