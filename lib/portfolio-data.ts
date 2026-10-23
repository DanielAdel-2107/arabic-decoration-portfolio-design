/**
 * Portfolio data — single source of truth.
 *
 * Rules followed:
 *  - Only images inside project sub-folders (pro*, pro) are used.
 *  - Images placed directly inside service root folders are excluded.
 *  - 06_Facades has no project sub-folders, so it is excluded from the portfolio.
 *  - Each sub-folder = one portfolio project card.
 *  - All images inside a sub-folder belong to the same project.
 *
 * Display order (first 7 are pinned and shown first):
 *  1. marble-pro1        (05_Marble_Alternative/pro1)
 *  2. chipboard-pro5     (04_Chipboard/pro5)
 *  3. chipboard-pro2     (04_Chipboard/pro2)
 *  4. chipboard-pro1     (04_Chipboard/pro1)  ← position 4 confirmed by user
 *  5. gypsum-pro1        (01_Gypsum_Board/pro1)
 *  6. gypsum-pro6        (01_Gypsum_Board/pro6)
 *  7. gypsum-pro3        (01_Gypsum_Board/pro3)
 *  8+ remaining projects (accessible via "show more")
 */

export type PortfolioCategory =
  | 'gypsum'
  | 'wood-alternative'
  | 'chipboard'
  | 'marble-alternative'

export interface PortfolioProject {
  /** Unique stable ID */
  id: string
  /** Category used for filtering */
  category: PortfolioCategory
  /** Cover image path */
  cover: string
  /** All images that belong to this project */
  images: string[]
  /** Display title shown on the card — Arabic, descriptive, no folder names */
  title: string
  /** Accessible alt text for the cover image */
  coverAlt: string
}

export const portfolioCategories: {
  id: PortfolioCategory | 'all'
  label: string
}[] = [
    { id: 'all', label: 'الكل' },
    { id: 'gypsum', label: 'جبس بورد' },
    { id: 'wood-alternative', label: 'بديل خشب' },
    { id: 'chipboard', label: 'شيب بورد' },
    { id: 'marble-alternative', label: 'بديل رخام' },
  ]

