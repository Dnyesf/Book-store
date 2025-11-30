import { Book, Order, Author, Publisher } from './types';

export const BOOKS: Book[] = [
  // Fiction & Classic
  {
    id: 1,
    title: "شازده کوچولو",
    author: "آنتوان دو سنت اگزوپری",
    publisher: "نشر نگاه",
    price: 120000,
    originalPrice: 150000,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    category: "داستان و رمان",
    description: "شازده کوچولو اثر آنتوان دو سنت اگزوپری، فلسفی‌ترین داستان قرن بیستم و سومین کتاب پرخواننده جهان است.",
    isNew: true,
    tags: ["child", "life-changing"]
  },
  {
    id: 2,
    title: "بوف کور",
    author: "صادق هدایت",
    publisher: "نشر صادق",
    price: 95000,
    coverUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    category: "ادبیات کلاسیک",
    description: "بوف کور مشهورترین اثر صادق هدایت نویسنده معاصر ایرانی، رمانی کوتاه و از شاهکارهای ادبیات ایران است.",
    tags: ["iranian-masterpiece"]
  },
  {
    id: 3,
    title: "جنایت و مکافات",
    author: "فئودور داستایوفسکی",
    publisher: "نشر چشمه",
    price: 350000,
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    category: "ادبیات جهان",
    description: "جنایت و مکافات رمانی از نویسنده روسی فئودور داستایفسکی است که مضمون اصلی آن بررسی حالات روانی یک قاتل است.",
    tags: ["life-changing"]
  },
  {
    id: 4,
    title: "هری پاتر و سنگ جادو",
    author: "جی.کی. رولینگ",
    publisher: "کتابسرای تندیس",
    price: 280000,
    originalPrice: 320000,
    coverUrl: "https://images.unsplash.com/photo-1609866138210-84bb60719637?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    category: "نوجوان",
    description: "هری پاتر یک مجموعه رمان فانتزی است که توسط نویسنده بریتانیایی جی.کی. رولینگ نوشته شده است.",
    isNew: true,
    tags: ["teen", "fantasy"]
  },
  {
    id: 5,
    title: "قلعه حیوانات",
    author: "جورج اورول",
    publisher: "نشر ماهی",
    price: 85000,
    originalPrice: 100000,
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    rating: 4.6,
    category: "داستان و رمان",
    description: "مزعه حیوانات رمانی پادآرمان‌شهری است که به‌طور غیرمستقیم به شرایط حاکم بر شوروی سابق اشاره می‌کند.",
    tags: ["political"]
  },
  {
    id: 6,
    title: "ملت عشق",
    author: "الیف شافاک",
    publisher: "ققنوس",
    price: 195000,
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
    rating: 4.5,
    category: "عاشقانه",
    description: "ملت عشق نام رمانی نوشته الیف شافاک است که در سال ۲۰۱۰ به صورت هم‌زمان به دو زبان انگلیسی و ترکی منتشر شد.",
    tags: ["women", "life-changing"]
  },
  {
    id: 7,
    title: "کوری",
    author: "ژوزه ساراماگو",
    publisher: "نشر مرکز",
    price: 145000,
    coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    rating: 4.4,
    category: "ادبیات جهان",
    description: "رمانی از ژوزه ساراماگو که در سال ۱۹۹۵ منتشر شد. ساراماگو در سال ۱۹۹۸ جایزه نوبل ادبیات را به‌دست‌آورد.",
    tags: ["life-changing"]
  },
  {
    id: 8,
    title: "صد سال تنهایی",
    author: "گابریل گارسیا مارکز",
    publisher: "نشر بهمن",
    price: 210000,
    originalPrice: 250000,
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    category: "ادبیات کلاسیک",
    description: "صد سال تنهایی نام رمانی به زبان اسپانیایی نوشته گابریل گارسیا مارکز است که چاپ نخست آن در سال ۱۹۶۷ در آرژانتین منتشر شد.",
    tags: ["masterpiece"]
  },
  
  // Psychology & Self Help
  {
    id: 9,
    title: "تختخوابت را مرتب کن",
    author: "ویلیام اچ. مک‌ریون",
    publisher: "نشر کوله پشتی",
    price: 65000,
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600&h=900",
    rating: 4.3,
    category: "روانشناسی",
    description: "چیزهای کوچکی که می‌توانند زندگی‌تان و شاید دنیا را تغییر دهند.",
    tags: ["life-changing"]
  },
  {
    id: 10,
    title: "خودت باش دختر",
    author: "ریچل هالیس",
    publisher: "نشر البرز",
    price: 98000,
    originalPrice: 140000,
    coverUrl: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&q=80&w=600",
    rating: 4.1,
    category: "روانشناسی",
    description: "از باور کردن دروغ‌هایی که درباره‌تان گفته می‌شود دست بردارید تا تبدیل به همان کسی شوید که واقعاً هستید.",
    tags: ["women"]
  },
  {
    id: 11,
    title: "اثر مرکب",
    author: "دارن هاردی",
    publisher: "نشر نگاه نوین",
    price: 110000,
    coverUrl: "https://images.unsplash.com/photo-1585779034823-7e9ac48abd9e?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    category: "کسب و کار",
    description: "آغاز جهشی در زندگی، موفقیت و درآمد شما.",
    tags: ["business", "life-changing"]
  },
  {
    id: 12,
    title: "قدرت عادت",
    author: "چارلز داهیگ",
    publisher: "نشر نوین",
    price: 135000,
    coverUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=600",
    rating: 4.6,
    category: "روانشناسی",
    description: "چرایی کارهایی که انجام می‌دهیم، در زندگی و کسب‌وکار.",
    tags: ["business"]
  },

  // Teen
  {
    id: 13,
    title: "دنیای سوفی",
    author: "یوستین گردر",
    publisher: "نیلوفر",
    price: 185000,
    originalPrice: 220000,
    coverUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    category: "نوجوان",
    description: "داستانی درباره تاریخ فلسفه که برای نوجوانان نوشته شده است.",
    tags: ["teen", "philosophy"]
  },
  {
    id: 14,
    title: "مغازه خودکشی",
    author: "ژان تولی",
    publisher: "نشر چشمه",
    price: 75000,
    coverUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600",
    rating: 4.2,
    category: "داستان و رمان",
    description: "رمانی سیاه و طنزآلود درباره خانواده‌ای که شغلشان فروش ابزار خودکشی است.",
    tags: ["teen"]
  },
  {
    id: 15,
    title: "کتابخانه نیمه شب",
    author: "مت هیگ",
    publisher: "نشر کوله پشتی",
    price: 130000,
    originalPrice: 190000,
    coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600",
    rating: 4.5,
    category: "داستان و رمان",
    description: "بین مرگ و زندگی کتابخانه‌ای هست، و در آن کتابخانه، قفسه‌ها تا بی‌نهایت ادامه دارند.",
    isNew: true,
    tags: ["life-changing", "women", "teen"]
  },

  // Children
  {
    id: 16,
    title: "قصه‌های خوب برای بچه‌های خوب",
    author: "مهدی آذریزدی",
    publisher: "امیرکبیر",
    price: 90000,
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    category: "کودک",
    description: "مجموعه‌ای از داستان‌های بازنویسی شده از متون کهن ادبیات فارسی.",
    tags: ["child"]
  },
  {
    id: 17,
    title: "پاستیل‌های بنفش",
    author: "کاترین اپلگیت",
    publisher: "پرتقال",
    price: 110000,
    originalPrice: 130000,
    coverUrl: "https://images.unsplash.com/photo-1596464716127-f9a8759fa21d?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    category: "کودک",
    description: "داستانی جادویی درباره دوستی، خانواده و حقایقی که گاهی پذیرفتن‌شان سخت است.",
    isNew: true,
    tags: ["child"]
  },
  {
    id: 18,
    title: "ماتیلدا",
    author: "رولد دال",
    publisher: "نشر افق",
    price: 95000,
    coverUrl: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    category: "کودک",
    description: "داستان دختری نابغه که با قدرت‌های ذهنی‌اش دنیا را تغییر می‌دهد.",
    tags: ["child", "teen"]
  },

  // Women
  {
    id: 19,
    title: "شدن",
    author: "میشل اوباما",
    publisher: "نشر مهر",
    price: 240000,
    coverUrl: "https://images.unsplash.com/photo-1531988042241-8f5c83d544f5?auto=format&fit=crop&q=80&w=600",
    rating: 4.6,
    category: "زندگینامه",
    description: "خاطرات میشل اوباما، بانوی اول سابق ایالات متحده آمریکا.",
    tags: ["women"]
  },
  {
    id: 20,
    title: "زنان کوچک",
    author: "لوییزا می الکوت",
    publisher: "نشر افق",
    price: 160000,
    originalPrice: 180000,
    coverUrl: "https://images.unsplash.com/photo-1629032355262-d7510c3c54d8?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    category: "ادبیات کلاسیک",
    description: "داستان زندگی چهار خواهر مارچ که با عشق و امید در کنار هم زندگی می‌کنند.",
    tags: ["women", "teen"]
  },

  // Stationery (Mocked as books for grid, but visually distinct category)
  {
    id: 21,
    title: "دفتر کلاسوری ۱۰۰ برگ",
    author: "برند پاپکو",
    publisher: "پاپکو",
    price: 120000,
    coverUrl: "https://images.unsplash.com/photo-1531346878377-a513bc95ba0d?auto=format&fit=crop&q=80&w=600",
    rating: 4.5,
    category: "لوازم تحریر",
    description: "دفتر کلاسوری با کیفیت عالی و کاغذ ۷۰ گرم.",
    tags: ["stationery"]
  },
  {
    id: 22,
    title: "روان‌نویس نوک نمدی",
    author: "استدلر",
    publisher: "استدلر",
    price: 45000,
    originalPrice: 60000,
    coverUrl: "https://images.unsplash.com/photo-1515081775196-18820c4f346b?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    category: "لوازم تحریر",
    description: "روان‌نویس با کیفیت آلمانی در رنگ‌های متنوع.",
    tags: ["stationery"]
  },
  {
    id: 23,
    title: "جامدادی طرح فانتزی",
    author: "گاج",
    publisher: "گاج",
    price: 85000,
    coverUrl: "https://images.unsplash.com/photo-1623652807383-7c0a969df5d6?auto=format&fit=crop&q=80&w=600",
    rating: 4.3,
    category: "لوازم تحریر",
    description: "جامدادی جادار و با دوام.",
    tags: ["stationery"]
  },
  {
    id: 24,
    title: "بسته مداد رنگی ۲۴ رنگ",
    author: "فابرکاستل",
    publisher: "فابرکاستل",
    price: 320000,
    coverUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    category: "لوازم تحریر",
    description: "مداد رنگی کلاسیک با مغز نرم و مقاوم.",
    tags: ["stationery"]
  },
  // More Books to reach count
   {
    id: 25,
    title: "انسان خردمند",
    author: "یووال نوح هراری",
    publisher: "نشر نو",
    price: 290000,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    category: "تاریخ",
    description: "تاریخ مختصر بشر.",
    tags: ["history", "life-changing"]
  },
   {
    id: 26,
    title: "تاریخ بیهقی",
    author: "ابوالفضل بیهقی",
    publisher: "سخن",
    price: 450000,
    coverUrl: "https://images.unsplash.com/photo-1463320726281-696a4137048a?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    category: "تاریخ",
    description: "یکی از مهم‌ترین متون تاریخی ادبیات فارسی.",
    tags: ["history"]
  },
  {
    id: 27,
    title: "کافکا در کرانه",
    author: "هاروکی موراکامی",
    publisher: "نیلوفر",
    price: 195000,
    coverUrl: "https://images.unsplash.com/photo-1518373714866-ea11e842815c?auto=format&fit=crop&q=80&w=600",
    rating: 4.6,
    category: "ادبیات جهان",
    description: "رمانی سوررئال و جذاب.",
    tags: ["fiction"]
  },
  {
    id: 28,
    title: "۱۹۸۴",
    author: "جورج اورول",
    publisher: "نشر ماهی",
    price: 95000,
    originalPrice: 120000,
    coverUrl: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    category: "ادبیات جهان",
    description: "پادآرمان‌شهری که نظارت برادر بزرگ را به تصویر می‌کشد.",
    tags: ["political", "fiction"]
  },
  {
    id: 29,
    title: "مردی به نام اوه",
    author: "فردریک بکمن",
    publisher: "نشر نون",
    price: 145000,
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    category: "داستان و رمان",
    description: "داستان پیرمردی بداخلاق که زندگی‌اش تغییر می‌کند.",
    tags: ["fiction"]
  },
  {
    id: 30,
    title: "جزء از کل",
    author: "استیو تولتز",
    publisher: "نشر چشمه",
    price: 380000,
    coverUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    category: "داستان و رمان",
    description: "رمانی فلسفی و طنز درباره ترس از مرگ و زندگی.",
    tags: ["fiction", "life-changing"]
  }
];

