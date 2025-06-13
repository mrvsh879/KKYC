// Данные товаров (40 товаров)
const products = [
  {
    id: 1,
    name: "Binance Pro",
    category: "crypto",
    price: 45,
    rating: 4.8,
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F0B90B'%3E%3Cpath d='M12 2l3.09 3.09L22 8l-3.09 3.09L22 14l-6.91 6.91L12 24l-3.09-3.09L2 16l3.09-3.09L2 10l6.91-6.91L12 2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231652F0'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3Cpath fill='white' d='M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23663399'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5l-3-3-3 3-1.5-1.5 3-3-3-3L10.5 7.5l3 3 3-3L18 9l-3 3 3 3-1.5 1.5z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23003087'%3E%3Cpath d='M7.076 21.337H2.47a.64.64 0 0 1-.633-.74L4.944 2.053C5.036 1.369 5.629 1 6.341 1h7.365c3.075 0 5.051 1.438 5.554 4.037.218 1.122.122 2.326-.467 3.562-.589 1.234-1.66 2.219-3.659 2.219h-1.687L12.958 21.337H8.353a.64.64 0 0 1-.633-.74z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23635BFF'%3E%3Cpath d='M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z'/%3E%3Cpath d='M8 8h4c1.1 0 2 .9 2 2s-.9 2-2 2h-2v4h-2V8zm2 2v2h2V10h-2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300B9FF'%3E%3Cpath d='M12 2l3.09 3.09L22 8l-3.09 3.09L22 14l-6.91 6.91L12 22l-3.09-3.09L2 16l3.09-3.09L2 10l6.91-6.91L12 2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E4405F'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000'%3E%3Cpath d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F7931A'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-1 4v2h2V7h-2zm0 3v7h2v-7h-2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300D4AA'%3E%3Cpath d='M12 2l3.09 3.09L22 8l-3.09 3.09L22 14l-6.91 6.91L12 22l-3.09-3.09L2 16l3.09-3.09L2 10l6.91-6.91L12 2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232EAAE0'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 8h-3l-3 4-3-4H6l6 8 6-8z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748B'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/%3E%3Cpath d='M16 12l-4-4v3H8v2h4v3z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23862165'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300AC41'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3Cpath d='M7 12l3 3 6-6-1.5-1.5L10 12l-1.5-1.5z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFD700'%3E%3Cpath d='M12 2l3.09 3.09L22 8l-3.09 3.09L22 14l-6.91 6.91L12 22l-3.09-3.09L2 16l3.09-3.09L2 10l6.91-6.91L12 2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF6600'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300AAFF'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l1.09 3.26L16 9l-2.91 1.09L12 13l-1.09-2.91L8 9l2.91-1.09L12 5z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234267B2'%3E%3Cpath d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230077B5'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E",
    features: ["Premium Account", "InMail Credits", "Sales Navigator"],
    availability: "in-stock",
    description: "Премиум аккаунт LinkedIn с доступом к Sales Navigator"
  },
  {
    id: 23,
    name: "Twitter Blue Verified",
    category: "social",
    price: 40,
    rating: 4.1,
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231DA1F2'%3E%3Cpath d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/%3E%3C/svg%3E",
    features: ["Blue Checkmark", "Twitter Blue", "Priority Support"],
    availability: "limited",
    description: "Верифицированный аккаунт Twitter с синей галочкой"
  },
  {
    id: 24,
    name: "Telegram Premium",
    category: "social",
    price: 15,
    rating: 4.0,
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2326A5E4'%3E%3Cpath d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237289DA'%3E%3Cpath d='M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.4-2.172-1.27-2.172-1.27s.135.068.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.81-2.172 1.196.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.34.002-.74.573-1.338 1.27-1.335zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.34 0-.74.57-1.335 1.27-1.335z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300D4FF'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300E676'%3E%3Cpath d='M12 2l3.09 3.09L22 8l-3.09 3.09L22 14l-6.91 6.91L12 22l-3.09-3.09L2 16l3.09-3.09L2 10l6.91-6.91L12 2z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF6B35'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/%3E%3Cpath d='M8 8h8v2H8zm0 3h8v2H8zm0 3h5v2H8z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23699F00'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 8l-6 6-6-6 1.5-1.5L12 11l4.5-4.5L18 8z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231976D2'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.33-2.33-.76-.89-2.48-.96-2.83 0-.3.69.7 1.91 1.26 2.15z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234285F4'%3E%3Cpath d='M1.5 5.25l9.75 9.75L1.5 18.75c-.83 0-1.5-.67-1.5-1.5V6.75c0-.83.67-1.5 1.5-1.5zm10.95 9.9l-2.83-2.83 2.83-2.83 6.8 2.93c.83.36 1.37 1.18 1.37 2.1s-.54 1.74-1.37 2.1l-6.8 2.53zM3.35 3.35l8.4 8.4-8.4 8.4c-.47-.47-.47-1.24 0-1.71L11.2 12 3.35 5.06c-.47-.47-.47-1.24 0-1.71z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2396BF48'%3E%3Cpath d='M15.337 2.607c-.141 0-.282.01-.423.034l-.199-.01c-.847-.042-1.554.6-1.554 1.412 0 .046.005.093.011.138-.011.046-.017.093-.017.141 0 .235.057.457.158.65l-.01.188c-.042.847.6 1.554 1.412 1.554.046 0 .093-.005.138-.011.046.011.093.017.141.017.235 0 .457-.057.65-.158l.188.01c.847.042 1.554-.6 1.554-1.412 0-.046-.005-.093-.011-.138.011-.046.017-.093.017-.141 0-.235-.057-.457-.158-.65l.01-.188c.042-.847-.6-1.554-1.412-1.554-.046 0-.093.005-.138.011-.046-.011-.093-.017-.141-.017-.235 0-.457.057-.65.158l-.188-.01c-.141-.042-.282-.047-.423-.047z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF9900'%3E%3Cpath d='M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.048.08.064.16.064.24 0 .096-.064.192-.176.29l-.592.384c-.08.056-.16.08-.24.08-.096 0-.192-.048-.29-.144-.112-.112-.208-.24-.29-.384-.08-.144-.176-.304-.29-.48-.736.864-1.67 1.296-2.8 1.296-1.088 0-1.952-.304-2.592-.912-.64-.608-.96-1.424-.96-2.448 0-1.088.384-1.968 1.152-2.64.768-.672 1.792-1.008 3.072-1.008.416 0 .848.032 1.296.096.448.064.912.144 1.392.256v-.832c0-.864-.176-1.472-.528-1.824-.352-.352-.944-.528-1.776-.528-.384 0-.784.048-1.2.128-.416.08-.816.192-1.2.32-.176.08-.304.112-.384.112-.096 0-.144-.08-.144-.224v-.352c0-.112.016-.192.048-.256.032-.064.096-.128.192-.176.384-.192.848-.352 1.392-.48.544-.128 1.12-.192 1.728-.192 1.328 0 2.304.304 2.928.912.624.608.936 1.536.936 2.784v3.68zm-3.84 1.408c.384 0 .784-.08 1.2-.224.416-.144.784-.416 1.104-.8.192-.24.336-.504.416-.8.08-.296.128-.648.128-1.056v-.512c-.336-.096-.688-.176-1.056-.224-.368-.048-.72-.08-1.056-.08-.752 0-1.312.144-1.68.432-.368.288-.552.704-.552 1.248 0 .512.128.896.384 1.152.256.256.624.384 1.112.384zm6.24.896c-.128 0-.224-.032-.288-.096-.064-.064-.128-.192-.192-.368l-2.176-7.136c-.064-.192-.096-.32-.096-.384 0-.16.08-.24.24-.24h.992c.128 0 .224.032.288.096.064.064.112.192.176.368l1.552 6.112 1.44-6.112c.048-.192.096-.304.176-.368.064-.064.176-.096.288-.096h.8c.128 0 .224.032.288.096.064.064.128.192.176.368l1.456 6.176 1.6-6.176c.064-.192.128-.304.176-.368.064-.064.176-.096.288-.096h.944c.16 0 .24.08.24.24 0 .048-.016.096-.032.16-.016.064-.048.144-.096.256l-2.24 7.136c-.064.192-.128.304-.192.368-.064.064-.176.096-.288.096h-.864c-.128 0-.224-.032-.288-.096-.064-.064-.128-.192-.176-.368L13.696 7.84l-1.424 5.728c-.048.192-.112.304-.176.368-.064.064-.176.096-.288.096h-.864zm10.064.384c-.448 0-.896-.048-1.344-.144-.448-.096-.8-.208-1.056-.336-.144-.08-.24-.176-.288-.256-.048-.08-.08-.16-.08-.24v-.384c0-.144.048-.224.144-.224.048 0 .096.016.144.032.048.016.128.048.208.08.304.128.624.224.96.288.336.064.672.096 1.008.096.544 0 .96-.096 1.248-.288.288-.192.432-.464.432-.816 0-.24-.08-.448-.224-.624-.144-.176-.416-.336-.8-.48l-1.152-.352c-.576-.176-1.008-.432-1.296-.768-.288-.336-.432-.704-.432-1.104 0-.32.08-.608.224-.864.144-.256.336-.464.576-.64.24-.176.528-.304.864-.384.336-.08.688-.128 1.056-.128.192 0 .384.016.576.032.192.016.368.048.544.08.176.032.336.08.48.128.144.048.256.096.336.144.128.08.208.16.256.24.048.08.08.176.08.288v.352c0 .144-.048.224-.144.224-.064 0-.176-.032-.336-.096-.48-.224-1.024-.336-1.632-.336-.496 0-.88.08-1.152.24-.272.16-.416.416-.416.768 0 .24.096.448.272.624.176.176.48.352.912.528l1.12.352c.576.176.992.416 1.248.72.256.304.384.656.384 1.056 0 .32-.08.624-.224.896-.144.272-.336.496-.576.688-.24.192-.528.336-.864.432-.336.096-.704.144-1.104.144z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230078D4'%3E%3Cpath d='M5.83 2.1l6.54 10.9L7.84 21.9H2.1zM21.9 21.9H7.84l4.53-8.9 9.53-10.9z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230080FF'%3E%3Cpath d='M12 2L6 8h3v8h6v-3h8l-6-6V2h-5z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23430098'%3E%3Cpath d='M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.96.96-.96h17.22c.539 0 .96.42.96.96v19.681z'/%3E%3Cpath d='M6.63 20.93l2.88-2.88c-.78-.78-.78-2.04 0-2.82.78-.78 2.04-.78 2.82 0 .78.78.78 2.04 0 2.82l2.88 2.88 1.41-1.41-2.88-2.88c1.56-1.56 1.56-4.11 0-5.67-1.56-1.56-4.11-1.56-5.67 0-1.56 1.56-1.56 4.11 0 5.67l-2.88 2.88 1.41 1.41z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23181717'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.42.296-.61 1.073-1.614 1.073-2.738 0-.879-.329-1.54-.877-1.979-.097-.061-.105-.194-.017-.283.568-.576 1.034-1.492 1.034-2.516 0-.989-.462-1.928-1.034-2.516-.088-.089-.08-.222.017-.283.548-.439.877-1.1.877-1.979 0-1.124-.631-2.142-1.073-2.738-.296-.398-.61-.879-.877-1.614-.089-.246-.017-.522.194-.671.548-.387 1.073-1.1 1.073-1.979 0-.879-.525-1.592-1.073-1.979-.211-.149-.283-.425-.194-.671.267-.735.581-1.216.877-1.614.442-.596 1.073-1.614 1.073-2.738 0-.879-.329-1.54-.877-1.979-.097-.061-.105-.194-.017-.283.568-.576 1.034-1.492 1.034-2.516 0-.989-.462-1.928-1.034-2.516-.088-.089-.08-.222.017-.283.548-.439.877-1.1.877-1.979z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z'/%3E%3C/svg%3E",
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
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F24E1E'%3E%3Cpath d='M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148z'/%3E%3C/svg%3E",
    features: ["Professional Plan", "Unlimited Projects", "Advanced Prototyping"],
    availability: "in-stock",
    description: "Профессиональный аккаунт Figma для дизайна"
  }
];

