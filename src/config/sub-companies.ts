/**
 * Sub-company site configuration — theming, content, and structure
 * for individual company landing pages (e.g., /hiterratech, /silachai, /kitthana).
 *
 * Each sub-company reuses the same page layout/components but differs in:
 * - Color scheme (primary, accent, background, text)
 * - Content (hero text, about, services, solutions)
 * - Images
 *
 * To add a new sub-company page:
 *  1. Add its config entry below
 *  2. Add images to public/assets/companies/<slug>/
 *  3. The dynamic route [company]/page.tsx handles the rest
 */

export interface SubCompanyTheme {
  /** Primary brand color */
  primary: string;
  /** Accent/secondary color */
  accent: string;
  /** Page background color or gradient */
  background: string;
  /** Header background */
  headerBg: string;
  /** Header text color */
  headerText: string;
  /** Section background alternating */
  sectionBgAlt: string;
  /** Footer background */
  footerBg: string;
}

export interface SubCompanyNav {
  logo?: string;
  links: { label: string; href: string }[];
}

export interface SubCompanyHero {
  /** First line of title — black */
  titleLine1: string;
  /** Second line of title — accent color */
  titleLine2: string;
  subtitle: string;
  backgroundImage?: string;
  /** Two hero images displayed on the right side */
  images?: {
    /** Smaller image (192×192) */
    small: string;
    /** Larger image (430×430) */
    large: string;
  };
  cta?: { label: string; href: string };
}

export interface SubCompanyAbout {
  /** Small uppercase label above the title */
  label: string;
  title: string;
  /** Description supports inline highlights via `highlights` array.
   *  Plain string for the body copy; highlighted phrases are applied separately. */
  description: string;
  /** Inline highlighted phrases within the description.
   *  Each entry specifies the phrase and optional font weight override.
   *  Defaults to semibold (600) if weight is not specified. */
  descriptionHighlights?: { phrase: string; weight?: 'semibold' | 'bold'; color?: string }[];
  /** Stats shown in the bottom bar */
  stats?: { value: string; label: string }[];
  /** Service cards shown on the right side (scrollable second view) */
  cards?: {
    title: string;
    description: string;
    icon: string;
    /** If true, card gets gradient bg and white text */
    highlighted?: boolean;
  }[];
}

export interface SubCompanyService {
  title: string;
  description: string;
  image?: string;
  /** Icon path from public/assets/sub-company/services/ */
  icon?: string;
}

export interface SubCompanyServices {
  title: string;
  /** Subtitle shown below the title */
  subtitle?: string;
  items: SubCompanyService[];
}

export interface SubCompanySolution {
  /** "Ready for" prefix text */
  titlePrefix: string;
  /** Highlighted word (e.g. "Solution?") */
  titleHighlight: string;
  description: string;
  cta: { label: string; href: string };
}

export interface SubCompanyFooter {
  /** Company name shown in brand column */
  brandName: string;
  copyright: string;
  /** Navigation column links */
  navLinks: { label: string; href: string }[];
  /** Specializations column items */
  specializations: { label: string; href?: string }[];
  /** Social column links */
  socialLinks: { label: string; href: string }[];
}

export interface SubCompanyConfig {
  slug: 'hiterratech' | 'silachai' | 'kitthana';
  name: string;
  /** Header logo path under /public. Falls back to the company name text when absent. */
  logo?: string;
  theme: SubCompanyTheme;
  nav: SubCompanyNav;
  hero: SubCompanyHero;
  about: SubCompanyAbout;
  services: SubCompanyServices;
  solution: SubCompanySolution;
  footer: SubCompanyFooter;
}

