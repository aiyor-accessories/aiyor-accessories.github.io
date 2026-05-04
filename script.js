let isMobile = window.innerWidth <= 768;

let currentLang = "ar";

  const translations = {
  ar: {
  search: "ابحث",
  pack: "عروض",
  all: "الكل",
  rings: "الخواتم",
  necklaces: "القلادات",
  bracelets: "الأساور",
  watches:"الساعات",
  earrings: "حلقات الاذن", 
  otherJewelry: "مجوهرات أخرى",
  /*-------necklaces---------*/
  necklace: "قلادة",
  butterflies_necklace:"قلادة الفراشات",
  butterfly_necklace:"قلادة الفراشة",
  devided_heart_necklace:"قلادة القلب",
  face_necklace:"قلادة الوجه",
  gold_papillon_necklace:"قلادة العقدة الذهبية",
  silver_papillon_necklace:"قلادة العقدة الفضية",
  heart_necklace:"قلادة القلب",
  whale_tail_necklace:"قلادة ذيل الحوت",
  /*-------watches---------*/
  watch:" ساعة اليد",
  /*-------bracelets---------*/
  bracelet:"سوار",
   bracelet_tulip:"سوار توليب",
  chain_bracelet:"سوارالسلسلة",
  star_bracelet:"سوار النجمة",
  /*-------rings---------*/
  ring: "خاتم",
 
  /*-------EARRINGS---------*/
  earrings: " حلقات الاذن", 
  summer_earrings:"حلقات صيفية",
  /*-------END OF PRODUCTS---------*/
  add: "أضف إلى السلة",
  cartEmpty: "السلة فارغة !",
  buy: "شراء",
  total: "المجموع",
  brand: " مجوهرات AIYOR",
  footer_desc: "إكسسوارات فاخرة مصنوعة بالأناقة والحب ✨",
  contact: "اتصل بنا",
  location: "📍 مراكش",
  whatsapp_available: "📱 واتساب متوفر",
  contact_anytime: "💌 راسلنا في أي وقت",
  price: "درهم",
  emptyCategory: "لا توجد منتجات في هذا القسم",
  footer_instagram:"انستغرام",
  footer_whatsapp:"واتساب",
  footer_tiktok:"تيك توك",
  
},

  fr: {
  search: "Rechercher",
  pack: "PACKS",
  all: "TOUS",
  rings: "BAGUES",
  necklaces: "COLLIERS",
  bracelets: "BRACELETS",
  watches: "MONTRES",
  earrings: "BOUCLES D'OREILLES",
  otherJewelry: "AUTRES BIJOUX",
  /*-------necklaces---------*/
  necklace: "Collier",
  butterflies_necklace:"Collier des papillons",
  butterfly_necklace:"Collier du papillon",
  devided_heart_necklace:"Collier du coeur",
  face_necklace:"Collier du visage",
  gold_papillon_necklace:"Collier du noeud (Or)",
  silver_papillon_necklace:"Collier du noeud (Argent)",
  heart_necklace:"Collier du coeur",
  whale_tail_necklace:"Collier du queue de baleine",
  /*-------WATCHES---------*/
  watch:"Montre",
  /*-------BRACELETS---------*/
  bracelet:"Bracelet",
  bracelet_tulip:"Bracelet Tulip",
  chain_bracelet:"Bracelet Chaîne",
  star_bracelet:"Bracelet Etoile",
  /*-------RINGS---------*/
  ring:"Bague",
  
  /*-------EARRINGS---------*/
  earrings:"BOUCLES D'OREILLES",
  summer_earrings:"Boucles d'été",
  add: "Ajouter au panier",
  cartEmpty: "Le panier est vide !",
  buy: "Acheter",
  total: "TOTAL",
  brand: "AIYOR Bijoux",
  footer_desc: "Accessoires luxueux faits avec élégance et amour ✨",
  contact: "Contactez-nous",
  location: "📍 Marrakech",
  whatsapp_available: "📱 WhatsApp disponible",
  contact_anytime: "💌 Écrivez-nous à tout moment",
  price: "DH",
  emptyCategory: "Aucun produit dans cette catégorie",
  footer_instagram:"Instagram",
  footer_whatsapp:"Whatsapp",
  footer_tiktok:" Tik Tok"
},

  en: {
  search: "Search",
  pack: "PACKS",
  all: "ALL",
  rings: "RINGS",
  necklaces: "NECKLACES",
  bracelets: "BRACELETS",
  watches: "WATCHES",
  earrings: "EARRINGS",
  otherJewelry: "OTHER JEWELRY",
  /*-------necklaces---------*/
  necklace: "Necklace",
  butterflies_necklace:"Butterflies Necklace ",
  butterfly_necklace:"Butterfly Necklace ",
  devided_heart_necklace:"Heart Necklace",
  face_necklace:"Face Necklace",
  gold_papillon_necklace:"Silver Node Necklace ",
  silver_papillon_necklace:"Gold Node Necklace",
  heart_necklace:"Heart Necklace",
  whale_tail_necklace:"whale Tail Necklace",
  /*-------watches---------*/
  watch:"Watch",
  /*-------bracelets---------*/
  bracelet: "Bracelet",
  bracelet_tulip:"Tulip Bracelet",
  chain_bracelet:"Chain Bracelet",
  star_bracelet:"Star Bracelet ",
  /*-------rings---------*/
  ring:"Ring",
  /*-------earrings---------*/
  earrings:"EARRINGS",
  summer_earrings:"Summer Earrings",
  add: "Add to cart",
  cartEmpty: "Cart is empty!",
  buy: "Buy",
  total: "TOTAL",
  brand: "AIYOR Jewelry",
  footer_desc: "Luxury accessories made with elegance and love ✨",
  contact: "Contact us",
  location: "📍 Marrakech",
  whatsapp_available: "📱 WhatsApp available",
  contact_anytime: "💌 Message us anytime",
  price: "MAD",
  emptyCategory: "No products in this category",
  footer_instagram:"Instagram",
  footer_whatsapp:"Whatsapp",
  footer_tiktok:" Tik Tok"
},
};