// Состояние приложения
let currentUser = null;
let cart = [];
let favorites = [];
let filteredProducts = [...products];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  loadUserData();
  renderProducts();
  setupEventListeners();
});

// Загрузка данных пользователя из localStorage
function loadUserData() {
  const savedUser = localStorage.getItem('kycShopUser');
  const savedCart = localStorage.getItem('kycShopCart');
  const savedFavorites = localStorage.getItem('kycShopFavorites');
  
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
  
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartBadge();
  }
  
  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  }
}

// Сохранение данных пользователя в localStorage
function saveUserData() {
  if (currentUser) {
    localStorage.setItem('kycShopUser', JSON.stringify(currentUser));
  }
  localStorage.setItem('kycShopCart', JSON.stringify(cart));
  localStorage.setItem('kycShopFavorites', JSON.stringify(favorites));
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Поиск
  document.getElementById('searchInput').addEventListener('input', handleSearch);
  
  // Фильтры
  document.getElementById('categoryFilter').addEventListener('change', applyFilters);
  document.getElementById('priceFilter').addEventListener('change', applyFilters);
  document.getElementById('sortBy').addEventListener('change', applyFilters);
  
  // Кнопки в заголовке
  document.getElementById('cartBtn').addEventListener('click', toggleCart);
  document.getElementById('profileBtn').addEventListener('click', () => openModal('profileModal'));
  document.getElementById('favoritesBtn').addEventListener('click', () => openModal('favoritesModal'));
  document.getElementById('contactBtn').addEventListener('click', () => openModal('contactModal'));
  
  // Закрытие корзины
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  
  // Модальные окна
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });
}

