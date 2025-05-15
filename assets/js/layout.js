document.addEventListener("DOMContentLoaded", () => {
  initTopNavigation();
  initFooter();
});

function initTopNavigation() {
  const nav = document.getElementById("topNavigation");

  nav.className = "bg-body-tertiary position-fixed top-0 left-0 px-3 py-2";

  const container = document.createElement("div");
  container.className =
    "container-fluid navbar navbar-expand-lg justify-content-end justify-content-lg-start";

  const brandContainer = document.createElement("div");
  const brand = document.createElement("a");
  const brandLogo = document.createElement("img");
  const brandSpan = document.createElement("span");
  brandContainer.className = "brand-container py-2";
  brandLogo.src = "./assets/imgs/logo.svg";
  brandLogo.alt = brandName;
  brandLogo.className = "top-brand";
  brandSpan.innerText = brandName;
  brand.href = navLinks[0].href;
  brand.className = "d-flex align-items-center gap-2";
  brand.appendChild(brandLogo);
  brand.appendChild(brandSpan);
  brandContainer.appendChild(brand);

  const toggler = document.createElement("button");
  toggler.className = "navbar-toggler";
  toggler.type = "button";
  toggler.setAttribute("data-bs-toggle", "collapse");
  toggler.setAttribute("data-bs-target", "#navLinks");
  toggler.setAttribute("aria-controls", "navLinks");
  toggler.setAttribute("aria-expanded", "false");
  toggler.setAttribute("aria-label", "Toggle navigation");

  const togglerIcon = document.createElement("span");
  togglerIcon.className = "navbar-toggler-icon";
  toggler.appendChild(togglerIcon);

  const collapseDiv = document.createElement("div");
  collapseDiv.className = "collapse navbar-collapse justify-content-lg-center";
  collapseDiv.id = "navLinks";

  const ul = document.createElement("ul");
  ul.className = "navbar-nav gap-4";

  navLinks.forEach((link) => {
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.className = "nav-link";

    if (isCurrentPage(link.href)) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }

    a.href = link.href;
    a.textContent = link.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  collapseDiv.appendChild(ul);
  container.appendChild(toggler);
  container.appendChild(collapseDiv);
  nav.appendChild(brandContainer);
  nav.appendChild(container);

  document.body.style.marginTop = nav.scrollHeight + "px";
}

function initFooter() {
  const footer = document.getElementById("pageFooter");
  const container = document.createElement("div");
  container.className = "container pt-3 pb-5";

  const row = document.createElement("div");
  row.className = "row";

  const leftCol = document.createElement("div");
  leftCol.className = "col-12 col-md-6 d-flex flex-column gap-2";

  const brandContainer = document.createElement("div");
  const brandLogo = document.createElement("img");
  const brandSpan = document.createElement("span");
  brandContainer.className = "d-flex align-items-center brand-container gap-2";
  brandLogo.src = "./assets/imgs/logo.svg";
  brandLogo.alt = brandName;
  brandSpan.textContent = brandName;
  brandContainer.appendChild(brandLogo);
  brandContainer.appendChild(brandSpan);

  const address = document.createElement("p");
  address.innerHTML =
    "Jl. Gunawarman No.18, Kebayoran Baru<br>Jakarta Selatan 12110<br>Indonesia";

  const copyright = document.createElement("p");
  copyright.textContent = `© ${new Date().getFullYear()} ${brandName}. All Rights Reserved.`;

  leftCol.appendChild(brandContainer);
  leftCol.appendChild(address);
  leftCol.appendChild(copyright);

  const rightCol = document.createElement("div");
  rightCol.className =
    "col-12 col-md-6 d-flex justify-content-md-end align-items-center";

  const footerNav = document.createElement("div");
  footerNav.className =
    "footer-nav d-flex flex-wrap gap-3 justify-content-center justify-content-md-end";

  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    footerNav.appendChild(a);
  });

  rightCol.appendChild(footerNav);
  row.appendChild(leftCol);
  row.appendChild(rightCol);
  container.appendChild(row);
  footer.appendChild(container);
}

function isCurrentPage(route) {
  return window.location.pathname.includes(route);
}

const brandName = "Maison de la Crown";
const navLinks = [
  { text: "Home", href: "index.html" },
  { text: "Menu", href: "menu.html" },
  { text: "About Us", href: "about-us.html" },
];