function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // search placeholder (special case)
  document.getElementById("searchInput").placeholder =
    translations[lang].search;
    translateProducts(lang);
    translatePrices(lang);
}

function translateProducts(lang) {
  document.querySelectorAll(".product p").forEach(p => {
    const key = p.dataset.i18n;

    if (key && translations[lang][key]) {
      p.textContent = translations[lang][key];
    }
  });
}

function translatePrices(lang) {
  document.querySelectorAll("[data-i18n-price]").forEach(el => {
    const price = el.dataset.price;

    if (price) {
      el.textContent = `${price} ${translations[lang].price}`;
    }
  });
}


function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // RTL / LTR FIX
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // APPLY TRANSLATIONS
  applyTranslations(lang);
  updateCart();
}


/* =========================================================
   🛒 CART SYSTEM (LOAD + VARIABLES)
========================================================= */
const CART_VERSION = "v2";

if (localStorage.getItem("cart_version") !== CART_VERSION) {
  localStorage.removeItem("cart");
  localStorage.setItem("cart_version", CART_VERSION);
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartBtn = document.querySelector(".panier-button");
const cartMenu = document.getElementById("cart-menu");
const cartCount = document.getElementById("cart-count");
const suggestionsBox = document.getElementById("suggestions");
const searchInput = document.getElementById("searchInput");

let selectedIndex = -1;
/* =========================================================
   🛍️ ADD TO CART FUNCTIONALITY
========================================================= */

document.querySelectorAll(".add-to-cart").forEach(button => {
 button.addEventListener("click", (e) => {
  e.stopPropagation();

    const product = e.target.closest(".product");

  const key = product.querySelector("p").dataset.i18n;
  const id = product.dataset.id;   
   const price = parseFloat(product.querySelector("[data-i18n-price]").dataset.price);
    const img = product.querySelector("img").src;
    const imgElement = product.querySelector("img");
    

    product.classList.add("clicked");

    setTimeout(() => {
      product.classList.remove("clicked");
    }, 250);

    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
     cart.push({
    id: id,
    key: key,
    price: price,
    img: img,
    qty: 1
  });
    }

    saveCart();
    updateCart();
    showPopup(translations[currentLang][key] || key);
    flyToCart(imgElement);

    cartBtn.classList.add("shake");

    setTimeout(() => {
      cartBtn.classList.remove("shake");
    }, 400);
  });
});


/* =========================================================
   💾 SAVE CART TO LOCALSTORAGE
========================================================= */

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


/* =========================================================
   ❌ REMOVE ITEM FROM CART
========================================================= */

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}


/* =========================================================
   🔄 UPDATE CART UI (RENDER CART)
========================================================= */