export const SUB_COMPANIES: Record<string, SubCompanyConfig> = {
  hiterratech: {
    slug: 'hiterratech',
    name: 'Hiterratech',
    logo: '/assets/sub-company/header/hiterratech-logo.png',
    theme: {
      primary: '#7A00CF',
      accent: '#6A1CF6',
      background: '#FFFFFF',
      headerBg: '#FFFFFF',
      headerText: '#000000',
      sectionBgAlt: '#F9FAFB',
      footerBg: '#111827',
    },
    nav: {
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Solution', href: '#solution' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      titleLine1: 'Smarter Mining &',
      titleLine2: 'Industrial Solutions',
      subtitle:
        'Integrated solution for your business and engineering projects with specialization in mining industry, smart ICT solution, and innovative technology.',
      images: {
        small: '/assets/sub-company/hero/hero-image-1.jpg',
        large: '/assets/sub-company/hero/hero-image-2.jpg',
      },
      cta: { label: 'Get Started', href: '#about' },
    },
    about: {
      label: 'LET US KNOW HOW WE CAN HELP',
      title: 'Need solution\nFor your Project?',
      description:
        "Your Business Solution does not limited to just what's available in your area. Explore Unlimited Possibilities with solution from all around the world.",
      descriptionHighlights: [
        { phrase: 'Business Solution', weight: 'semibold', color: '#7A00CF' },
        { phrase: 'Unlimited Possibilities', weight: 'bold', color: '#A92DFF' },
      ],
      stats: [
        { value: '100%', label: 'SYSTEM INTEGRITY' },
        { value: '20+', label: 'YEARS COMBINED EXPERTISE' },
      ],
      cards: [
        {
          title: 'Hiterratech Energy',
          description:
            'We can source solar panels and auxiliary equipments for your renewable energy solution.',
          icon: '/assets/sub-company/about/sun-icon.svg',
        },
        {
          title: 'Hiterratech Aerial',
          description:
            'We also specialize in aerial imaging and 3D reconstruction solution for your industrial requirements.',
          icon: '/assets/sub-company/about/map-icon.svg',
          highlighted: true,
        },
        {
          title: 'Hiterratech Trading',
          description:
            'We can help you source any tradable goods from trustworthy suppliers all around the world for all your requirements.',
          icon: '/assets/sub-company/about/trading-icon.svg',
        },
        {
          title: 'Hiterratech Mining',
          description:
            'We can source machineries, equipments, and spare parts for your crushing and mineral processing plants.',
          icon: '/assets/sub-company/about/gallery-icon.svg',
        },
      ],
    },
    services: {
      title: 'Our Service',
      subtitle:
        'Providing the elasticity and technical depth required for modern industrial engineering.',
      items: [
        {
          title: 'SLC Crushing Plant Upgrade',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          icon: '/assets/sub-company/services/engineer-icon.svg',
        },
        {
          title: 'Mining Pit Aerial Imaging',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          icon: '/assets/sub-company/services/cloud-icon.svg',
        },
        {
          title: 'Sadao HED Installation',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          icon: '/assets/sub-company/services/tool-icon.svg',
        },
      ],
    },
    solution: {
      titlePrefix: 'Ready for',
      titleHighlight: 'Solution?',
      description:
        "Join the ranks of global innovators who have transitioned to HiTerraTech's kinetic infrastructure.",
      cta: { label: 'Contact Us', href: '#contact' },
    },
    footer: {
      brandName: 'HITERRATECH',
      copyright: '© 2026 HITERRATECH. BUSINESS AND\nSYSTEMS ENGINEERING SPECIALISTS.',
      navLinks: [
        { label: 'HOME', href: '#home' },
        { label: 'SOLUTIONS', href: '#solution' },
        { label: 'ABOUT', href: '#about' },
      ],
      specializations: [
        { label: 'MINING INDUSTRY' },
        { label: 'SMART ICT' },
        { label: 'INNOVATIVE TECH' },
      ],
      socialLinks: [
        { label: 'LINKEDIN', href: 'https://www.linkedin.com/' },
        { label: 'TWITTER', href: 'https://www.twitter.com/' },
        { label: 'GITHUB', href: 'https://www.github.com/' },
      ],
    },
  },
  silachai: {
    slug: 'silachai',
    name: 'Silachai Charoen',
    theme: {
      primary: '#39005D',
      accent: '#A92DFF',
      background: '#FFFFFF',
      headerBg: '#FFFFFF',
      headerText: '#1A0033',
      sectionBgAlt: '#F7F3FB',
      footerBg: '#010214',
    },
    nav: {
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Solution', href: '#solution' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      titleLine1: 'Reliable Aggregate &',
      titleLine2: 'Rock Quarry Supply',
      subtitle:
        'A trusted rock quarry operation delivering high-quality crushed stone and aggregates for construction and infrastructure projects across the region.',
      images: {
        small: '/assets/sub-company/hero/hero-image-1.jpg',
        large: '/assets/sub-company/hero/hero-image-2.jpg',
      },
      cta: { label: 'Get Started', href: '#about' },
    },
    about: {
      label: 'QUALITY AGGREGATE, DELIVERED',
      title: 'Need quality\nStone & aggregate?',
      description:
        'From crushed stone to construction aggregate, Silachai Charoen supplies dependable materials backed by consistent quality control and on-time delivery.',
      descriptionHighlights: [
        { phrase: 'crushed stone', weight: 'semibold', color: '#39005D' },
        { phrase: 'consistent quality', weight: 'bold', color: '#A92DFF' },
      ],
      stats: [
        { value: '100%', label: 'QUALITY CONTROLLED' },
        { value: '30+', label: 'YEARS IN OPERATION' },
      ],
      cards: [
        {
          title: 'Crushed Stone',
          description:
            'Graded crushed stone in multiple sizes for road base, concrete, and foundation work.',
          icon: '/assets/sub-company/about/gallery-icon.svg',
        },
        {
          title: 'Construction Aggregate',
          description:
            'High-grade aggregate supply for large-scale construction and infrastructure projects.',
          icon: '/assets/sub-company/about/map-icon.svg',
          highlighted: true,
        },
        {
          title: 'Quarry Operations',
          description:
            'Efficient, safety-first quarry operations with modern crushing and screening plants.',
          icon: '/assets/sub-company/about/sun-icon.svg',
        },
        {
          title: 'Bulk Delivery',
          description: 'Reliable bulk logistics to deliver materials on schedule to your site.',
          icon: '/assets/sub-company/about/trading-icon.svg',
        },
      ],
    },
    services: {
      title: 'Our Service',
      subtitle:
        'Supplying the volume and consistency required for modern construction and infrastructure.',
      items: [
        {
          title: 'Crushed Stone Supply',
          description:
            'Multiple grades of crushed stone for road base, concrete mixing, and foundations.',
          icon: '/assets/sub-company/services/tool-icon.svg',
        },
        {
          title: 'Quarry Site Operations',
          description:
            'End-to-end quarry extraction, crushing, and screening with strict quality control.',
          icon: '/assets/sub-company/services/engineer-icon.svg',
        },
        {
          title: 'Aggregate Logistics',
          description:
            'Scheduled bulk delivery of aggregate materials directly to your project site.',
          icon: '/assets/sub-company/services/cloud-icon.svg',
        },
      ],
    },
    solution: {
      titlePrefix: 'Ready for',
      titleHighlight: 'Supply?',
      description:
        'Partner with Silachai Charoen for a dependable, quality-controlled aggregate supply chain.',
      cta: { label: 'Contact Us', href: '#contact' },
    },
    footer: {
      brandName: 'SILACHAI CHAROEN',
      copyright: '© 2026 SILACHAI CHAROEN. ROCK QUARRY\nAND AGGREGATE SUPPLY SPECIALISTS.',
      navLinks: [
        { label: 'HOME', href: '#home' },
        { label: 'SOLUTIONS', href: '#solution' },
        { label: 'ABOUT', href: '#about' },
      ],
      specializations: [
        { label: 'ROCK QUARRY' },
        { label: 'CRUSHED STONE' },
        { label: 'CONSTRUCTION AGGREGATE' },
      ],
      socialLinks: [
        { label: 'LINKEDIN', href: 'https://www.linkedin.com/' },
        { label: 'FACEBOOK', href: 'https://www.facebook.com/' },
      ],
    },
  },
  kitthana: {
    slug: 'kitthana',
    name: 'Kitthana Sap',
    theme: {
      primary: '#B45309',
      accent: '#F59E0B',
      background: '#FFFFFF',
      headerBg: '#FFFFFF',
      headerText: '#1C1917',
      sectionBgAlt: '#FAF7F2',
      footerBg: '#111827',
    },
    nav: {
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Solution', href: '#solution' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      titleLine1: 'Durable Bricks &',
      titleLine2: 'Building Materials',
      subtitle:
        'A dependable brick manufacturer producing durable, consistent building materials for residential and commercial construction.',
      images: {
        small: '/assets/sub-company/hero/hero-image-1.jpg',
        large: '/assets/sub-company/hero/hero-image-2.jpg',
      },
      cta: { label: 'Get Started', href: '#about' },
    },
    about: {
      label: 'BUILT TO LAST',
      title: 'Need durable\nBricks for your build?',
      description:
        'Kitthana Sap manufactures quality bricks and building materials with reliable strength and consistent sizing for every construction need.',
      descriptionHighlights: [
        { phrase: 'quality bricks', weight: 'semibold', color: '#B45309' },
        { phrase: 'reliable strength', weight: 'bold', color: '#F59E0B' },
      ],
      stats: [
        { value: '100%', label: 'QUALITY TESTED' },
        { value: '25+', label: 'YEARS OF CRAFT' },
      ],
      cards: [
        {
          title: 'Clay Bricks',
          description:
            'Durable, uniformly fired clay bricks for structural and facade applications.',
          icon: '/assets/sub-company/about/gallery-icon.svg',
        },
        {
          title: 'Building Materials',
          description:
            'A broad range of building materials supplied to construction projects of any scale.',
          icon: '/assets/sub-company/about/trading-icon.svg',
          highlighted: true,
        },
        {
          title: 'Custom Production',
          description:
            'Made-to-order brick sizes and finishes to meet specific project requirements.',
          icon: '/assets/sub-company/about/map-icon.svg',
        },
        {
          title: 'Bulk Supply',
          description: 'Large-volume production and delivery to keep your build on schedule.',
          icon: '/assets/sub-company/about/sun-icon.svg',
        },
      ],
    },
    services: {
      title: 'Our Service',
      subtitle: 'Delivering the strength and consistency required for lasting construction.',
      items: [
        {
          title: 'Clay Brick Manufacturing',
          description: 'Precision-fired clay bricks with consistent strength, sizing, and finish.',
          icon: '/assets/sub-company/services/engineer-icon.svg',
        },
        {
          title: 'Building Material Supply',
          description:
            'A full range of building materials delivered to residential and commercial sites.',
          icon: '/assets/sub-company/services/tool-icon.svg',
        },
        {
          title: 'Bulk Order Logistics',
          description:
            'High-volume production and scheduled delivery for large construction projects.',
          icon: '/assets/sub-company/services/cloud-icon.svg',
        },
      ],
    },
    solution: {
      titlePrefix: 'Ready to',
      titleHighlight: 'Build?',
      description: 'Choose Kitthana Sap for durable bricks and building materials you can rely on.',
      cta: { label: 'Contact Us', href: '#contact' },
    },
    footer: {
      brandName: 'KITTHANA SAP',
      copyright: '© 2026 KITTHANA SAP. BRICK MANUFACTURING\nAND BUILDING MATERIAL SPECIALISTS.',
      navLinks: [
        { label: 'HOME', href: '#home' },
        { label: 'SOLUTIONS', href: '#solution' },
        { label: 'ABOUT', href: '#about' },
      ],
      specializations: [
        { label: 'BRICK MANUFACTURING' },
        { label: 'BUILDING MATERIALS' },
        { label: 'BULK SUPPLY' },
      ],
      socialLinks: [
        { label: 'LINKEDIN', href: 'https://www.linkedin.com/' },
        { label: 'FACEBOOK', href: 'https://www.facebook.com/' },
      ],
    },
  },
};

/**
 * Get sub-company config by slug. Returns undefined if not found.
 */
export function getSubCompanyConfig(slug: string): SubCompanyConfig | undefined {
  return SUB_COMPANIES[slug];
}