export const CATEGORIES = [
  "داستان و رمان",
  "ادبیات جهان",
  "ادبیات کلاسیک",
  "روانشناسی",
  "تاریخ",
  "فلسفه",
  "نوجوان",
  "کودک",
  "عاشقانه",
  "هنر",
  "کسب و کار",
  "زندگینامه",
  "لوازم تحریر"
];

export const AUTHORS: Author[] = [
  { id: 1, name: "جورج اورول", imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=200" },
  { id: 2, name: "فئودور داستایوفسکی", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
  { id: 3, name: "جی.کی. رولینگ", imageUrl: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=200" },
  { id: 4, name: "صادق هدایت", imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200" },
  { id: 5, name: "الیف شافاک", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
  { id: 6, name: "آنتوان دو سنت اگزوپری", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: 7, name: "ریچل هالیس", imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
  { id: 8, name: "هاروکی موراکامی", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
];

export const PUBLISHERS: Publisher[] = [
  { id: 1, name: "نشر چشمه" },
  { id: 2, name: "نشر افق" },
  { id: 3, name: "نشر نی" },
  { id: 4, name: "انتشارات نگاه" },
  { id: 5, name: "نشر ماهی" },
  { id: 6, name: "پرتقال" },
  { id: 7, name: "ققنوس" },
  { id: 8, name: "نیلوفر" }
];

export const MOCK_ORDERS: Order[] = [
  { id: "ORD-1234", customerName: "علی رضایی", date: "1403/02/15", total: 450000, status: "Delivered" },
  { id: "ORD-1235", customerName: "سارا محمدی", date: "1403/02/18", total: 120000, status: "Processing" },
  { id: "ORD-1236", customerName: "محمد کریمی", date: "1403/02/20", total: 890000, status: "Shipped" },
];