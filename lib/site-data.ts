export const contact = {
  name: 'محمد أحمد عبد الظاهر',
  profession: 'فني تشطيبات وتركيب ديكورات',
  city: 'جدة، المملكة العربية السعودية',
  phoneDisplay: '+966 54 248 4587',
  phoneHref: 'tel:+966542484587',
  whatsappHref: 'https://wa.me/966542484587',
}

export const navItems = [
  { href: '#portfolio', label: 'الأعمال' },
  { href: '#services', label: 'الخدمات' },
  { href: '#about', label: 'عن محمد' },
  { href: '#areas', label: 'مناطق العمل' },
  { href: '#contact', label: 'تواصل' },
]

export type ProjectCategory = 'tv' | 'entries' | 'bedrooms'

export type Project = {
  id: string
  src: string
  width: number
  height: number
  title: string
  materials: string
  alt: string
  category: ProjectCategory
}

export const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'tv', label: 'جدران التلفزيون' },
  { id: 'entries', label: 'المداخل والردهات' },
  { id: 'bedrooms', label: 'غرف النوم' },
]

export const projects: Project[] = [
  {
    id: 'tv-marble-arch',
    src: '/images/tv-wall-marble-arch.jpg',
    width: 1080,
    height: 616,
    title: 'جدار تلفزيون بإطار مقوّس',
    materials: 'بديل رخام · شرائح خشبية · إضاءة مخفية · وحدة معلّقة',
    alt: 'جدار تلفزيون مكسو ببديل رخام فاتح داخل إطار مقوّس من الشرائح الخشبية مع إضاءة مخفية ورفوف جانبية مضاءة',
    category: 'tv',
  },
  {
    id: 'entry-walnut',
    src: '/images/entry-walnut-mirror.jpg',
    width: 929,
    height: 1280,
    title: 'مدخل بخشب داكن ومرآة مضاءة',
    materials: 'ألواح خشب · جدار بملمس بارز · مرآة · إضاءة خلفية',
    alt: 'مدخل بألواح خشبية داكنة على الجانبين وجدار أبيض بملمس بارز تتوسطه مرآة طويلة بإضاءة خلفية وطاولة معلّقة',
    category: 'entries',
  },
  {
    id: 'bedroom-marble',
    src: '/images/bedroom-marble-gypsum.jpg',
    width: 1080,
    height: 1283,
    title: 'خلفية سرير وسقف معلّق',
    materials: 'بديل رخام · شرائح خشبية · جبس بورد بإضاءة مخفية',
    alt: 'غرفة نوم بخلفية سرير من ألواح بديل الرخام بين شرائح خشبية، وسقف جبس بورد بإضاءة مخفية',
    category: 'bedrooms',
  },
  {
    id: 'tv-gold-marble',
    src: '/images/tv-wall-gold-marble.jpg',
    width: 1080,
    height: 1198,
    title: 'جدار تلفزيون بعروق ذهبية',
    materials: 'بديل رخام لامع · شرائح خشبية · إضاءة سقفية',
    alt: 'جدار تلفزيون من ألواح بديل رخام لامعة بعروق ذهبية بين شرائح خشبية بنية مع وحدة تلفزيون خشبية طويلة',
    category: 'tv',
  },
  {
    id: 'onsite-chevron',
    src: '/images/onsite-herringbone-wood.jpg',
    width: 1200,
    height: 1600,
    title: 'جدار تلفزيون بنقشة شيفرون — أثناء التركيب',
    materials: 'قشرة خشب بنقشة شيفرون · شرائح · رفوف · فواصل مرايا',
    alt: 'صورة من موقع العمل لجدار تلفزيون بلوح خشبي بنقشة شيفرون وشرائح خشبية ورفوف طولية ووحدة معلّقة أثناء التركيب',
    category: 'tv',
  },
  {
    id: 'lobby-black',
    src: '/images/lobby-black-marble.jpg',
    width: 1280,
    height: 887,
    title: 'مدخل عمارة برخام أسود',
    materials: 'بديل رخام أسود · سقف جبس بإضاءة خطية · أرضية بخطوط',
    alt: 'ردهة عمارة بجدار مصعد مكسو ببديل رخام أسود بعروق بيضاء وسقف جبس بإضاءة خطية وكرسيين أبيضين',
    category: 'entries',
  },
  {
    id: 'tv-concrete-slats',
    src: '/images/tv-wall-concrete-slats.jpg',
    width: 944,
    height: 1280,
    title: 'جدار تلفزيون بملمس حجري وشرائح',
    materials: 'دهان بملمس حجري · شرائح خشبية · رفوف عائمة · إضاءة خلفية',
    alt: 'جدار تلفزيون نصفه بملمس حجري رمادي ونصفه شرائح خشبية برفوف داكنة عائمة وإضاءة خلفية دافئة',
    category: 'tv',
  },
  {
    id: 'entry-slats-mirrors',
    src: '/images/entry-slats-mirrors.jpg',
    width: 1080,
    height: 1072,
    title: 'مدخل بمرايا طولية وشرائح',
    materials: 'شرائح خشبية فاتحة · مرايا طولية · إضاءة بين الفواصل',
    alt: 'جدار مدخل بمرايا طولية تفصلها خطوط إضاءة، بين شرائح خشبية فاتحة، مع طاولة خشبية معلّقة',
    category: 'entries',
  },
  {
    id: 'tv-minimal',
    src: '/images/tv-wall-minimal.jpg',
    width: 1199,
    height: 1207,
    title: 'جدار تلفزيون بخطوط هادئة',
    materials: 'تكسية جدارية · شرائح عمودية · وحدة أرضية · إضاءة مخفية',
    alt: 'جدار تلفزيون بتكسية بلون رملي هادئ وإضاءة مخفية وشرائح عمودية جانبية ووحدة أرضية طويلة',
    category: 'tv',
  },
  {
    id: 'lobby-lounge',
    src: '/images/lobby-lounge.jpg',
    width: 1280,
    height: 1013,
    title: 'ركن جلوس في ردهة عمارة',
    materials: 'بديل رخام أسود · جبس بورد · شرائح داكنة',
    alt: 'ركن جلوس في ردهة عمارة بأعمدة مكسوة ببديل رخام أسود ونيش بشرائح داكنة وثريا معلّقة',
    category: 'entries',
  },
]