export const portfolioProjects: PortfolioProject[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // الأعمال المثبتة في الأولوية (1-7) — تظهر أولاً قبل زر «رؤية المزيد»
  // ═══════════════════════════════════════════════════════════════════════════

  // 1 — 05_Marble_Alternative / pro1
  {
    id: 'gypsum-pro3',
    category: 'gypsum',
    title: 'جبس بورد — تصميم يضيف طابعًا مميزًا للمكان',
    cover: '/images/01_Gypsum_Board/pro3/Finished Warm Minimalist Living Room.png',
    coverAlt: 'غرفة معيشة دافئة بأسقف جبس بورد مع إضاءة مخفية',
    images: [
      '/images/01_Gypsum_Board/pro3/Finished Warm Minimalist Living Room.png',
      '/images/01_Gypsum_Board/pro3/Warm Minimalist Tray Ceiling Interior (1).png',
      '/images/01_Gypsum_Board/pro3/Warm Minimalist Tray Ceiling Interior.png',
    ],
  },

  // 2 — 04_Chipboard / pro5
  {
    id: 'chipboard-pro5',
    category: 'chipboard',
    title: 'شيب بورد — تشطيب بتفاصيل خشبية',
    cover: '/images/04_Chipboard/pro5/WhatsApp Image 2026-10-16 at 7.36.07 PM (3).jpeg',

    coverAlt: 'وحدة تلفزيون شيب بورد بتفاصيل دقيقة',
    images: [
      '/images/04_Chipboard/pro5/WhatsApp Image 2026-10-16 at 7.36.07 PM (3).jpeg',
      '/images/04_Chipboard/pro5/WhatsApp Image 2026-10-16 at 7.36.02 PM (1).jpeg',
      '/images/04_Chipboard/pro5/WhatsApp Image 2026-10-16 at 7.36.02 PM (2).jpeg',
    ],
  },

  // 3 — 04_Chipboard / pro2

  // 4 — 04_Chipboard / pro1 (confirmed by user as position 4)
  {
    id: 'chipboard-pro1',
    category: 'chipboard',
    title: 'شيب بورد — جدار تلفزيون بيج مينيمالست',
    cover: '/images/04_Chipboard/pro1/Warm Minimalist Feature Wall.png',
    coverAlt: 'جدار تلفزيون شيب بورد بألوان بيج مينيمالست',
    images: [
      '/images/04_Chipboard/pro1/Warm Minimalist Feature Wall.png',
      '/images/04_Chipboard/pro1/Minimalist Beige Panelled TV Wall.png',
      '/images/04_Chipboard/pro1/WhatsApp Image 2026-10-16 at 7.36.02 PM (4).jpeg',
    ],
  },

  // 5 — 01_Gypsum_Board / pro1
  {
    id: 'gypsum-pro1',
    category: 'gypsum',
    title: 'جبس بورد — لمسات ديكورية للأسقف',
    cover: '/images/01_Gypsum_Board/pro1/Blue-Gray Arch Niche Renovation Interior.png',
    coverAlt: 'سقف جبس بورد بتشطيب حديث ونيش مقوّس بألوان رمادية زرقاء',
    images: [
      '/images/01_Gypsum_Board/pro1/Blue-Gray Arch Niche Renovation Interior.png',
      '/images/01_Gypsum_Board/pro1/Near-Complete Teal Arched Niche Interior.png',
    ],
  },

  // 6 — 01_Gypsum_Board / pro6
  {
    id: 'gypsum-pro6',
    category: 'gypsum',
    title: 'جبس بورد — تفاصيل تبرز جمال التصميم',
    cover: '/images/01_Gypsum_Board/pro6/Minimalist Hallway with Lit Niches and Plant.png',
    coverAlt: 'ممر منزلي مينيمالست بنيشات مضاءة ونبتة داخلية',
    images: [
      '/images/01_Gypsum_Board/pro6/Minimalist Hallway with Lit Niches and Plant.png',
      '/images/01_Gypsum_Board/pro6/WhatsApp Image 2026-10-20 at 7.01.48 PM (3).jpeg',
      '/images/01_Gypsum_Board/pro6/WhatsApp Image 2026-10-20 at 7.01.48 PM.jpeg',
      '/images/01_Gypsum_Board/pro6/WhatsApp Image 2026-10-20 at 7.01.49 PM.jpeg',
    ],
  },

  // 7 — 01_Gypsum_Board / pro3
  {
    id: 'marble-pro1',
    category: 'marble-alternative',
    title: 'بديل الرخام — تصميم بلمسة رخامية أنيقة',
    cover: '/images/05_Marble_Alternative/pro1/Modern Marble Lobby with Floating Chandelier.png',
    coverAlt: 'لوبي فاخر بألواح بديل رخام مع ثريا معلقة عصرية',
    images: [
      '/images/05_Marble_Alternative/pro1/Modern Marble Lobby with Floating Chandelier.png',
      '/images/05_Marble_Alternative/pro1/WhatsApp Image 2026-10-16 at 7.34.43 PM.jpeg',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // باقي الأعمال — تظهر تدريجيًا عبر زر «رؤية المزيد»
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'gypsum-pro8',
    category: 'gypsum',
    title: 'جبس بورد — تشطيب احترافي بجودة عالية',
    cover: '/images/01_Gypsum_Board/pro8/WhatsApp Image 2026-10-16 at 7.36.03 PM (2).jpeg',
    coverAlt: 'تفاصيل سقف جبس بورد بتشطيب عالي الجودة',
    images: [
      '/images/01_Gypsum_Board/pro8/WhatsApp Image 2026-10-16 at 7.36.03 PM (2).jpeg',
      '/images/01_Gypsum_Board/pro8/WhatsApp Image 2026-10-16 at 7.36.03 PM (3).jpeg',
    ],
  },
  {
    id: 'chipboard-pro4',
    category: 'chipboard',
    title: 'شيب بورد — تصميم متعدد الأوجه والزوايا',
    cover: '/images/04_Chipboard/pro4/WhatsApp Image 2026-10-20 at 7.01.47 PM (2).jpeg',
    coverAlt: 'وحدة شيب بورد بتصميم متعدد الأوجه',
    images: [
      '/images/04_Chipboard/pro4/WhatsApp Image 2026-10-20 at 7.01.47 PM (2).jpeg',
      '/images/04_Chipboard/pro4/WhatsApp Image 2026-10-20 at 7.01.47 PM.jpeg',
      '/images/04_Chipboard/pro4/WhatsApp Image 2026-10-20 at 7.01.48 PM (1).jpeg',
      '/images/04_Chipboard/pro4/WhatsApp Image 2026-10-20 at 7.01.48 PM (2).jpeg',
    ],
  },

  // 01_Gypsum_Board — المشاريع المتبقية
  {
    id: 'gypsum-pro5',
    category: 'gypsum',
    title: 'جبس بورد — سقف tray بإضاءة ناعمة دافئة',
    cover: '/images/01_Gypsum_Board/pro5/Modern Tray Ceiling with Warm Cove Lighting.png',
    coverAlt: 'سقف tray حديث بإضاءة ناعمة دافئة',
    images: [
      '/images/01_Gypsum_Board/pro5/Modern Tray Ceiling with Warm Cove Lighting.png',
      '/images/01_Gypsum_Board/pro5/Modern Tray Ceiling with Warm Linear Lighting.png',
    ],
  },
  {
    id: 'gypsum-pro7',
    category: 'gypsum',
    title: 'جبس بورد — غرفة بألوان هادئة وإضاءة ناعمة',
    cover: '/images/01_Gypsum_Board/pro7/Warm Minimalist Curved Interior.png',
    coverAlt: 'غرفة بألوان بيج وسقف بإضاءة ناعمة',
    images: [
      '/images/01_Gypsum_Board/pro7/Warm Minimalist Curved Interior.png',
      '/images/01_Gypsum_Board/pro7/Minimalist Renovation Interior with Recessed Lighting.png',
      '/images/01_Gypsum_Board/pro7/Minimalist Greige Room with Cove Lighting.png',
    ],
  },

  // 03_Wood_Alternative
  {
    id: 'wood-pro1',
    category: 'wood-alternative',
    title: 'بديل خشب — تكسية جدارية بدفء طبيعي',
    cover: '/images/03_Wood_Alternative/pro1/WhatsApp Image 2026-10-16 at 7.36.07 PM (1).jpeg',
    coverAlt: 'تكسية جدارية من بديل الخشب بتشطيب دافئ',
    images: [
      '/images/03_Wood_Alternative/pro1/WhatsApp Image 2026-10-16 at 7.36.07 PM (1).jpeg',
      '/images/03_Wood_Alternative/pro1/WhatsApp Image 2026-10-16 at 7.36.07 PM (2).jpeg',
    ],
  },
  {
    id: 'chipboard-pro',
    category: 'chipboard',
    title: 'شيب بورد — رفوف أسفل الدرج بتشطيب أنيق',
    cover: '/images/04_Chipboard/pro/Polished Under-Stairs Shelving Hallway.png',
    coverAlt: 'رفوف شيب بورد أسفل الدرج بتشطيب أنيق',
    images: [
      '/images/04_Chipboard/pro/Polished Under-Stairs Shelving Hallway.png',
      '/images/04_Chipboard/pro/WhatsApp Image 2026-10-20 at 6.48.44 PM (1).jpeg',
    ],
  },

  // 04_Chipboard — المشاريع المتبقية
  {
    id: 'chipboard-pro3',
    category: 'chipboard',
    title: 'شيب بورد — وحدة مخصصة بجودة تنفيذ عالية',
    cover: '/images/04_Chipboard/pro3/WhatsApp Image 2026-10-16 at 7.36.01 PM (1).jpeg',
    coverAlt: 'وحدة شيب بورد مخصصة بجودة تنفيذ عالية',
    images: [
      '/images/04_Chipboard/pro3/WhatsApp Image 2026-10-16 at 7.36.01 PM (1).jpeg',
    ],
  },
  {
    id: 'gypsum-pro4',
    category: 'gypsum',
    title: 'جبس بورد — إضاءة مدمجة بتشطيب متقن',
    cover: '/images/01_Gypsum_Board/pro4/WhatsApp Image 2026-10-20 at 7.01.49 PM (1).jpeg',
    coverAlt: 'تفاصيل تشطيب جبس بورد بإضاءة مدمجة',
    images: [
      '/images/01_Gypsum_Board/pro4/WhatsApp Image 2026-10-20 at 7.01.49 PM (1).jpeg',
    ],
  },
  {
    id: 'chipboard-pro2',
    category: 'chipboard',
    title: 'شيب بورد — تصميم عملي للمساحات الداخلية',
    cover: '/images/04_Chipboard/pro2/Modern Beige TV Feature Wall.png',
    coverAlt: 'جدار تلفزيون شيب بورد بيج عصري بتفاصيل مميزة',
    images: ['/images/04_Chipboard/pro2/Modern Beige TV Feature Wall.png'],
  },
  {
    id: 'gypsum-pro2',
    category: 'gypsum',
    title: 'جبس بورد — جدار تلفزيون بتشطيب أخضر نظيف',
    cover: '/images/01_Gypsum_Board/pro2/Clean Green Drywall TV Feature Wall.png',
    coverAlt: 'جدار جبس بورد أخضر نظيف لتثبيت التلفزيون',
    images: [
      '/images/01_Gypsum_Board/pro2/Clean Green Drywall TV Feature Wall.png',
    ],
  },
  {
    id: 'wood-pro5',
    category: 'wood-alternative',
    title: 'بديل خشب — شرائح جدارية بتصميم عصري',
    cover: '/images/03_Wood_Alternative/pro5/WhatsApp Image 2026-10-16 at 7.35.56 PM (4).jpeg',
    coverAlt: 'شرائح بديل خشب بتصميم عصري',
    images: [
      '/images/03_Wood_Alternative/pro5/WhatsApp Image 2026-10-16 at 7.35.56 PM (4).jpeg',
      '/images/03_Wood_Alternative/pro5/WhatsApp Image 2026-10-20 at 6.48.45 PM (1).jpeg',
    ],
  },
]