// Рендеринг товаров
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
          <img src="${product.logo}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%23667eea\\'%3E%3Cpath d=\\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\\'/%3E%3C/svg%3E'">
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
      </div>
      
      <div class="product-bottom">
        <div class="product-price">$${product.price}</div>
        <button class="product-button" onclick="event.stopPropagation(); addToCart(${product.id})">
          <i class="fas fa-cart-plus"></i> В корзину
        </button>
      </div>
    </div>
  `).join('');
  
  updateResultsCount();
}

// Генерация звезд рейтинга
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star star"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt star"></i>';
  }
  
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star star"></i>';
  }
  
  return stars;
}

// Получение названия категории
function getCategoryName(category) {
  const categories = {
    'crypto': 'Криптоплатформы',
    'payment': 'Платежные системы',
    'social': 'Социальные сети'
  };
  return categories[category] || category;
}

// Получение текста доступности
function getAvailabilityText(availability) {
  const texts = {
    'in-stock': 'В наличии',
    'limited': 'Ограничено',
    'out-of-stock': 'Нет в наличии'
  };
  return texts[availability] || availability;
}

// Обработка поиска
function handleSearch() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  applyFilters();
}

// Применение фильтров
function applyFilters() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;
  const priceFilter = document.getElementById('priceFilter').value;
  const sortBy = document.getElementById('sortBy').value;
  
  filteredProducts = products.filter(product => {
    // Поиск
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm) ||
      product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
      getCategoryName(product.category).toLowerCase().includes(searchTerm);
    
    // Категория
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    // Цена
    let matchesPrice = true;
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseInt(p));
      matchesPrice = product.price >= min && (max === undefined || product.price <= max);
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  // Сортировка
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

// Обновление счетчика результатов
function updateResultsCount() {
  const resultsCount = document.getElementById('resultsCount');
  resultsCount.textContent = `Показано: ${filteredProducts.length} из ${products.length}`;
}

// Открытие детального просмотра товара
function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const productDetail = document.getElementById('productDetail');
  productDetail.innerHTML = `
    <div class="product-detail">
      <div class="product-detail-image">
        <img src="${product.logo}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%23667eea\\'%3E%3Cpath d=\\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\\'/%3E%3C/svg%3E'">
      </div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <div class="product-rating">
          ${generateStars(product.rating)}
          <span class="rating-text">${product.rating}</span>
        </div>
        <div class="product-detail-price">$${product.price}</div>
        <div class="product-description">
          ${product.description}
        </div>
        <div class="product-features">
          ${product.features.map(feature => `<span class="feature-badge">${feature}</span>`).join('')}
        </div>
        <div style="margin-top: 2rem;">
          <button class="product-button" onclick="addToCart(${product.id}); closeModal('productModal');" style="margin-right: 1rem;">
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
        <div class="crypto-option" onclick="selectPayment('bitcoin')">
          <i class="fab fa-bitcoin" style="font-size: 2rem; color: #f7931a;"></i>
          <div>Bitcoin</div>
        </div>
        <div class="crypto-option" onclick="selectPayment('ethereum')">
          <i class="fab fa-ethereum" style="font-size: 2rem; color: #627eea;"></i>
          <div>Ethereum</div>
        </div>
        <div class="crypto-option" onclick="selectPayment('usdt')">
          <div style="font-size: 2rem; color: #26a17b;">₮</div>
          <div>USDT</div>
        </div>
        <div class="crypto-option" onclick="selectPayment('paypal')">
          <i class="fab fa-paypal" style="font-size: 2rem; color: #003087;"></i>
          <div>PayPal</div>
        </div>
      </div>
      <div id="paymentAddress" class="payment-address" style="display: none;"></div>
    </div>
  `;
  
  openModal('productModal');
}

// Выбор способа оплаты
function selectPayment(method) {
  // Обновленные адреса для оплаты
  const addresses = {
  bitcoin: 'bc1qnltnxqdetv6lax9g8njzye5yt4a6prkqgfk44q',
  ethereum: '0x6dF5FC126223326B081fA14710157517898C7234',
  usdt: 'TFsnebhTqCohGq34dWisnotcivikrJCn2G',
  paypal: 'payments@kycshop.com'
};
  
  const paymentAddress = document.getElementById('paymentAddress');
  const options = document.querySelectorAll('.crypto-option');
  
  // Убираем выделение с других опций
  options.forEach(option => option.classList.remove('selected'));
  
  // Выделяем выбранную опцию
  event.currentTarget.classList.add('selected');
  
  // Показываем адрес
  paymentAddress.style.display = 'block';
  paymentAddress.innerHTML = `
    <strong>Адрес для оплаты:</strong><br>
    ${addresses[method]}
    <button onclick="copyToClipboard('${addresses[method]}')" style="margin-left: 10px; padding: 5px 10px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
      <i class="fas fa-copy"></i> Копировать
    </button>
  `;
}

// Копирование в буфер обмена
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Адрес скопирован в буфер обмена!');
  });
}

// Добавление в корзину
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      logo: product.logo,
      quantity: 1
    });
  }
  
  updateCartBadge();
  updateCartSidebar();
  saveUserData();
  
  // Показываем уведомление
  showNotification(`${product.name} добавлен в корзину!`);
}

// Обновление значка корзины
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Обновление боковой панели корзины
function updateCartSidebar() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Корзина пуста</div>';
    cartTotal.textContent = '0.00';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.logo}" alt="${item.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%23667eea\\'%3E%3Cpath d=\\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\\'/%3E%3C/svg%3E'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
          <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #ff4757; color: white; margin-left: 10px;">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = total.toFixed(2);
}

// Обновление количества товара
function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    updateCartBadge();
    updateCartSidebar();
    saveUserData();
  }
}

// Удаление из корзины
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartBadge();
  updateCartSidebar();
  saveUserData();
}

// Переключение избранного
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

// Обновление списка избранного
function updateFavoritesList() {
  const favoritesList = document.getElementById('favoritesList');
  
  if (favorites.length === 0) {
    favoritesList.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Нет избранных товаров</div>';
    return;
  }
  
  const favoriteProducts = products.filter(product => favorites.includes(product.id));
  
  favoritesList.innerHTML = favoriteProducts.map(product => `
    <div class="favorite-item">
      <img src="${product.logo}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%23667eea\\'%3E%3Cpath d=\\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\\'/%3E%3C/svg%3E'">
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