export type Service = {
  id: string
  title: string
  description: string
  uses: string[]
  image: { src: string; alt: string }
}

export const services: Service[] = [
  {
    id: 'gypsum',
    title: 'جبس بورد وأسقف معلقة',
    description:
      'تنفيذ أسقف معلقة وديكورات جدارية بمسارات إضاءة مخفية وسبوت لايت، بتشطيب دقيق واستواء تام.',
    uses: ['أسقف معلقة', 'إضاءة مخفية', 'بيوت نور'],
    image: {
      src: '/images/gypsum-board-ceilings-04.jpg',
      alt: 'سقف جبس بورد معلق بإضاءة مخفية وتشطيب حديث',
    },
  },
  {
    id: 'marble-alternative',
    title: 'بديل رخام',
    description:
      'تركيب ألواح بديل الرخام لجدران التلفزيون والمداخل، مع ضبط الفواصل وتناسق العروق ولمعان فاخر.',
    uses: ['جدران تلفزيون', 'مداخل وممرات', 'مقاوم للرطوبة'],
    image: {
      src: '/images/lobby-black-marble.jpg',
      alt: 'ألواح بديل رخام بعروق ذهبية لجدار تلفزيون',
    },
  },
  {
    id: 'wood-alternative',
    title: 'بديل خشب (WPC)',
    description:
      'شرائح وتكسيات جدارية من بديل الخشب المعالج، تعطي دفئًا للمكان مع مقاومة عالية لرطوبة جدة وسهولة تنظيف.',
    uses: ['شرائح جدارية', 'قواطع وتكسيات', 'مقاوم للرطوبة'],
    image: {
      src: '/images/tv-wall-marble-arch.jpg',
      alt: 'تكسيات وشرائح بديل خشب جدارية عصرية مع إضاءة',
    },
  },
  {
    id: 'natural-wood',
    title: 'خشب طبيعي',
    description:
      'تكسيات جدران وألواح وتأطير مداخل من أخشاب طبيعية ممتازة، بتركيب يبرز أصالة الخامة وعروق الخشب.',
    uses: ['تكسيات جدارية', 'تأطير مداخل', 'أخشاب طبيعية'],
    image: {
      src: '/images/entry-walnut-mirror.jpg',
      alt: 'ألواح خشب طبيعي تحيط بمدخل ومرآة مضاءة',
    },
  },
  {
    id: 'chipboard',
    title: 'شيب بورد ووحدات تلفزيون',
    description:
      'تفصيل وتركيب وحدات التلفزيون والأرفف والخزائن الجدارية من ألواح الشيب بورد بمقاسات دقيقة للمكان.',
    uses: ['وحدات تلفزيون', 'أرفف معلقة', 'خزائن جدارية'],
    image: {
      src: '/images/service-chipboard.png',
      alt: 'وحدة تلفزيون وأرفف مضاءة من ألواح الشيب بورد',
    },
  },
  {
    id: 'facades',
    title: 'واجهات وتكسيات خارجية',
    description:
      'تكسية الواجهات والأسوار والممرات بخامات عصرية مقاومة للشمس والعوامل الجوية في جدة.',
    uses: ['واجهات مباني', 'تكسيات أسوار', 'مقاوم للحرارة'],
    image: {
      src: '/images/service-facades.png',
      alt: 'واجهة فيلا حديثة بتكسيات خارجية حجرية وخشبية',
    },
  },
  {
    id: 'sandwich-panel',
    title: 'ساندوتش بانل وملاحق عازلة',
    description:
      'بناء وتركيب غرف الأسطح والملاحق والمستودعات بألواح ساندوتش بانل ذات العزل الحراري والمائي العالي.',
    uses: ['ملاحق أسطح', 'غرف معزولة', 'عزل حراري ومائي'],
    image: {
      src: '/images/service-sandwich-panel.png',
      alt: 'ملحق سطح مبني من ألواح ساندوتش بانل عازلة',
    },
  },
]

export const areas = ['جدة', 'أبحر', 'حي الروضة', 'البساتين']
