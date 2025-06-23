
// === START: Инициализация данных и настроек ===

let cart = [];
let currentProduct = null;
let selectedCountry = "СНГ";
const countryMultipliers = {
  "СНГ": 1,
  "ЕС": 1.25,
  "Америка": 1.5
};

// === END: Инициализация данных ===


// === START: Модальные окна ===

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// === END: Модальные окна ===


// === START: Открытие карточки товара с выбором страны ===

function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentProduct = product;
  selectedCountry = "СНГ";

  const detail = document.getElementById("productDetail");
  const multiplier = countryMultipliers[selectedCountry];
  const adjustedPrice = (product.price * multiplier).toFixed(2);

  detail.innerHTML = \`
    <div>
      <h2>\${product.name}</h2>
      <img src="\${product.logo}" style="width:80px;height:80px" />
      <p>\${product.description}</p>
      <label>Страна:
        <select onchange="updateCountryPrice(this.value)">
          <option value="СНГ">СНГ</option>
          <option value="ЕС">ЕС</option>
          <option value="Америка">Америка</option>
        </select>
      </label>
      <div><strong>Цена: </strong> <span id="priceDisplay">$\${adjustedPrice}</span></div>
      <button onclick="addToCart(\${product.id})">Добавить в корзину</button>
    </div>
  \`;

  openModal("productModal");
}

function updateCountryPrice(country) {
  selectedCountry = country;
  const multiplier = countryMultipliers[country];
  const newPrice = (currentProduct.price * multiplier).toFixed(2);
  document.getElementById("priceDisplay").innerText = `$\${newPrice}`;
}

// === END: Карточка товара ===


// === START: Добавление в корзину и уведомление ===

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const price = +(product.price * countryMultipliers[selectedCountry]).toFixed(2);
  const existing = cart.find(item => item.id === productId && item.country === selectedCountry);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, name: product.name, logo: product.logo, country: selectedCountry, price, quantity: 1 });
  }

  updateCart();
  updateCartBadge();
  showNotification("Товар добавлен в корзину");
}

function showNotification(text) {
  const div = document.createElement("div");
  div.innerText = text;
  div.style.cssText = "position:fixed;top:20px;right:20px;background:#667eea;color:#fff;padding:10px 20px;border-radius:8px;z-index:10000";
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2500);
}

// === END: Добавление в корзину ===


// === START: Корзина, удаление и итоги ===

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = \`
      <img src="\${item.logo}" />
      <div class="cart-item-info">
        <div class="cart-item-name">\${item.name} (\${item.country})</div>
        <div class="cart-item-price">$\${item.price} × \${item.quantity}</div>
        <button onclick="deleteCartItem(\${item.id}, '\${item.country}')">Удалить</button>
      </div>
    \`;
    cartItems.appendChild(div);
  });

  cartTotal.innerText = total.toFixed(2);
}

function deleteCartItem(productId, country) {
  cart = cart.filter(item => !(item.id === productId && item.country === country));
  updateCart();
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.innerText = count;
}

// === END: Корзина ===


// === START: Оформление заказа, таймер, курс ===

function openCheckout() {
  let html = "";
  cart.forEach(item => {
    html += `<div>\${item.name} (\${item.country}) — $\${item.price} × \${item.quantity}</div>`;
  });

  html += '<div style="margin-top:10px;"><strong>Итого: $' + cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2) + '</strong></div>';
  html += '<div id="checkoutTimer" style="color:red;margin-top:10px;"></div>';
  html += '<div id="cryptoRate" style="margin-top:10px;color:#333;"></div>';

  document.getElementById("checkoutContent").innerHTML = html;
  startPaymentTimer();
  fetchCryptoRate("bitcoin");
  openModal("checkoutModal");
}

function startPaymentTimer(minutes = 15) {
  const end = Date.now() + minutes * 60 * 1000;
  const el = document.getElementById("checkoutTimer");

  const intv = setInterval(() => {
    const now = Date.now();
    const remain = Math.max(0, end - now);
    const min = Math.floor(remain / 60000);
    const sec = Math.floor((remain % 60000) / 1000);
    el.innerText = `Осталось времени на оплату: \${min}м \${sec}с`;
    if (remain <= 0) clearInterval(intv);
  }, 1000);
}

async function fetchCryptoRate(crypto = "bitcoin") {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=\${crypto}&vs_currencies=usd`);
    const data = await res.json();
    document.getElementById("cryptoRate").innerText = `1 \${crypto.toUpperCase()} ≈ $\${data[crypto].usd}`;
  } catch (e) {
    document.getElementById("cryptoRate").innerText = "Ошибка загрузки курса";
  }
}

// === END ===
