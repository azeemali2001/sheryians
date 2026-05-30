const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

const products = [
  {
    id: 1,
    category: "Tea Sachets",
    title: "Organic Tropical Green Tea",
    price: 11.95,
    pricePrefix: "From",
    rating: 4.71,
    reviews: 84,
    description:
      "Our Organic Tropical Green is a fruity and fun take on a classic green tea.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/organic_tropical_green_tea_sachet_featured.webp?v=1771579242&width=600",
    backgroundColor: "#c1ee91",
    darkColor: "#8bc045",
    productUrl: "/products/organic-tropical-green"
  },

  {
    id: 2,
    category: "Gifts & Samplers",
    title: "Herbal Tea Trio",
    price: 33.30,
    pricePrefix: "",
    rating: 5,
    reviews: 2,
    description:
      "A trio of soothing herbal teas.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/bundle-herbal-tea-trio-featured-image.webp?v=1772174356&width=600",
    backgroundColor: "#ffd884",
    darkColor: "#f5a800",
    productUrl: "/products/herbal-tea-trio"
  },

  {
    id: 3,
    category: "Naked Sachets",
    title: "Organic Peppermint - 50 Naked Tea Sachets",
    price: 21.95,
    pricePrefix: "",
    rating: 5,
    reviews: 11,
    description:
      "Our organic Peppermint tea is made from peppermint grown in Washington State.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/peppermint_naked_featured.webp?v=1771580547&width=600",
    backgroundColor: "#b0e8c1",
    darkColor: "#51c073",
    productUrl: "/products/organic-peppermint-50-naked-tea-sachets"
  },

  {
    id: 4,
    category: "Gifts & Samplers",
    title: "Classic Bamboo Tea Chest",
    price: 42.95,
    pricePrefix: "",
    rating: 4.85,
    reviews: 41,
    description:
      "This 6-slot bamboo box offers a sampling of eight sachets each of six of our best selling teas.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Bamboo_Tea_Chest.webp?v=1772543139&width=600",
    backgroundColor: "#c1e4f8",
    darkColor: "#71b2fc",
    productUrl: "/products/classic-bamboo-tea-chest"
  },

  {
    id: 5,
    category: "Latte Mix",
    title: "Nice Matcha Tea Latte Mix",
    price: 12.95,
    pricePrefix: "From",
    rating: 4.3,
    reviews: 23,
    description:
      "Our Nice Matcha is a lightly sweetened powdered mix meant for making tea lattes simple.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Latte_Mix.webp?v=1771386671&width=600",
    backgroundColor: "#c0e571",
    darkColor: "#87c00d",
    productUrl: "/products/nice-matcha-green-tea"
  },

  {
    id: 6,
    category: "Latte Mix",
    title: "Nice Chai Tea Latte Mix",
    price: 12.95,
    pricePrefix: "From",
    rating: 4.24,
    reviews: 17,
    description:
      "Our Nice Chai is a not too sweet, not too spicy, powdered latte mix meant for making tea lattes simple.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Latte_Mix_b400f40c-730f-4122-9058-cfc4e5bf8faf.webp?v=1771389945&width=600",
    backgroundColor: "#ffcb96",
    darkColor: "#f09f54",
    productUrl: "/products/nice-chai-latte-mix"
  },

  {
    id: 7,
    category: "Tea Sachets",
    title: "Organic Mountain High Chai Tea",
    price: 11.95,
    pricePrefix: "From",
    rating: 4.79,
    reviews: 108,
    description:
      "An ode to our Rocky Mountain roots, our organic Mountain High Chai takes your tastebuds down a spice-filled ski slope.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/organic_high_mountain_chai_tea_sachet_featured.webp?v=1771578289&width=600",
    backgroundColor: "#ffd1b8",
    darkColor: "#ea6d44",
    productUrl: "/products/organic-mountain-high-chai"
  },

  {
    id: 8,
    category: "Naked Sachets",
    title: "Organic Earl Grey - 50 Naked Tea Sachets",
    price: 21.95,
    pricePrefix: "",
    rating: 4.56,
    reviews: 41,
    description:
      "Earl Grey's distinctive aroma comes from bergamot - a citrus fruit about the size of an orange but yellow-green and slightly pear-shaped.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/Naked_Tea.webp?v=1771401766&width=600",
    backgroundColor: "#cce3ff",
    darkColor: "#78a4dd",
    productUrl: "/products/earl-grey-50-naked-tea-sachets"
  },

  {
    id: 9,
    category: "Naked Sachets",
    title: "Alpine Berry - 15 Naked Tea Sachets",
    price: 8.95,
    pricePrefix: "From",
    rating: 5,
    reviews: 5,
    description:
      "Our signature herbal blend, Alpine Berry is a caffeine-free, naturally sweet and tart tea.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/alpine_berry_naked_featured.webp?v=1771496640&width=600",
    backgroundColor: "#aee0f9",
    darkColor: "#26a4e4",
    productUrl: "/products/alpine-berry-15-naked-tea-sachets"
  }
];


const container = document.querySelector(".container");

products.forEach(product => {
  container.innerHTML += `
        <div class="item">
            <div class="upper" style="background-color:${product.backgroundColor}">
                <div class="upperPart">
                    <div class="tag">
                        <p>${product.category}</p>
                    </div>

                    <div class="star">
                        <i class="ri-star-fill"></i>
                        <p>${product.rating}(${product.reviews})</p>
                    </div>
                </div>

                <img src="${product.image}" alt="${product.title}">

                <div class="add">
                    <i class="ri-add-line"></i>
                    <p>Add</p>
                </div>
            </div>

            <div class="lower">
                <p>${product.title}</p>

                <p>
                    ${product.pricePrefix}
                    $${product.price}
                </p>

                <p>${product.description}</p>
            </div>
        </div>
    `;
});


const input = document.querySelector("input");

const words = [
  "Green Tea",
  "Matcha",
  "Herbal Tea",
  "Latte Mix",
  "Black Tea"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  if (!deleting) {
    input.placeholder = word.slice(0, charIndex++);
  } else {
    input.placeholder = word.slice(0, charIndex--);
  }

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex > word.length) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex < 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();