function updateCart() {

  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  let total = 0;
  let html = `<div class="cart-items">`;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    html += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
      <p>${translations[currentLang]?.[item.key] ?? item.key}</p> 
      <small>${item.price} ${translations[currentLang].price}</small>
          <div>
            <button onclick="changeQty(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>

          <button class="delete-btn" onclick="removeItem(${index})">×</button>
        </div>
      </div>
    `;
  });

  html += `
    <div class="cart-footer">
  ${translations[currentLang].total}: ${total} ${translations[currentLang].price}
</div>
    <button class="buy-btn" onclick="checkoutWhatsApp()">
  ${translations[currentLang].buy}
</button>
  `;

  cartMenu.innerHTML = html;
}


/* =========================================================
   🛒 OPEN / CLOSE CART MENU
========================================================= */

cartBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cartMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  const isClickInsideCart = cartMenu.contains(e.target);
  const isClickCartButton = cartBtn.contains(e.target);

  if (!isClickInsideCart && !isClickCartButton) {
    cartMenu.classList.remove("open");
  }
});

cartMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});


/* =========================================================
   ➕ CHANGE QUANTITY
========================================================= */

function changeQty(index, value) {
  cart[index].qty += value;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCart();
}


/* =========================================================
   🔔 POPUP NOTIFICATION
========================================================= */

function showPopup(name) {
  let popup = document.createElement("div");
  popup.className = "popup";

  let msg =
    currentLang === "ar"
      ? `${name} تمت إضافته إلى السلة`
      : currentLang === "fr"
      ? `${name} ajouté au panier`
      : `${name} added to cart`;

  popup.textContent = msg;

  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("show"), 10);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300);
  }, 1200);
}


/* =========================================================
   🔍 SEARCH PRODUCTS (FILTER)
========================================================= */

function searchProducts(value) {

  let products = document.querySelectorAll(".product");
  let query = value.toLowerCase().trim();

  products.forEach(product => {
    let id = product.dataset.id?.toLowerCase() || "";
    let category = product.dataset.category?.toLowerCase() || "";
    let text = product.querySelector("p")?.textContent?.toLowerCase() || "";

    const match =
      id.includes(query) ||
      category.includes(query) ||
      text.includes(query);

    product.style.display = match ? "block" : "none";
  });

  suggestionsBox.style.display = "none";
}

/* =========================================================
   🔎 SEARCH INPUT EVENTS
========================================================= */



searchInput.addEventListener("keydown", (e) => {

  const items = suggestionsBox.querySelectorAll("div");

  if (e.key === "ArrowDown") {
    e.preventDefault();

    if (selectedIndex < items.length - 1) {
      selectedIndex++;
    }

    updateSelection(items);
  }

  else if (e.key === "ArrowUp") {
    e.preventDefault();

    if (selectedIndex > 0) {
      selectedIndex--;
    }

    updateSelection(items);
  }

  else if (e.key === "Enter") {
    e.preventDefault();

    if (selectedIndex >= 0 && items[selectedIndex]) {
      items[selectedIndex].click();
    } else {
      searchProducts(searchInput.value);
      suggestionsBox.innerHTML = "";
      suggestionsBox.style.display = "none";
    }
  }
});

function updateSelection(items) {
  items.forEach(item => item.classList.remove("active"));

  if (selectedIndex >= 0 && items[selectedIndex]) {
    items[selectedIndex].classList.add("active");
  }
}

/* =========================================================
   ✨ ANIMATION (FLY TO CART)
========================================================= */

function flyToCart(imgElement) {
  const cart = document.querySelector(".panier-button");

  const imgRect = imgElement.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  const flyingImg = imgElement.cloneNode(true);
  flyingImg.classList.add("flying-product");

  flyingImg.style.top = imgRect.top + "px";
  flyingImg.style.left = imgRect.left + "px";

  document.body.appendChild(flyingImg);

  setTimeout(() => {
    flyingImg.style.top = cartRect.top + "px";
    flyingImg.style.left = cartRect.left + "px";
    flyingImg.style.width = "20px";
    flyingImg.style.height = "20px";
    flyingImg.style.opacity = "0.5";
  }, 10);

  setTimeout(() => {
    flyingImg.remove();
  }, 700);
}


/* =========================================================
   📦 PRODUCT SORTING
========================================================= */

const productsContainer = document.getElementById("products");

function showAllProducts() {
  document.querySelectorAll(".product").forEach(product => {
    product.style.display = "block";
  });
}

function sortProducts(category) {
  let products = Array.from(document.querySelectorAll(".product"));

  products.sort((a, b) => {
    if (a.dataset.category === category && b.dataset.category !== category) return -1;
    if (a.dataset.category !== category && b.dataset.category === category) return 1;
    return 0;
  });

  products.forEach(p => productsContainer.appendChild(p));
}


/* =========================================================
   🎲 RANDOM ORDER
========================================================= */

function shuffleProducts() {
  let products = Array.from(document.querySelectorAll(".product"));

  products.sort(() => Math.random() - 0.5);

  products.forEach(p => productsContainer.appendChild(p));
}


/* =========================================================
   🎯 CATEGORY FILTER BUTTONS
========================================================= */

document.querySelector(".all-button").addEventListener("click", (e) => {
  showAllProducts();
  setActiveButton(e.target);
});

document.querySelector(".pack-button").addEventListener("click", (e) => {
  filterByCategory("pack");
  setActiveButton(e.target);
});

document.querySelector(".rings-button").addEventListener("click", (e) => {
  filterByCategory("rings");
  setActiveButton(e.target);
});

document.querySelector(".necklaces-button").addEventListener("click", (e) => {
  filterByCategory("necklaces");
  setActiveButton(e.target);
});

document.querySelector(".bracelets-button").addEventListener("click", (e) => {
  filterByCategory("bracelets");
  setActiveButton(e.target);
});


document.querySelector(".watches-button").addEventListener("click", (e) => {
  filterByCategory("watches");
  setActiveButton(e.target);
});

document.querySelector(".earrings-button").addEventListener("click", (e) => {
  filterByCategory("earrings");
  setActiveButton(e.target);
});

/* =========================================================
   📦 SHOW / FILTER PRODUCTS
========================================================= */



function filterByCategory(category) {
  document.querySelectorAll(".product").forEach(product => {
    product.style.display =
      product.dataset.category === category ? "block" : "none";
  });
}


/* =========================================================
   💖 ACTIVE BUTTON STYLE CONTROL
========================================================= */

function setActiveButton(button) {
  document.querySelectorAll(".header-2 button").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}


/* =========================================================
   🔗 WHATSAPP CHECKOUT
========================================================= */

function checkoutWhatsApp() {

  if (cart.length === 0) {
  alert(translations[currentLang].cartEmpty);    return;
  }

  let message = currentLang === "ar"
  ? "مرحباً، أريد الطلب :\n\n"
  : currentLang === "fr"
  ? "Bonjour, je veux commander :\n\n"
  : "Hello, I want to order:\n\n";  let total = 0;

  cart.forEach(item => {
    let itemTotal = item.price * item.qty;
    total += itemTotal;

    message += `🛍️ ${translations[currentLang][item.key] || item.key}\n`;
    message += `x${item.qty} - ${itemTotal} ${translations[currentLang].price}\n`;
    message += `📸 Image: ${item.img}\n\n`;
  });

  message += `💰 TOTAL: ${total} ${translations[currentLang].price}`;
  let phone = "212608820823";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}


/* =========================================================
   📊 INIT (RUN ON LOAD)
========================================================= */

updateCart();
shuffleProducts();


/* =========================================================
   🔎 SUGGESTION BOX (SEARCH AUTOCOMPLETE)
========================================================= */





searchInput.addEventListener("input", function () {

selectedIndex = -1;
suggestionsBox.innerHTML = "";

  let value = this.value.toLowerCase().trim();
  suggestionsBox.innerHTML = "";

  if (value.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestionsBox.style.display = "block";

  // 🔥 ALWAYS GET LIVE PRODUCTS (FIX)
  let productsData = Array.from(document.querySelectorAll(".product")).map(p => ({
    id: p.dataset.id,
    element: p
  }));

  let filtered = productsData.filter(p => {
    let key = p.id;
    let translated = translations[currentLang][key]?.toLowerCase() || "";

    return (
      key.includes(value) || translated.includes(value)
    );
  });

  if (filtered.length === 0) {
    suggestionsBox.innerHTML =
      currentLang === "ar"
        ? "<div>لا توجد نتائج</div>"
        : currentLang === "fr"
        ? "<div>Aucun résultat</div>"
        : "<div>No results</div>";

    return;
  }

  filtered.forEach((p, index) => {
  let div = document.createElement("div");

  div.textContent = translations[currentLang][p.id] || p.id;
  div.dataset.index = index;

  div.addEventListener("click", () => {
    searchInput.value = "";
    suggestionsBox.innerHTML = "";
    suggestionsBox.style.display = "none";

    searchProducts(p.id);
  });

  suggestionsBox.appendChild(div);
});
}); 


/* =========================================================
   🔍 SEARCH ICON CLICK
========================================================= */

document.querySelector(".search-icon").addEventListener("click", () => {
  searchProducts(searchInput.value);
});


/* =========================================================
   ❌ CLOSE SUGGESTIONS ON OUTSIDE CLICK
========================================================= */

document.addEventListener("click", (e) => {
  if (!document.querySelector(".search-box").contains(e.target)) {
    suggestionsBox.style.display = "none";
  }
});


/*====================================================
body sparkles
=====================================================
*/


const container = document.getElementById("sparkles");

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  // random position
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";

  // random size
  const size = Math.random() * 6 + 2;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  // random speed
  const duration = Math.random() * 10 + 8;
  sparkle.style.animationDuration = duration + "s";

  // random delay
  sparkle.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(sparkle);

  // remove after animation to avoid overload
  setTimeout(() => {
    sparkle.remove();
  }, duration * 1000);
}

// create many sparkles continuously


const initial = isMobile ? 8 : 30;
for (let i = 0; i < initial; i++) {
  createSparkle();
}

if (!isMobile) {
  setInterval(createSparkle, 800);
}



/*=====================================
header sparkles
=======================================
*/

const headerSparkleContainer = document.getElementById("header-sparkles");

function createHeaderSparkle() {
  const s = document.createElement("div");
  s.classList.add("header-sparkle");

  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";

  s.style.animationDuration = (Math.random() * 3 + 3) + "s";
  s.style.opacity = Math.random();

  headerSparkleContainer.appendChild(s);

  setTimeout(() => {
    s.remove();
  }, 6000);
}

setInterval(createHeaderSparkle, 400);
/*===========================================
instagram button
============================================= */

document.querySelector(".instagram-button").addEventListener("click", () => {
  window.open("https://www.instagram.com/aiyor__accessoires?igsh=MW8wZHl2MGI5bG14dQ==", "_blank");
});

/*===========================================
instagram button
============================================= */

document.querySelector(".whatsapp-button").addEventListener("click", () => {
  let phone = "212608820823"; // your number
  let message = "مرحباً، أريد مشاهدة المجوهرات 💎";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});




/*===========================================
item img swipe
============================================= */
const slider = document.querySelector(".slider");
const modal = document.getElementById("imageModal");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderTrack = document.getElementById("sliderTrack");
let currentImages = [];

// CLICK PRODUCT IMAGE
document.querySelectorAll(".product-img").forEach(img => {
  img.addEventListener("click", (e) => {

  const product = e.target.closest(".product");

  sliderTrack.innerHTML = "";

  if (!product.dataset.images) {
    currentImages = [img.src];
  } else {
    currentImages = JSON.parse(product.dataset.images);
  }

  currentImages.forEach(src => {
    const image = document.createElement("img");
    image.src = src;
    sliderTrack.appendChild(image);
  });

  modal.style.display = "flex";

// 🔥 FORCE RESET AFTER RENDER
setTimeout(() => {
  slider.scrollLeft = 0;
}, 10);
});
});


nextBtn.onclick = () => {
  slider.scrollBy({ left: 350, behavior: "smooth" });
};

prevBtn.onclick = () => {
  slider.scrollBy({ left: -350, behavior: "smooth" });
};


// CLOSE
closeBtn.onclick = () => modal.style.display = "none";

// CLICK OUTSIDE CLOSE
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
 




/*===========================================
item img phone swipe
============================================= */


if (slider) {
  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    let diff = startX - endX;

    if (diff > 50) nextBtn.click();
    else if (diff < -50) prevBtn.click();
  });
}



function getInitialLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;

  const lang = navigator.language.toLowerCase();

  if (lang.startsWith("ar")) return "ar";
  if (lang.startsWith("fr")) return "fr";

  return "en"; // fallback
}

setLanguage(getInitialLanguage());


function hidePreloader() {
  const preloader = document.getElementById("preloader");

  if (!preloader) return;

  preloader.style.opacity = "0";
  preloader.style.transition = "0.6s ease";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 600);
}

// hide when page fully loads
window.addEventListener("load", hidePreloader);

// 🔥 safety fallback (VERY IMPORTANT for mobile + ads)
setTimeout(hidePreloader, 4000);

