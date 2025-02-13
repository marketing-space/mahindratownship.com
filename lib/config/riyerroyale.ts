import {
  Car,
  Home,
  ImageIcon,
  IndianRupee,
  LayoutPanelTop,
  MapPin,
  Phone,
  Trees,
  Video,
} from "lucide-react";
import { routes } from "./routes";

const route = routes.Riverroyale;

export const riverroyaleConfig = {
  name: "Godrej River Royale",
  about:
    "Founded in 1990, Godrej Properties is a leading real estate developer in India with a range of residential townships, business parks, and mixed-use properties as part of its portfolio. The firm's properties stand out for their lovely architecture, quality residences, tranquil lush environs, and use of cutting-edge technologies. With a grand legacy in the real estate industry, Godrej Properties has changed the skyline of many cities in the country",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: " Baner-Hinjewadi Road, Pune",
  },
  gtmId: "GTM-P4VQLFGZ",
  navbar: {
    navItems: [
      {
        href: `/${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `/${route}/#pricing`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `/${route}/#sitefloorplan`,
        label: "Site & Floor Plan",
        icon: LayoutPanelTop,
      },
      {
        href: `/${route}/#amenities`,
        label: "Amenities",
        icon: Trees,
      },
      {
        href: `/${route}/#gallery`,
        label: "Gallery",
        icon: ImageIcon,
      },
      {
        href: `/${route}/#location`,
        label: "Location",
        icon: MapPin,
      },
      {
        href: `/${route}/#sitevisit`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description:
        "Download the brochure to learn more about Godrej River Royale.",
    },
  },

  branding: {
    logo: "/riverroyale/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/riverroyale/images/banner-1.webp",
        alt: "Godrej River Royale Interior",
      },
      {
        src: "/riverroyale/images/banner-2.webp",
        alt: "Godrej River Royale Interior",
      },
      {
        src: "/riverroyale/images/banner-3.webp",
        alt: "Godrej River Royale Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Godrej River Royale.",
      },
      title: "Welcome to Godrej River Royale",
      description: `Set across a sprawling 4.3-acre haven of lush greenery, Godrej River Royale Mahalunge in Pune is a masterpiece crafted by Godrej Properties. Located in the serene yet vibrant Baner-Mahalunge micro-market, this exquisite development perfectly harmonizes nature’s tranquility with urban sophistication. Featuring three iconic towers and an impressive 30,000 sq. ft. clubhouse, Godrej River Royale Pune epitomizes luxury living.

      Tower 1 offers exclusive 4 BHK residences, while Towers 2 and 3 present thoughtfully designed 3 BHK homes, each capturing the essence of refined living. These residences feature expansive living and dining spaces that exude openness, cozy work-from-home nooks to spark creativity, and serene master bedrooms complete with walk-in wardrobes. The spa-like bathrooms with luxurious bathtubs, state-of-the-art kitchens, and three private balconies offering panoramic views redefine comfort and elegance.

      Welcome to Godrej River Royale Baner, where the seamless blend of sophistication and comfort creates an oasis of bliss. At Godrej River Royale Mahalunge, dreams of harmonious living amidst nature and luxury come beautifully to life.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Baner-Hinjewadi Road, Pune By Godrej Properties",
      points: [
        { text: "Pay only 1% Every Month No Price Hike" },
        { text: "Modular Kitchen in All Apartment" },
        { text: "15:85 & 25 *4 Payment Plan Available" },
        { text: "Avail special launch benefits & Spot Offers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "4.5 Acres",
        },
        {
          title: "Floors",
          value: "G + 77 Storeys",
        },
        {
          title: "Possession",
          value: "December 2028",
        },
      ],
      price: {
        title: "3 & 4 BHK Luxurious Homes Starting At",
        value: "₹ 2.25 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3 BHK & Jodi residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK",
        carpetArea: "1688 Sq.ft.",
        price: "2.25 Cr* + Taxes",
        suffix: "Onwards",
      },
      {
        type: "4 BHK",
        carpetArea: "2304 Sq.ft.",
        price: "3.5 Cr* + Taxes",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Duplex",
        carpetArea: "3151 Sq.ft.",
        price: "4.34 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK Duplex",
        carpetArea: "4031 Sq.ft.",
        price: "5.40 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/riverroyale/images/costing.webp",
        alt: "Godrej River Royale Costing",
      },
      title: "Need Complete Costing Details?",
      description:
        "Download our detailed cost breakdown including all charges and payment plans",
      cta: {
        title: "Get Price Details",
        description: "Request complete pricing information",
      },
    },
  },

  siteAndFloorPlan: {
    title: "Site & Floor Plan",
    description:
      "Explore our thoughtfully designed layouts that maximize space and comfort",
    masterPlan: {
      title: "Master Plan",
      image: {
        src: "/riverroyale/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Godrej River Royale",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-784 Sq.ft.",
          image: "/riverroyale/images/floor-2.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-814 Sq.ft.",
          image: "/riverroyale/images/floor-3.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Godrej River Royale",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Godrej River Royale",
    },
    amenities: [
      {
        title: "Gymnasium",
        image: "/riverroyale/images/amenities/Gymnasium.png",
        description: "",
      },
      {
        title: "Sky Cafe",
        image: "/riverroyale/images/amenities/sky-cafe.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/riverroyale/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Pet Park",
        image: "/riverroyale/images/amenities/pet-park.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/riverroyale/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/riverroyale/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/riverroyale/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/riverroyale/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/riverroyale/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/riverroyale/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/riverroyale/images/amenities/supermarket.png",
        description: "",
      },
      {
        title: "Parking",
        image: "/riverroyale/images/amenities/parking.png",
        description: "",
      },
    ],
    stats: {
      title: "32+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Godrej River Royale",
    },
    images: [
      {
        title: "",
        image: "/riverroyale/images/gallery/ga1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/riverroyale/images/gallery/ga2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/riverroyale/images/gallery/ga3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/riverroyale/images/gallery/ga4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.887921401791!2d73.73372437372177!3d18.57003676766426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9786692480b%3A0x7802359c7ecbca66!2sGodrej%20River%20Royale%2C%20Baner%20-%20Hinjewadi%20Road%2C%20Pune!5e1!3m2!1sen!2sin!4v1738066671062!5m2!1sen!2sin",
    image: {
      src: "/riverroyale/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Balewadi Metro Station",
        description: "3.3 Kms",
      },
      {
        title: "Global Indian International School",
        description: "2 Mins",
      },
      {
        title: "Ruby Hall",
        description: "4.2 Kms",
      },
      {
        title: "D-Mart",
        description: "4 kms",
      },
      {
        title: "Hinjewadi IT Park ",
        description: "4 Kms",
      },
      {
        title: "Xion Mall",
        description: "8.4 Kms",
      },
    ],
    location: {
      title: "Location Details",
      cta: {
        title: "Get Location",
        description: "Get detailed information about this location",
      },
    },
  },

  virtualTour: {
    title: "Virtual Tour Request",
    description: "Experience Godrej River Royale from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/riverroyale/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Godrej River Royale from the comfort of your home",
    features: [
      {
        title: "360° Views",
        description: "Explore every corner of our property in detail",
      },
      {
        title: "Live Interaction",
        description: "Real-time guidance from our property experts",
      },
      {
        title: "Flexible Timing",
        description: "Schedule your tour at your convenience",
      },
    ],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/riverroyale/images/ride.png",
        alt: "Book a Site Visit",
      },
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
    },

    callUs: {
      title: "Call Us",
      description: "Get in touch with our experts",
      phone: "+91 96190 95795",
    },
    enquiryFeatures: [
      {
        icon: Phone,
        title: "Instant Call Back",
        description: "Get a call from our experts",
      },
      {
        icon: Car,
        title: "Free Site Visit",
        description: "Schedule at your convenience",
      },
      {
        icon: IndianRupee,
        title: "Unmatched Price",
        description: "Best offers guaranteed",
      },
    ],
  },

  legal: {
    rera: {
      title: "RERA Information",
      description:
        "Godrej River Royale has been registered via MahaRERA registration number: P52100052957 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Godrej River Royale",
          reraNumber: "Project MahaRERA - P52100052957",
          qrCode: "/riverroyale/images/qrcode.webp",
        },
      ],
    },
    legalInfo: [
      {
        title: "Project Registration",
        description:
          "Project Registered under Government of India RERA Act 2016",
      },
      {
        title: "Authorised Advertiser",
        description:
          "Government RERA Authorised Advertiser's: Marketing Space Pvt Ltd, Registration No A51700000595, CIN U74999MH2016PTC288144",
      },
      {
        title: "RERA Numbers",
        description: "RERA Project Registration No.: P52100052957",
      },
      {
        title: "Site Address",
        description: " Godrej River Royale: Godrej River Royale, Sector R9, Nande - Balewadi Rd, off Hinjewadi, behind Balewadi Stadium, Mahalunge, Pune, Maharashtra 411045",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Godrej River Royale | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Godrej River Royale. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Godrej River Royale",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Godrej River Royale | Terms & Conditions",
      description:
        "Please read these terms and conditions carefully before using our website.",
    },
    title: "Terms & Conditions",
    description:
      "Please read these terms and conditions carefully before using our website.",
    paragraphs: [
      {
        title: "",
        description:
          "By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party",
      },
      {
        title: "Security",
        description:
          "To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality.",
      },
      {
        title: "Disclosing Information",
        description:
          "We do not disclose any personal information obtained about you from this website to third parties unless you permit us to do so by ticking the relevant boxes in registration or competition forms. We may also use the information to keep in contact with you and inform you of developments associated with us. You will be given the opportunity to remove yourself from any mailing list or similar device. If at any time in the future we should wish to disclose information collected on this website to any third party, it would only be with your knowledge and consent. We may from time to time provide information of a general nature to third parties - for example, the number of individuals visiting our website or completing a registration form, but we will not use any information that could identify those individuals. In addition, Marketing-Space may work with third parties for the purpose of delivering targeted behavioural advertising to the Marketing Space website. Through the use of cookies, anonymous information about your use of our websites and other websites will be used to provide more relevant adverts about goods and services of interest to you. For more information on online behavioural advertising and about how to turn this feature off, please visit https://marketing-space.in.",
      },
    ],
  },

  privacyPolicy: {
    seo: {
      title: "Godrej River Royale | Privacy Policy",
      description: "This policy explains how we use your personal information.",
    },
    title: "Privacy Policy",
    description: "This policy explains how we use your personal information.",
    paragraphs: [
      {
        title: "",
        description:
          "In our endeavour and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.",
      },
      {
        title: "Updation of Privacy Policy",
        description:
          "This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.",
      },
    ],
  },

  cookiesPolicy: {
    seo: {
      title: "Godrej River Royale | Cookies Policy",
      description:
        "This policy explains how we use cookies and similar technologies on our website.",
    },
    title: "Cookies Policy",
    description:
      "This policy explains how we use cookies and similar technologies on our website.",
    paragraphs: [
      {
        title: "",
        description:
          "Your Internet browser has the in-built facility for storing small files - 'cookies' - that hold information which allows a website to recognise your account. Our website takes advantage of this facility to enhance your experience. You have the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired.",
      },
      {
        title: "",
        description:
          "We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact us.updates to you. Also, you hold an option of requesting removal from our mailing list. We do not share your personal information with any third party.",
      },
    ],
  },

  thankYou: {
    seo: {
      title: "Godrej River Royale | Thank You",
      description: "Thank you for your interest in Godrej River Royale",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_90",
      publicId: "98c068ecb96cec9f365c2713178cb1cb",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Runwal Mahalaxmi",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Godrej River Royale",
      },
    },
  },
};

export type RiverroyaleConfig = typeof riverroyaleConfig;
