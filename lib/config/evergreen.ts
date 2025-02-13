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

const route = routes.Evergreen;

export const evergreenConfig = {
  name: "Godrej Evergreen Square",
  about:
    "Founded in 1990, Godrej Properties is a leading real estate developer in India with a range of residential townships, business parks, and mixed-use properties as part of its portfolio. The firm's properties stand out for their lovely architecture, quality residences, tranquil lush environs, and use of cutting-edge technologies. With a grand legacy in the real estate industry, Godrej Properties has changed the skyline of many cities in the country",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Phase 3, Hinjawadi,Pune",
  },
  gtmId: "GTM-5GFMGBQQ",
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
        "Download the brochure to learn more about Godrej Evergreen Square.",
    },
  },

  branding: {
    logo: "/evergreen/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/evergreen/images/banner-1.webp",
        alt: "Godrej Evergreen Square Interior",
      },
      {
        src: "/evergreen/images/banner-2.webp",
        alt: "Godrej Evergreen Square Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Godrej Evergreen Square.",
      },
      title: "Welcome to Godrej Evergreen Square",
      description: `Godrej Evergreen Square is a premium township nestled in the vibrant locale of Hinjewadi Phase 3, Pune. This thoughtfully designed project offers luxurious 1 BHK, 2 BHK, and 3 BHK apartments, each complemented by spacious balconies that provide stunning views of lush greenery and the city skyline. With only four apartments per floor, the low-density design ensures unmatched comfort and privacy. Spread across 4 acres, including a 0.5-acre evergreen forest, the township boasts world-class amenities such as a swimming pool, gymnasium, spa, multipurpose hall, kids' play area, pet park, senior citizen zone, and more, creating a perfect balance of modern living amidst nature.  

      Strategically located, Godrej Evergreen Square offers excellent connectivity and proximity to key infrastructure. Renowned institutions like Global Indian International School, Ruby Hall Clinic, and Symbiosis Institute are close by, as are retail and entertainment hubs such as Phoenix Mall of Millennium and Streets of Europe. Major business parks, including Rajiv Gandhi Infotech Park and Amar Tech Park, are easily accessible, with seamless connectivity via the Pune-Bangalore Highway, Old Mumbai Road, and Maan Road. The upcoming Megapolis Metro Station, along with easy access to the airport and railway station, ensures a superior commuting experience. Experience the perfect blend of convenience, luxury, and greenery at Godrej Evergreen Square, where every day feels extraordinary.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Hinjewadi, Pune by Godrej Properties",
      points: [
        { text: "Spot Booking Offers" },
        { text: "Early Buy Discounts" },
        { text: "Flexipay For First 100 Customers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "11 Acres",
        },
        {
          title: "Floors",
          value: "G + 32 Storeys",
        },
        {
          title: "Possession",
          value: "December 2028",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Starts at",
        value: "₹ 55 Lacs",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1, 2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "450-500 Sq.Ft.",
        price: "55-60 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "650-700 Sq.Ft.",
        price: "75-80 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "900-950 Sq. Ft.",
        price: "1.15 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/evergreen/images/costing.webp",
        alt: "Godrej Evergreen Square Costing",
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
        src: "/evergreen/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Godrej Evergreen Square",
      },
    },
    floorPlans: {
      categories: ["All","1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK",
          image: "/evergreen/images/floor1.webp",
          category: "1 BHK",
        },
        {
          type: "2 BHK",
          image: "/evergreen/images/floor2.webp",
          category: "2 BHK",
        },
        {
          type: "3 BHK",
          image: "/evergreen/images/floor3.webp",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Godrej evergreen square",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Godrej Evergreen Square",
    },
    amenities: [
      {
        title: "Sky Cafe",
        image: "/evergreen/images/amenities/sky-cafe.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/evergreen/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Gumnasium",
        image: "/evergreen/images/amenities/Gymnasium.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/evergreen/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/evergreen/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/evergreen/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/evergreen/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/evergreen/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/evergreen/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/evergreen/images/amenities/supermarket.png",
        description: "",
      },
      {
        title: "Parking",
        image: "/evergreen/images/amenities/parking.png",
        description: "",
      },
      {
        title: "Observatory Deck",
        image: "/evergreen/images/amenities/observatorydeck.webp",
        description: "",
      },
    ],
    stats: {
      title: "50+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Godrej Evergreen Square",
    },
    images: [
      {
        title: "",
        image: "/evergreen/images/gallery/1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/evergreen/images/gallery/2.png",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/evergreen/images/gallery/3.png",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/evergreen/images/gallery/4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.094961108469!2d73.68759!3d18.576795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb8a63690447%3A0x58ffd3d5c7c2b618!2sGodrej%20Evergreen%20Square!5e1!3m2!1sen!2sin!4v1737886003903!5m2!1sen!2sin",
    image: {
      src: "/evergreen/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Maan Road",
        description: "2 mins",
      },
      {
        title: "Pune Bangalore Highway",
        description: "15 Mins",
      },
      {
        title: "Mumbai Bypass Road",
        description: "20 Mins",
      },
      {
        title: "Upcoming Megapolis Metro Station",
        description: "10 Mins",
      },
      {
        title: "Pune International Airport",
        description: "50 Mins",
      },
      {
        title: "Pune Railway Station",
        description: "45 Mins",
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
    description: "Experience Godrej Evergreen from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/evergreen/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Godrej Evergreen Square from the comfort of your home",
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
        src: "/evergreen/images/ride.png",
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
        "Godrej Evergreen Square has been registered via MahaRERA registration number: P52100078240 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Godrej Evergreen Square",
          reraNumber: "Project MahaRERA - P52100078240",
          qrCode: "/evergreen/images/qrcode.webp",
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
        description: "RERA Project Registration No.: P52100078240",
      },
      {
        title: "Site Address",
        description: "Godrej Evergreen Square: near Megapolis Circle, Phase 3, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Pune, Maharashtra 411057",
      },
      {
        title: "Corporate Office",
        description: "Godrej Properties: Unit No. 5C, 5th Floor, Godrej One, Pirojshanagar, Vikhroli East, Mumbai - 400 079",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Godrej Evergreen Square | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Godrej Evergreen Square. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Godrej Evergreen Square",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Godrej Evergreen Square | Terms & Conditions",
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
      title: "Godrej Evergreen Square | Privacy Policy",
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
      title: "Godrej Evergreen Square | Cookies Policy",
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
      title: "Godrej Evergreen Square | Thank You",
      description: "Thank you for your interest in Godrej Evergreen Square.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_96",
      publicId: "a55db3a98409c5a71e85f77db5b8a0b5",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Godrej Township Evergreen",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Godrej Evergreen Square",
      },
    },
  },
};

export type EvergreenConfig = typeof evergreenConfig;
