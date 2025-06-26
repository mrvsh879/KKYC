// ДАННЫЕ ТОВАРОВ (40 товаров)
const products = [
  {
    id: 1,
    name: "Binance Pro",
    category: "crypto",
    price: 45,
    rating: 4.8,
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/binance-coin-bnb-icon.svg",
    features: ["KYC Complete", "2FA", "API Access"],
    availability: "in-stock",
    description: "Полностью верифицированный аккаунт Binance с завершенной KYC процедурой"
  },
  {
    id: 2,
    name: "Coinbase Verified",
    category: "crypto",
    price: 55,
    rating: 4.7,
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/coinbase-logo-icon.svg",
    features: ["Level 2 KYC", "Bank Linked", "High Limits"],
    availability: "in-stock",
    description: "Верифицированный аккаунт Coinbase с подключенным банковским счетом"
  },
  {
    id: 3,
    name: "Kraken Advanced",
    category: "crypto",
    price: 65,
    rating: 4.6,
    logo: "https://m.reviewabout.me/storage/product/fb262655cbd1/image/81db8b8dc79b62a478c9fdc9337f32df.png",
    features: ["Pro Trading", "KYC Tier 4", "Margin Trading"],
    availability: "limited",
    description: "Профессиональный аккаунт Kraken с максимальным уровнем верификации"
  },
  {
    id: 4,
    name: "PayPal Business",
    category: "payment",
    price: 35,
    rating: 4.5,
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paypal-icon.svg",
    features: ["Business Verified", "High Limits", "Multi-Currency"],
    availability: "in-stock",
    description: "Бизнес аккаунт PayPal с подтвержденной верификацией"
  },
  {
    id: 5,
    name: "Stripe Connect",
    category: "payment",
    price: 40,
    rating: 4.9,
    logo: "https://images.seeklogo.com/logo-png/29/1/stripe-logo-png_seeklogo-290635.png",
    features: ["API Ready", "KYC Complete", "Global Payments"],
    availability: "in-stock",
    description: "Готовый к работе аккаунт Stripe с полной верификацией"
  },
  {
    id: 6,
    name: "Revolut Premium",
    category: "payment",
    price: 50,
    rating: 4.4,
    logo: "https://1000logos.net/wp-content/uploads/2022/08/Revolut-Symbol.png",
    features: ["Premium Plan", "Multi-Currency", "Crypto Trading"],
    availability: "in-stock",
    description: "Премиум аккаунт Revolut с доступом к криптоторговле"
  },
  {
    id: 7,
    name: "Wise Business",
    category: "payment",
    price: 30,
    rating: 4.3,
    logo: "https://d21buns5ku92am.cloudfront.net/69645/images/470456-Frame-c061f4-medium-1677657684.png",
    features: ["Business Account", "Multi-Currency", "Low Fees"],
    availability: "in-stock",
    description: "Бизнес аккаунт Wise для международных переводов"
  },
  {
    id: 8,
    name: "Instagram Creator",
    category: "social",
    price: 25,
    rating: 4.2,
    logo: "https://images.seeklogo.com/logo-png/43/1/instagram-new-2022-logo-png_seeklogo-438252.png",
    features: ["Creator Account", "10K+ Followers", "Verified Badge"],
    availability: "limited",
    description: "Креативный аккаунт Instagram с верифицированным значком"
  },
  {
    id: 9,
    name: "TikTok Business",
    category: "social",
    price: 35,
    rating: 4.6,
    logo: "https://images.seeklogo.com/logo-png/37/1/tik-tok-logo-png_seeklogo-376694.png",
    features: ["Business Account", "Ad Credits", "Analytics"],
    availability: "in-stock",
    description: "Бизнес аккаунт TikTok с рекламными кредитами"
  },
  {
    id: 10,
    name: "YouTube Monetized",
    category: "social",
    price: 75,
    rating: 4.7,
    logo: "https://images.seeklogo.com/logo-png/31/1/youtube-2017-logo-png_seeklogo-316124.png",
    features: ["Monetization", "1000+ Subs", "4000+ Hours"],
    availability: "limited",
    description: "Монетизированный канал YouTube с выполненными требованиями"
  },
  {
    id: 11,
    name: "OKX Pro Trader",
    category: "crypto",
    price: 60,
    rating: 4.5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo-OKX.png",
    features: ["VIP Level 2", "API Trading", "Futures Access"],
    availability: "in-stock",
    description: "Профессиональный трейдерский аккаунт OKX с VIP статусом"
  },
  {
    id: 12,
    name: "Bybit Institutional",
    category: "crypto",
    price: 85,
    rating: 4.8,
    logo: "https://nairametrics.com/wp-content/uploads/2024/06/Bybit.png",
    features: ["Institutional", "High Leverage", "Premium Support"],
    availability: "limited",
    description: "Институциональный аккаунт Bybit с высоким кредитным плечом"
  },
  {
    id: 13,
    name: "KuCoin VIP",
    category: "crypto",
    price: 55,
    rating: 4.4,
    logo: "https://cdn.prod.website-files.com/60f008ba9757da0940af288e/614dbe395e9b7c73cd9d9fd7_kucoin.png",
    features: ["VIP 3", "Trading Bot", "Margin Trading"],
    availability: "in-stock",
    description: "VIP аккаунт KuCoin с доступом к торговым ботам"
  },
  {
    id: 14,
    name: "Huobi Global",
    category: "crypto",
    price: 50,
    rating: 4.3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Huobi-logo.png",
    features: ["Global Access", "DeFi Staking", "NFT Trading"],
    availability: "in-stock",
    description: "Глобальный аккаунт Huobi с доступом к DeFi и NFT"
  },
  {
    id: 15,
    name: "Gate.io Advanced",
    category: "crypto",
    price: 45,
    rating: 4.2,
    logo: "https://altcoinsbox.com/wp-content/uploads/2023/01/full-gate.io-logo.webp",
    features: ["Spot Trading", "Copy Trading", "Lending"],
    availability: "in-stock",
    description: "Продвинутый аккаунт Gate.io с копи-трейдингом"
  },
  {
    id: 16,
    name: "Skrill VIP",
    category: "payment",
    price: 40,
    rating: 4.1,
    logo: "https://images.seeklogo.com/logo-png/19/1/skrill-logo-png_seeklogo-193086.png",
    features: ["VIP Status", "Low Fees", "Crypto Support"],
    availability: "in-stock",
    description: "VIP аккаунт Skrill с поддержкой криптовалют"
  },
  {
    id: 17,
    name: "Neteller Premium",
    category: "payment",
    price: 35,
    rating: 4.0,
    logo: "https://images.seeklogo.com/logo-png/22/1/neteller-logo-png_seeklogo-220684.png",
    features: ["Premium Tier", "Instant Transfers", "Mobile App"],
    availability: "in-stock",
    description: "Премиум аккаунт Neteller с мгновенными переводами"
  },
  {
    id: 18,
    name: "Advcash Gold",
    category: "payment",
    price: 30,
    rating: 3.9,
    logo: "https://images.seeklogo.com/logo-png/35/1/advcash-logo-png_seeklogo-350778.png",
    features: ["Gold Status", "Debit Card", "Multi-Currency"],
    availability: "in-stock",
    description: "Золотой аккаунт Advcash с дебетовой картой"
  },
  {
    id: 19,
    name: "Perfect Money Verified",
    category: "payment",
    price: 25,
    rating: 3.8,
    logo: "https://images.seeklogo.com/logo-png/36/1/perfect-money-logo-png_seeklogo-367716.png",
    features: ["Full Verification", "USD/EUR/Gold", "API Access"],
    availability: "in-stock",
    description: "Полностью верифицированный аккаунт Perfect Money"
  },
  {
    id: 20,
    name: "WebMoney Passport",
    category: "payment",
    price: 20,
    rating: 3.7,
    logo: "https://images.seeklogo.com/logo-png/61/1/webmoney-logo-png_seeklogo-610408.png",
    features: ["Passport Verified", "WMZ/WMR/WME", "Escrow Service"],
    availability: "in-stock",
    description: "Паспортифицированный аккаунт WebMoney"
  },
  {
    id: 21,
    name: "Facebook Business Manager",
    category: "social",
    price: 45,
    rating: 4.5,
    logo: "https://images.seeklogo.com/logo-png/29/1/facebook-icon-circle-logo-png_seeklogo-290323.png",
    features: ["Business Manager", "Ad Account", "50+ Pages"],
    availability: "in-stock",
    description: "Бизнес менеджер Facebook с рекламным аккаунтом"
  },
  {
    id: 22,
    name: "LinkedIn Premium",
    category: "social",
    price: 30,
    rating: 4.3,
    logo: "https://images.seeklogo.com/logo-png/15/1/linkedin-logo-png_seeklogo-157910.png",
    features: ["Premium Account", "InMail Credits", "Sales Navigator"],
    availability: "in-stock",
    description: "Премиум аккаунт LinkedIn с доступом к Sales Navigator"
  },
  {
    id: 23,
    name: "Twitter X Verified",
    category: "social",
    price: 40,
    rating: 4.1,
    logo: "https://images.seeklogo.com/logo-png/49/1/twitter-x-logo-png_seeklogo-492396.png",
    features: ["Blue Checkmark", "Twitter Blue", "Priority Support"],
    availability: "limited",
    description: "Верифицированный аккаунт Twitter X с синей галочкой"
  },
  {
    id: 24,
    name: "Telegram Premium",
    category: "social",
    price: 15,
    rating: 4.0,
    logo: "https://images.seeklogo.com/logo-png/29/1/telegram-logo-png_seeklogo-298055.png",
    features: ["Premium Features", "Large Files", "No Ads"],
    availability: "in-stock",
    description: "Премиум аккаунт Telegram с расширенными возможностями"
  },
  {
    id: 25,
    name: "Discord Nitro",
    category: "social",
    price: 20,
    rating: 4.2,
    logo: "https://images.seeklogo.com/logo-png/27/1/discord-logo-png_seeklogo-275121.png",
    features: ["Nitro Subscription", "Custom Emojis", "HD Streaming"],
    availability: "in-stock",
    description: "Аккаунт Discord с активной подпиской Nitro"
  },
  {
    id: 26,
    name: "Bitget Copy Trading",
    category: "crypto",
    price: 70,
    rating: 4.6,
    logo: "https://images.seeklogo.com/logo-png/52/1/bitget-2024-blue-logo-png_seeklogo-526993.png",
    features: ["Copy Trading", "VIP 2", "Futures Access"],
    availability: "in-stock",
    description: "Аккаунт Bitget с доступом к копи-трейдингу"
  },
  {
    id: 27,
    name: "MEXC VIP",
    category: "crypto",
    price: 40,
    rating: 4.1,
    logo: "https://images.seeklogo.com/logo-png/46/1/mexc-global-logo-png_seeklogo-463569.png",
    features: ["VIP 1", "Low Fees", "New Listings"],
    availability: "in-stock",
    description: "VIP аккаунт MEXC с доступом к новым листингам"
  },
  {
    id: 28,
    name: "HTX Professional",
    category: "crypto",
    price: 55,
    rating: 4.3,
    logo: "https://images.seeklogo.com/logo-png/53/1/htx-logo-png_seeklogo-534277.png",
    features: ["Pro Trading", "Margin Trading", "DeFi Access"],
    availability: "in-stock",
    description: "Профессиональный аккаунт HTX с маржинальной торговлей"
  },
  {
    id: 29,
    name: "Bitfinex Verified",
    category: "crypto",
    price: 90,
    rating: 4.7,
    logo: "https://images.seeklogo.com/logo-png/32/1/bitfinex-logo-png_seeklogo-323387.png",
    features: ["Full Verification", "Lending", "Margin Trading"],
    availability: "limited",
    description: "Полностью верифицированный аккаунт Bitfinex"
  },
  {
    id: 30,
    name: "Bitstamp Pro",
    category: "crypto",
    price: 65,
    rating: 4.4,
    logo: "https://images.seeklogo.com/logo-png/34/1/bitstamp-logo-png_seeklogo-340892.png",
    features: ["EU Regulated", "Instant Deposits", "API Trading"],
    availability: "in-stock",
    description: "Регулируемый аккаунт Bitstamp для ЕС"
  },
  {
    id: 31,
    name: "Apple Developer",
    category: "social",
    price: 100,
    rating: 4.8,
    logo: "https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png",
    features: ["Developer Account", "App Store", "TestFlight"],
    availability: "limited",
    description: "Аккаунт разработчика Apple с доступом к App Store"
  },
  {
    id: 32,
    name: "Google Play Console",
    category: "social",
    price: 80,
    rating: 4.5,
    logo: "https://images.seeklogo.com/logo-png/29/1/get-it-on-google-play-badge-logo-png_seeklogo-290335.png",
    features: ["Play Console", "App Publishing", "Analytics"],
    availability: "in-stock",
    description: "Аккаунт Google Play Console для публикации приложений"
  },
  {
    id: 33,
    name: "Shopify Plus",
    category: "social",
    price: 120,
    rating: 4.6,
    logo: "https://images.seeklogo.com/logo-png/44/1/shopify-logo-png_seeklogo-445424.png",
    features: ["Shopify Plus", "Unlimited Products", "Advanced Analytics"],
    availability: "limited",
    description: "Премиум аккаунт Shopify Plus для крупного бизнеса"
  },
  {
    id: 34,
    name: "AWS Business",
    category: "social",
    price: 150,
    rating: 4.9,
    logo: "https://images.seeklogo.com/logo-png/31/1/amazon-web-services-aws-logo-png_seeklogo-319188.png",
    features: ["Business Support", "Credits Included", "Enterprise Features"],
    availability: "limited",
    description: "Бизнес аккаунт AWS с кредитами и поддержкой"
  },
  {
    id: 35,
    name: "Microsoft Azure",
    category: "social",
    price: 130,
    rating: 4.7,
    logo: "https://images.seeklogo.com/logo-png/31/1/microsoft-azure-logo-png_seeklogo-311218.png",
    features: ["Azure Credits", "Enterprise Support", "DevOps Tools"],
    availability: "in-stock",
    description: "Корпоративный аккаунт Microsoft Azure"
  },
  {
    id: 36,
    name: "DigitalOcean Team",
    category: "social",
    price: 60,
    rating: 4.2,
    logo: "https://images.seeklogo.com/logo-png/29/1/digitalocean-logo-png_seeklogo-298575.png",
    features: ["Team Account", "Credits Included", "Managed Databases"],
    availability: "in-stock",
    description: "Командный аккаунт DigitalOcean с кредитами"
  },
  {
    id: 37,
    name: "Heroku Enterprise",
    category: "social",
    price: 80,
    rating: 4.1,
    logo: "https://images.seeklogo.com/logo-png/34/1/heroku-logo-png_seeklogo-341752.png",
    features: ["Enterprise Plan", "Private Spaces", "Add-ons Included"],
    availability: "limited",
    description: "Корпоративный аккаунт Heroku с приватными пространствами"
  },
  {
    id: 38,
    name: "GitHub Enterprise",
    category: "social",
    price: 90,
    rating: 4.8,
    logo: "https://images.seeklogo.com/logo-png/48/1/github-logo-png_seeklogo-480450.png",
    features: ["Enterprise Features", "SAML SSO", "Advanced Security"],
    availability: "limited",
    description: "Корпоративный аккаунт GitHub с расширенными возможностями"
  },
  {
    id: 39,
    name: "Notion Team",
    category: "social",
    price: 40,
    rating: 4.4,
    logo: "https://images.seeklogo.com/logo-png/42/1/notion-logo-png_seeklogo-425508.png",
    features: ["Team Workspace", "Unlimited Blocks", "Version History"],
    availability: "in-stock",
    description: "Командное рабочее пространство Notion"
  },
  {
    id: 40,
    name: "Figma Professional",
    category: "social",
    price: 50,
    rating: 4.6,
    logo: "https://images.seeklogo.com/logo-png/38/1/figma-logo-png_seeklogo-385028.png",
    features: ["Professional Plan", "Unlimited Projects", "Advanced Prototyping"],
    availability: "in-stock",
    description: "Профессиональный аккаунт Figma для дизайна"
  }
];