// Переключение корзины
function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  
  cartSidebar.classList.toggle('open');
  cartOverlay.classList.toggle('show');
  
  if (cartSidebar.classList.contains('open')) {
    updateCartSidebar();
  }
}

// Закрытие корзины
function closeCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('show');
}

// Открытие модального окна
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  
  // Обновляем содержимое в зависимости от модального окна
  if (modalId === 'favoritesModal') {
    updateFavoritesList();
  } else if (modalId === 'profileModal') {
    updateProfileContent();
  }
}

// Закрытие модального окна
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Обновление содержимого профиля
function updateProfileContent() {
  const profileContent = document.getElementById('profileContent');
  
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

// Вход в систему
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Симуляция входа
  currentUser = {
    name: email.split('@')[0],
    email: email
  };
  
  saveUserData();
  closeModal('profileModal');
  showNotification('Вы успешно вошли в систему!');
}

// Регистрация
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Симуляция регистрации
  currentUser = {
    name: email.split('@')[0],
    email: email
  };
  
  saveUserData();
  closeModal('profileModal');
  showNotification('Регистрация прошла успешно!');
}

// Выход из системы
function logout() {
  currentUser = null;
  localStorage.removeItem('kycShopUser');
  closeModal('profileModal');
  showNotification('Вы вышли из системы');
}

