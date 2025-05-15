document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initReviews();
});

function initReviews() {
  const container = document.getElementById("reviewsContainer");

  if (!container) {
    console.warn("Reviews container does not exist.");
    return;
  }

  reviews.forEach((review) => {
    const col = document.createElement("div");
    col.classList.add("col-md-4");

    const blockquote = document.createElement("blockquote");
    blockquote.className = "blockquote text-center";

    const p = document.createElement("p");
    p.classList.add("mb-5");
    p.textContent = `"${review.text}"`;

    const author = document.createElement("p");
    author.classList.add("blockquote-footer");
    author.textContent = review.author;

    blockquote.appendChild(p);
    blockquote.appendChild(author);
    col.appendChild(blockquote);
    container.appendChild(col);
  });
}

function initHero() {
  const heroCarousel = document.getElementById("heroCarousel");
  const indicatorsContainer = heroCarousel.querySelector(
    ".carousel-indicators",
  );
  const innerContainer = heroCarousel.querySelector(".carousel-inner");
  const nav = document.getElementById("topNavigation");

  innerContainer.style.height = `calc(100dvh - ${nav ? nav.scrollHeight : 0}px)`;

  heroImgSources.forEach((image, idx) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#heroCarousel");
    indicator.setAttribute("data-bs-slide-to", idx.toString());
    indicator.setAttribute("aria-label", `Slide ${idx + 1}`);

    if (idx === 0) {
      indicator.classList.add("active");
      indicator.setAttribute("aria-current", "true");
    }
    indicatorsContainer.appendChild(indicator);

    const item = document.createElement("div");
    item.className = "carousel-item h-100 bg-black";

    if (idx === 0) {
      item.classList.add("active");
    }
    item.setAttribute("data-bs-interval", 3500);

    const img = document.createElement("img");
    img.className = "w-100 h-100 object-fit-cover";
    img.src = image;
    img.alt = `Slide ${idx + 1}`;

    item.appendChild(img);
    innerContainer.appendChild(item);
  });
}
const reviews = [
  {
    text: "A true Parisian experience in Jakarta! Every bite was heavenly.",
    author: "Maria S.",
  },
  {
    text: "Ambiance, flavor, service — everything was perfection.",
    author: "Jonathan K.",
  },
  {
    text: "Maison de la Crown redefines fine dining with charm.",
    author: "Dewi L.",
  },
];

const heroImgSources = Array(3)
  .fill(null)
  .map(
    (_, idx) =>
      `./assets/imgs/hero/hero-${idx.toString().padStart(2, "0")}.avif`,
  );