// --- Уникальные рандомные значения количества ---
function getUniqueRandomNumbers(count, min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) numbers.push(i);
  // Перемешиваем массив
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.slice(0, count);
}

// Добавляем уникальное количество для каждого товара
const stockNumbers = getUniqueRandomNumbers(products.length, 12, 78);
products.forEach((product, idx) => {
  product.stock = stockNumbers[idx];
});

// --- Глобальные переменные для корзины, пользователя, таймера и курса ---
let currentUser = null;
let cart = [];
let favorites = [];
let filteredProducts = [...products];
let paymentRate = 1; // курс монеты к USD
let paymentSymbol = 'USDT'; // выбранная монета
let paymentTimer = null;
let paymentTimeLeft = 900; // 900 секунд = 15 минут

// --- Коэффициенты и флаги стран ---
const countryCoefficients = {
  'СНГ': 1.0,
  'Европа': 1.25,
  'Канада': 1.5
};
const countryFlags = {
  'СНГ': '🇷🇺',
  'Европа': '🇪🇺',
  'Канада': '🇨🇦'
};
const countryLabels = {
  'СНГ': 'СНГ',
  'Европа': 'Европа',
  'Канада': 'Канада'
};

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}
function getCategoryName(category) {
  const categories = {
    'crypto': 'Криптоплатформы',
    'payment': 'Платежные системы',
    'social': 'Социальные сети'
  };
  return categories[category] || category;
}
function getAvailabilityText(availability) {
  const texts = {
    'in-stock': 'В наличии',
    'limited': 'Ограничено',
    'out-of-stock': 'Нет в наличии'
  };
  return texts[availability] || availability;
}
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star star"></i>';
  if (hasHalfStar) stars += '<i class="fas fa-star-half-alt star"></i>';
  for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) stars += '<i class="far fa-star star"></i>';
  return stars;
}
function updateResultsCount() {
  const resultsCount = document.getElementById('resultsCount');
  if (resultsCount) resultsCount.textContent = `Показано: ${filteredProducts.length} из ${products.length}`;
}
function handleSearch() {
  applyFilters();
}
function applyFilters() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;
  const priceFilter = document.getElementById('priceFilter').value;
  const sortBy = document.getElementById('sortBy').value;
  filteredProducts = products.filter(product => {
    const matchesSearch = !searchTerm ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
      getCategoryName(product.category).toLowerCase().includes(searchTerm);
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    let matchesPrice = true;
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseInt(p));
      matchesPrice = product.price >= min && (max === undefined || product.price <= max);
    }
    return matchesSearch && matchesCategory && matchesPrice;
  });
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  renderProducts();
}
async function fetchPaymentRate(symbol) {
  let apiUrl = '';
  switch(symbol) {
    case 'BTC': apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'; break;
    case 'ETH': apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'; break;
    case 'USDT': apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd'; break;
    default: paymentRate = 1; return;
  }
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error('Rate limit or CORS');
    const data = await res.json();
    if(symbol === 'BTC') paymentRate = data.bitcoin.usd;
    if(symbol === 'ETH') paymentRate = data.ethereum.usd;
    if(symbol === 'USDT') paymentRate = data.tether.usd;
  } catch(e) {
    paymentRate = 1;
    showNotification('Не удалось получить курс монеты. Указана цена в USD.');
  }
}
function startPaymentTimer() {
  paymentTimeLeft = 900; // 15 минут
  updateTimerDisplay();
  if(paymentTimer) clearInterval(paymentTimer);
  paymentTimer = setInterval(() => {
    paymentTimeLeft--;
    updateTimerDisplay();
    if(paymentTimeLeft <= 0) {
      clearInterval(paymentTimer);
      document.getElementById('timerBlock').innerHTML = '<span style="color:#c00;font-weight:bold;">Время для оплаты истекло! Пожалуйста, повторите заказ.</span>';
      document.getElementById('checkoutPaymentArea').style.display = 'none';
    }
  }, 1000);
}
function updateTimerDisplay() {
  const timerBlock = document.getElementById('timerBlock');
  if (timerBlock) {
    const min = Math.floor(paymentTimeLeft / 60);
    const sec = paymentTimeLeft % 60;
    timerBlock.textContent = `Время для оплаты: ${min}:${sec < 10 ? '0'+sec : sec}`;
  }
}
function getCountryPrice(product, country) {
  const basePrice = product.originalPrice || product.price;
  let coeff = countryCoefficients[country] || 1.0;
  return +(basePrice * coeff).toFixed(2);
}
document.addEventListener('DOMContentLoaded', function() {
  const modalScrollStyle = document.createElement('style');
  modalScrollStyle.textContent = `
    #productModal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 1000;
      overflow-y: auto;
      display: none;
    }
    #productModal .product-detail {
      background: #fff;
      margin: 2rem auto;
      padding: 1rem;
      border-radius: 10px;
      max-width: 600px;
      max-height: 90vh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    .country-select-wrapper {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      background: #f3f4fa;
      padding: 0.6rem 1.2rem;
      border-radius: 2rem;
      border: 2px solid #667eea;
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: fit-content;
      box-shadow: 0 2px 10px rgba(102,126,234,0.08);
    }
    .country-select-label {
      font-weight: 600;
      color: #333;
      font-size: 1rem;
      margin-right: 0.3rem;
    }
    .country-select {
      background: transparent;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: #333;
      padding: 0.4rem 2.3rem 0.4rem 2.2rem;
      border-radius: 1.5rem;
      appearance: none;
      outline: none;
      cursor: pointer;
      position: relative;
      min-width: 115px;
      transition: background 0.2s;
    }
    .country-select:focus {
      background: #e0e7ff;
    }
    .country-flag {
      font-size: 1.5rem;
      margin-right: 0.2rem;
      margin-left: 0;
    }
    .country-select-wrapper {
      position: relative;
    }
    .country-select-wrapper::after {
      content: '\\25BC';
      position: absolute;
      right: 18px;
      top: 53%;
      transform: translateY(-50%);
      color: #667eea;
      font-size: 0.9rem;
      pointer-events: none;
    }
  `;
  document.head.appendChild(modalScrollStyle);
  loadUserData();
  renderProducts();
  setupEventListeners();
});
function loadUserData() {
  const savedUser = localStorage.getItem('kycShopUser');
  const savedCart = localStorage.getItem('kycShopCart');
  const savedFavorites = localStorage.getItem('kycShopFavorites');
  if (savedUser) currentUser = JSON.parse(savedUser);
  if (savedCart) { cart = JSON.parse(savedCart); updateCartBadge(); }
  if (savedFavorites) favorites = JSON.parse(savedFavorites);
}
function saveUserData() {
  if (currentUser) localStorage.setItem('kycShopUser', JSON.stringify(currentUser));
  localStorage.setItem('kycShopCart', JSON.stringify(cart));
  localStorage.setItem('kycShopFavorites', JSON.stringify(favorites));
}
function setupEventListeners() {
  document.getElementById('searchInput').addEventListener('input', handleSearch);
  document.getElementById('categoryFilter').addEventListener('change', applyFilters);
  document.getElementById('priceFilter').addEventListener('change', applyFilters);
  document.getElementById('sortBy').addEventListener('change', applyFilters);
  document.getElementById('cartBtn').addEventListener('click', toggleCart);
  document.getElementById('profileBtn').addEventListener('click', () => openModal('profileModal'));
  document.getElementById('favoritesBtn').addEventListener('click', () => openModal('favoritesModal'));
  document.getElementById('contactBtn').addEventListener('click', () => openModal('contactModal'));
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) event.target.style.display = 'none';
  });
}
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>Товары не найдены</h3>
        <p>Попробуйте изменить критерии поиска или фильтры</p>
      </div>
    `;
    return;
  }
  productGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card" onclick="openProductDetail(${product.id})">
      <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
        <i class="fas fa-heart"></i>
      </button>
      <div class="availability ${product.availability}">
        ${getAvailabilityText(product.availability)}
      </div>
      <div class="product-top">
        <div class="logo-wrapper">
          <img src="${product.logo}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%23667eea\\'%3E%3Cpath d=[...]'/>
        </div>
      </div>
      <div class="product-info">
        <div class="product-rating">
          ${generateStars(product.rating)}
          <span class="rating-text">${product.rating}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-category">${getCategoryName(product.category)}</p>
        <div class="product-features">
          ${product.features.map(feature => `<span class="feature-badge">${feature}</span>`).join('')}
        </div>
        <div class="product-description">${product.description}</div>
        <div class="product-bonus" style="margin: 0.7em 0; color: #267b2b; font-weight: 500;">
          <i class="fas fa-envelope"></i> <b>При оплате товара вы получите сканы, логи и прокси на ваш email!</b>
        </div>
      </div>
      <div class="product-bottom">
        <div class="product-price">$${product.price}</div>
        <div class="product-stock" style="color:#267b2b;">В наличии: <b>${product.stock}</b> шт.</div>
        <button class="product-button" onclick="event.stopPropagation(); addToCart(${product.id}, 'СНГ')">
          <i class="fas fa-cart-plus"></i> В корзину
        </button>
      </div>
    </div>
  `).join('');
  updateResultsCount();
}