// Отправка сообщения обратной связи
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
  
  // Симуляция отправки сообщения
  showNotification('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  
  // Очистка формы
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactSubject').value = '';
  document.getElementById('contactMessage').value = '';
  
  closeModal('contactModal');
}

// Оформление заказа
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
          <span>${item.name} x${item.quantity}</span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      `).join('')}
      <hr>
      <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;">
        <span>Итого:</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    </div>
    
    <div class="crypto-payment">
      <h3>Выберите способ оплаты</h3>
      <div class="crypto-options">
        <div class="crypto-option" onclick="selectCheckoutPayment('bitcoin')">
          <i class="fab fa-bitcoin" style="font-size: 2rem; color: #f7931a;"></i>
          <div>Bitcoin</div>
        </div>
        <div class="crypto-option" onclick="selectCheckoutPayment('ethereum')">
          <i class="fab fa-ethereum" style="font-size: 2rem; color: #627eea;"></i>
          <div>Ethereum</div>
        </div>
        <div class="crypto-option" onclick="selectCheckoutPayment('usdt')">
          <div style="font-size: 2rem; color: #26a17b;">₮</div>
          <div>USDT</div>
        </div>
        <div class="crypto-option" onclick="selectCheckoutPayment('paypal')">
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
}

// Выбор способа оплаты при оформлении заказа
function selectCheckoutPayment(method) {
  const addresses = {
    bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    ethereum: '0x8ba1f109551bD432803012645Hac136c34C426c5',
    usdt: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5HFPVYW',
    paypal: 'payments@kycshop.com'
  };
  
  const paymentAddress = document.getElementById('checkoutPaymentAddress');
  const options = document.querySelectorAll('#checkoutModal .crypto-option');
  
  options.forEach(option => option.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  
  paymentAddress.style.display = 'block';
  paymentAddress.innerHTML = `
    <strong>Адрес для оплаты:</strong><br>
    ${addresses[method]}
    <button onclick="copyToClipboard('${addresses[method]}')" style="margin-left: 10px; padding: 5px 10px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
      <i class="fas fa-copy"></i> Копировать
    </button>
  `;
}

// Завершение заказа
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
  
  // Симуляция оформления заказа
  showNotification('Заказ оформлен! Инструкции по оплате отправлены на ваш email.');
  
  // Очистка корзины
  cart = [];
  updateCartBadge();
  updateCartSidebar();
  saveUserData();
  
  closeModal('checkoutModal');
}

// Показ уведомления
function showNotification(message) {
  // Создаем элемент уведомления
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
  
  // Добавляем стили анимации
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
  
  // Удаляем уведомление через 3 секунды
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}
