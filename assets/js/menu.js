document.addEventListener("DOMContentLoaded", showMenu);

function showMenu() {
  const container = document.getElementById("menuSections");

  if (!container) {
    console.warn("Menu section element does not exist.");
    return;
  }

  categories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "mb-5";

    const heading = document.createElement("h3");
    heading.className = "h4 text-center mb-4 position-relative";

    const span = document.createElement("span");
    span.className = "bg-white px-3 position-relative z-1";
    span.textContent = category.title;

    const hr = document.createElement("hr");
    hr.className =
      "position-absolute top-50 start-0 w-100 border-1 text-muted z-n1";

    heading.appendChild(span);
    heading.appendChild(hr);
    section.appendChild(heading);

    const row = document.createElement("div");
    row.className = "row g-4";

    menuItems.forEach((item) => {
      if (item.categoryId !== category.id) return;

      const col = document.createElement("div");
      col.className = "col-md-6";

      const card = document.createElement("div");
      card.className = `card ${item.isSignature ? "border-warning" : "border-light"}`;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const topRow = document.createElement("div");
      topRow.className = "d-flex justify-content-between mb-2";

      const title = document.createElement("h5");
      title.className = "card-title mb-0";
      title.textContent = item.name;

      if (item.isSignature) {
        const star = document.createElement("span");
        star.className = "text-warning small ms-2";
        star.textContent = "★";
        title.appendChild(star);
      }

      const price = document.createElement("span");
      price.className = "text-dark-red fw-semibold";
      price.textContent = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(item.price);

      topRow.appendChild(title);
      topRow.appendChild(price);

      const description = document.createElement("p");
      description.className = "card-text text-muted small";
      description.textContent = item.description;

      cardBody.appendChild(topRow);
      cardBody.appendChild(description);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });

    section.appendChild(row);
    container.appendChild(section);
  });
}

const categories = [
  {
    id: 1,
    title: "Entrées",
  },
  {
    id: 2,
    title: "Plats Principaux",
  },
  {
    id: 3,
    title: "Desserts",
  },
];

const menuItems = [
  {
    id: 1,
    name: "Foie Gras au Torchon",
    description: "Duck liver terrine served with brioche toast and fig jam",
    price: 408000,
    isSignature: true,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Soupe à l'Oignon",
    description: "Traditional French onion soup with gruyère cheese",
    price: 272000,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Escargots de Bourgogne",
    description: "Burgundy snails with garlic and parsley butter",
    price: 306000,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Salade Niçoise",
    description: "Classic salad with tuna, olives, and farm-fresh vegetables",
    price: 323000,
    categoryId: 1,
  },
  {
    id: 5,
    name: "Coq au Vin",
    description: "Chicken braised in red wine with mushrooms and lardons",
    price: 578000,
    isSignature: true,
    categoryId: 2,
  },
  {
    id: 6,
    name: "Filet de Boeuf Rossini",
    description: "Beef tenderloin topped with foie gras and truffle sauce",
    price: 714000,
    categoryId: 2,
  },
  {
    id: 7,
    name: "Bouillabaisse Marseillaise",
    description: "Traditional Provençal seafood stew with rouille",
    price: 646000,
    categoryId: 2,
  },
  {
    id: 8,
    name: "Canard à l'Orange",
    description: "Roasted duck breast with caramelized orange sauce",
    price: 612000,
    categoryId: 2,
  },
  {
    id: 9,
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar",
    price: 238000,
    categoryId: 3,
  },
  {
    id: 10,
    name: "Tarte Tatin",
    description: "Upside-down caramelized apple tart with crème fraîche",
    price: 255000,
    isSignature: true,
    categoryId: 3,
  },
  {
    id: 11,
    name: "Soufflé au Grand Marnier",
    description: "Light and airy orange-flavored soufflé",
    price: 272000,
    categoryId: 3,
  },
  {
    id: 12,
    name: "Assiette de Fromages",
    description: "Selection of fine French cheeses with fruit and nuts",
    price: 306000,
    categoryId: 3,
  },
];