function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  let selectedCountry = product.selectedCountry || 'СНГ';
  if (!product.originalPrice) product.originalPrice = product.price;
  const productDetail = document.getElementById('productDetail');
  productDetail.innerHTML = `
    <div class="product-detail">
      <div class="product-detail-image">
        <img src="${product.logo}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <div class="product-rating">
          ${generateStars(product.rating)}
          <span class="rating-text">${product.rating}</span>
        </div>
        <div class="product-stock" style="margin-bottom:1em;color:#267b2b;">В наличии: <b>${product.stock}</b> шт.</div>
        <div class="country-select-wrapper">
          <span class="country-select-label">Страна верификации:</span>
          <span class="country-flag" id="countryFlag">${countryFlags[selectedCountry]}</span>
          <select id="countrySelect" class="country-select">
            <option value="СНГ" ${selectedCountry === 'СНГ' ? 'selected' : ''}>СНГ</option>
            <option value="Европа" ${selectedCountry === 'Европа' ? 'selected' : ''}>Европа</option>
            <option value="Канада" ${selectedCountry === 'Канада' ? 'selected' : ''}>Канада</option>
          </select>
        </div>
        <div class="product-detail-price" id="detailPrice">$${getCountryPrice(product, selectedCountry)}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-bonus" style="margin: 1em 0; color: #267b2b; font-weight: 500;">
          <i class="fas fa-envelope"></i> <b>При оплате товара вы получите сканы, логи и прокси на ваш email!</b>
        </div>
        <div class="product-features">
          ${product.features.map(feature => `<span class="feature-badge">${feature}</span>`).join('')}
        </div>
        <div style="margin-top: 2rem;">
          <button class="product-button" onclick="addToCart(${product.id}, document.getElementById('countrySelect').value); closeModal('productModal');" style="margin-right: 1rem;">
            <i class="fas fa-cart-plus"></i> Добавить в корзину
          </button>
          <button class="product-button" onclick="toggleFavorite(${product.id})" style="background: #ff4757;">
            <i class="fas fa-heart"></i> ${favorites.includes(product.id) ? 'Удалить из избранного' : 'В избранное'}
          </button>
        </div>
      </div>
    </div>
    <div class="crypto-payment">
      <h3>Способы оплаты</h3>
      <div class="crypto-options">
        <div class="crypto-option" onclick="selectPayment('bitcoin', this)">
          <i class="fab fa-bitcoin" style="font-size: 2rem; color: #f7931a;"></i>
          <div>Bitcoin</div>
        </div>
        <div class="crypto-option" onclick="selectPayment('ethereum', this)">
          <i class="fab fa-ethereum" style="font-size: 2rem; color: #627eea;"></i>
          <div>Ethereum</div>
        </div>
        <div class="crypto-option" onclick="selectPayment('usdt', this)">
          <div style="font-size: 2rem; color: #26a17b;">₮</div>
          <div>USDT</div>
        </div>
        <div class="crypto-option" onclick="selectPayment('paypal', this)">
          <i class="fab fa-paypal" style="font-size: 2rem; color: #003087;"></i>
          <div>PayPal</div>
        </div>
      </div>
      <div id="paymentAddress" class="payment-address" style="display: none;"></div>
    </div>
  `;
  openModal('productModal');
  const select = document.getElementById('countrySelect');
  select.addEventListener('change', function() {
    document.getElementById('detailPrice').textContent = '$' + getCountryPrice(product, select.value);
    document.getElementById('countryFlag').textContent = countryFlags[select.value];
  });
}
function selectPayment(method, elem) {
  const addresses = {
    bitcoin: 'bc1qnltnxqdetv6lax9g8njzye5yt4a6prkqgfk44q',
    ethereum: '0x6dF5FC126223326B081fA14710157517898C7234',
    usdt: 'TFsnebhTqCohGq34dWisnotcivikrJCn2G',
    paypal: 'payments@kycshop.com'
  };
  const paymentAddress = document.getElementById('paymentAddress');
  const options = document.querySelectorAll('.crypto-option');
  options.forEach(option => option.classList.remove('selected'));
  if (elem) elem.classList.add('selected');
  paymentAddress.style.display = 'block';
  paymentAddress.innerHTML = `
    <strong>Адрес для оплаты:</strong><br>
    ${addresses[method]}
    <button onclick="copyToClipboard('${addresses[method]}')" style="margin-left: 10px; padding: 5px 10px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
      <i class="fas fa-copy"></i> Копировать
    </button>
  `;
}
function addToCart(productId, country = 'СНГ') {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  if (!product.originalPrice) product.originalPrice = product.price;
  const price = getCountryPrice(product, country);
  const existingItem = cart.find(item => item.id === productId && item.country === country);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: price,
      logo: product.logo,
      country: country,
      quantity: 1
    });
  }
  updateCartBadge();
  updateCartSidebar();
  saveUserData();
  showNotification(`${product.name} (${country}) добавлен в корзину!`);
}
function updateCartSidebar() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  if (!cartItems || !cartTotal) return;
  if (cart.length === 0) {
    cartItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Корзина пуста</div>';
    cartTotal.textContent = '0.00';
    return;
  }
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.logo}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div style="font-size: 0.9em; color: #888; margin-bottom: 0.2em;">
          <span class="country-flag">${countryFlags[item.country]}</span> ${countryLabels[item.country]}
        </div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.country}', ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.country}', ${item.quantity + 1})">+</button>
          <button class="quantity-btn" onclick="removeFromCart(${item.id}, '${item.country}')" style="background: #ff4757; color: white; margin-left: 10px;">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = total.toFixed(2);
}
function updateQuantity(productId, country, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId, country);
    return;
  }
  const item = cart.find(item => item.id === productId && item.country === country);
  if (item) {
    item.quantity = newQuantity;
    updateCartBadge();
    updateCartSidebar();
    saveUserData();
  }
}
function removeFromCart(productId, country) {
  cart = cart.filter(item => !(item.id === productId && item.country === country));
  updateCartBadge();
  updateCartSidebar();
  saveUserData();
}
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }
  saveUserData();
  renderProducts();
  updateFavoritesList();
}
function updateFavoritesList() {
  const favoritesList = document.getElementById('favoritesList');
  if (!favoritesList) return;
  if (favorites.length === 0) {
    favoritesList.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Нет избранных товаров</div>';
    return;
  }
  const favoriteProducts = products.filter(product => favorites.includes(product.id));
  favoritesList.innerHTML = favoriteProducts.map(product => `
    <div class="favorite-item">
      <img src="${product.logo}" alt="${product.name}">
      <div class="favorite-item-info">
        <div class="favorite-item-name">${product.name}</div>
        <div class="favorite-item-price">$${product.price}</div>
      </div>
      <button class="remove-favorite" onclick="toggleFavorite(${product.id})">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join('');
}
function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  if (!cartSidebar || !cartOverlay) return;
  cartSidebar.classList.toggle('open');
  cartOverlay.classList.toggle('show');
  if (cartSidebar.classList.contains('open')) {
    updateCartSidebar();
    if (!document.getElementById('closeCartBtn')) {
      const closeButton = document.createElement('button');
      closeButton.innerHTML = '&times;';
      closeButton.id = 'closeCartBtn';
      closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        background: none;
        border: none;
        color: #333;
        cursor: pointer;
        z-index: 10;
      `;
      closeButton.addEventListener('click', closeCart);
      cartSidebar.appendChild(closeButton);
    }
  }
}
function closeCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  if (!cartSidebar || !cartOverlay) return;
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('show');
}
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'block';
  if (modalId === 'favoritesModal') {
    updateFavoritesList();
  } else if (modalId === 'profileModal') {
    updateProfileContent();
  }
}
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'none';
}
function updateProfileContent() {
  const profileContent = document.getElementById('profileContent');
  if (!profileContent) return;
  if (currentUser) {
    profileContent.innerHTML = `
      <div class="user-info">
        <div class="user-avatar">
          ${currentUser.name.charAt(0).toUpperCase()}
        </div>
        <h3>${currentUser.name}</h3>
        <p>${currentUser.email}</p>
        <button class="auth-btn login-btn" onclick="logout()" style="width: 100%; margin-top: 1rem;">
          Выйти
        </button>
      </div>
    `;
  } else {
    profileContent.innerHTML = `
      <div class="auth-form">
        <h2>Вход в аккаунт</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Введите ваш email">
        </div>
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input type="password" id="password" placeholder="Введите пароль">
        </div>
        <div class="auth-buttons">
          <button class="auth-btn login-btn" onclick="login()">Войти</button>
          <button class="auth-btn register-btn" onclick="register()">Регистрация</button>
        </div>
      </div>
    `;
  }
}
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!email || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  currentUser = {
    name: email.split('@')[0],
    email: email
  };
  saveUserData();
  closeModal('profileModal');
  showNotification('Вы успешно вошли в систему!');
}
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!email || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  currentUser = {
    name: email.split('@')[0],
    email: email
  };
  saveUserData();
  closeModal('profileModal');
  showNotification('Регистрация прошла успешно!');
}
function logout() {
  currentUser = null;
  localStorage.removeItem('kycShopUser');
  closeModal('profileModal');
  showNotification('Вы вышли из системы');
}
function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  if (!name || !email || !subject || !message) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  showNotification('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactSubject').value = '';
  document.getElementById('contactMessage').value = '';
  closeModal('contactModal');
}
async function selectCheckoutPayment(method, elem) {
  paymentSymbol = method === 'bitcoin' ? 'BTC' : method === 'ethereum' ? 'ETH' : method === 'usdt' ? 'USDT' : 'USD';
  await fetchPaymentRate(paymentSymbol);
  const addresses = {
    bitcoin: 'bc1qnltnxqdetv6lax9g8njzye5yt4a6prkqgfk44q',
    ethereum: '0x6dF5FC126223326B081fA14710157517898C7234',
    usdt: 'TFsnebhTqCohGq34dWisnotcivikrJCn2G',
    paypal: 'payments@kycshop.com'
  };
  const paymentAddress = document.getElementById('checkoutPaymentAddress');
  const options = document.querySelectorAll('#checkoutModal .crypto-option');
  options.forEach(option => option.classList.remove('selected'));
  if (elem) elem.classList.add('selected');
  const totalUSD = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let totalCrypto = totalUSD / paymentRate;
  let symbol = paymentSymbol === 'USD' ? '$' : paymentSymbol;
  let formattedTotal = paymentSymbol === 'USD'
    ? '$' + totalUSD.toFixed(2)
    : totalCrypto.toFixed(6) + ' ' + symbol + ` <span style="color:#888;font-size:0.9em;">(~$${totalUSD.toFixed(2)})</span>`;
  paymentAddress.style.display = 'block';
  paymentAddress.innerHTML = `
    <strong>Адрес для оплаты:</strong><br>
    ${addresses[method]}
    <button onclick="copyToClipboard('${addresses[method]}')" style="margin-left: 10px; padding: 5px 10px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
      <i class="fas fa-copy"></i> Копировать
    </button>
    <div style="margin-top:1em; font-size:1.15em;">
      <strong>Сумма к оплате:</strong><br>
      <span style="font-size:1.5em;color:#383;">${formattedTotal}</span>
    </div>
  `;
}
function openCheckout() {
  if (cart.length === 0) {
    alert('Корзина пуста');
    return;
  }
  const checkoutContent = document.getElementById('checkoutContent');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  checkoutContent.innerHTML = `
    <div class="checkout-summary">
      <h3>Ваш заказ</h3>
      ${cart.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span><span class="country-flag">${countryFlags[item.country]}</span> ${item.name} (${countryLabels[item.country]}) x${item.quantity}</span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      `).join('')}
      <hr>
      <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;">
        <span>Итого:</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    </div>
    <div id="timerBlock" style="font-weight:bold;font-size:1.2em;margin:1em 0;color:#222;text-align:center"></div>
    <div class="crypto-payment" id="checkoutPaymentArea">
      <h3>Выберите способ оплаты</h3>
      <div class="crypto-options">
        <div class="crypto-option" onclick="selectCheckoutPayment('bitcoin', this)">
          <i class="fab fa-bitcoin" style="font-size: 2rem; color: #f7931a;"></i>
          <div>Bitcoin</div>
        </div>
        <div class="crypto-option" onclick="selectCheckoutPayment('ethereum', this)">
          <i class="fab fa-ethereum" style="font-size: 2rem; color: #627eea;"></i>
          <div>Ethereum</div>
        </div>
        <div class="crypto-option" onclick="selectCheckoutPayment('usdt', this)">
          <div style="font-size: 2rem; color: #26a17b;">₮</div>
          <div>USDT</div>
        </div>
        <div class="crypto-option" onclick="selectCheckoutPayment('paypal', this)">
          <i class="fab fa-paypal" style="font-size: 2rem; color: #003087;"></i>
          <div>PayPal</div>
        </div>
      </div>
      <div id="checkoutPaymentAddress" class="payment-address" style="display: none;"></div>
    </div>
    <div class="form-group" style="margin-top: 2rem;">
      <label for="buyerEmail">Ваш email для получения товаров:</label>
      <input type="email" id="buyerEmail" placeholder="example@email.com" ${currentUser ? `value="${currentUser.email}"` : ''}>
    </div>
    <button class="checkout-btn" onclick="completeOrder()" style="margin-top: 1rem;">
      Подтвердить заказ
    </button>
  `;
  closeCart();
  openModal('checkoutModal');
  startPaymentTimer();
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Адрес скопирован в буфер обмена!');
  });
}
function completeOrder() {
  const email = document.getElementById('buyerEmail').value;
  const selectedPayment = document.querySelector('#checkoutModal .crypto-option.selected');
  if (!email) {
    alert('Пожалуйста, введите ваш email');
    return;
  }
  if (!selectedPayment) {
    alert('Пожалуйста, выберите способ оплаты');
    return;
  }
  showNotification('Заказ оформлен!После зачисления средств заказ будет отправлен на email.');
  cart = [];
  updateCartBadge();
  updateCartSidebar();
  saveUserData();
  closeModal('checkoutModal');
}
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    z-index: 3000;
    animation: slideIn 0.3s ease;
    max-width: 300px;
  `;
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    </div>
  `;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}
