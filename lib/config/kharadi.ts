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

const route = routes.Kharadi;

export const kharadiConfig = {
  name: "godrej urban retreat kharadi",
  about:
    "The Godrej Group has a broad range of business ventures, including real estate development, fast-moving consumer products, cutting-edge engineering, furniture, security, and agri-care. Each Godrej Properties project blends a dedication to advanced design and technology with a 125-year tradition of excellence and trust. Godrej Properties brings the Godrej Group's innovation, sustainability, and excellence-focused principles to the real estate industry.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Kharadi, Pune",
  },
  gtmId: "GTM-PP4ZP4KZ",
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
        "Download the brochure to learn more about godrej urban retreat kharadi",
    },
  },

  branding: {
    logo: "/kharadi/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/kharadi/images/banner-1.webp",
        alt: "godrej urban retreat kharadi Interior",
      },
      {
        src: "/kharadi/images/banner-2.webp",
        alt: "godrej urban retreat kharadi Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about godrej urban retreat kharadi.",
      },
      title: "Welcome to Godrej Urban Retreat Kharadi",
      description: `Welcome to Godrej Urban Retreat Kharadi, a premium residential community offering luxurious 2 BHK apartments set amidst lush greenery and tranquil surroundings. Perfect for those who desire a healthy, active, and vibrant lifestyle, this exclusive township features 10 acres of Central Greens and over 25 resort-inspired amenities, delivering an unmatched living experience.

      Enjoy world-class facilities, including an Olympic-sized swimming pool, a state-of-the-art 2000+ sq.m. health center, and a sprawling 6500+ sq.m. clubhouse. Strategically located near key hubs, it is just 6 km from EON/WTC IT Park, 10 km from Pune Airport, and 15 km from Pune Railway Station. With abundant sports facilities, fitness activities, and seamless connectivity to schools, hospitals, retail destinations, and entertainment zones, *Godrej Urban Retreat* offers the perfect blend of luxury and convenience.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Kharadi by Godrej Properties",
      points: [
        { text: "Resort-Themed Amenities" },
        { text: "Luxurious Living Amidst Nature" },
        { text: "Instant Benefits on Spot Booking!" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "250 Acres",
        },
        {
          title: "Floors",
          value: "32 Storeys",
        },
        {
          title: "Possession",
          value: "December 2028",
        },
      ],
      price: {
        title: "Luxurious 2 BHK Starts from",
        value: "₹ 78.99L",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "787-918 Sq.ft.",
        price: "78.99 Lacs",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/kharadi/images/costing.webp",
        alt: "godrej urban retreat kharadi Costing",
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
        src: "/kharadi/images/masterplan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of godrej urban retreat kharadi",
      },
    },
    floorPlans: {
      categories: ["All","2 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-727 Sq.ft.",
          image: "/kharadi/images/floor-1.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-839 Sq.ft.",
          image: "/kharadi/images/floor-2.jpg",
          category: "2 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of godrej urban retreat kharadi",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of godrej urban retreat kharadi",
    },
    amenities: [
      {
        title: "Gymnasium",
        image: "/kharadi/images/amenities/Gymnasium.png",
        description: "",
      },
      {
        title: "Parking",
        image: "/kharadi/images/amenities/parking.png",
        description: "",
      },
      {
        title: "Sky Cafe",
        image: "/kharadi/images/amenities/sky-cafe.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/kharadi/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Pet Park",
        image: "/kharadi/images/amenities/pet-park.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/kharadi/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/kharadi/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/kharadi/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/kharadi/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/kharadi/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/kharadi/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/kharadi/images/amenities/supermarket.png",
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
      description: "Download the gallery of godrej urban retreat kharadi",
    },
    images: [
      {
        title: "",
        image: "/kharadi/images/gallery/1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/kharadi/images/gallery/5.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/kharadi/images/gallery/3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/kharadi/images/gallery/4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.650748747703!2d73.979171!3d18.538946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c35c424d573d%3A0x1c5ff4ee4b51b81e!2sGodrej%20Urban%20Retreat%2C%20Pune!5e1!3m2!1sen!2sin!4v1738050521815!5m2!1sen!2sin",
    image: {
      src: "/kharadi/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Reliance Mart",
        description: "5.5 Kms",
      },
      {
        title: "EON IT Park",
        description: "6.5 Kms",
      },
      {
        title: "Oxford World School",
        description: "4 Kms",
      },
      {
        title: "Radisson Blu",
        description: "6 Kms",
      },
      {
        title: "Lifeline Hospital",
        description: "5 Kms",
      },
      {
        title: " Airport ",
        description: "10 Kms",
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
    description: "Experience godrej urban retreat kharadi from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/kharadi/images/banner-2.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience godrej urban retreat kharadi from the comfort of your home",
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
        src: "/kharadi/images/ride.png",
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
        "Godrej Urban Retreat has been registered via MahaRERA registration number: P52100050128 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Godrej Urban Retreat",
          reraNumber: "Project Maha RERA - P52100050128",
          qrCode: "/kharadi/images/code.jpg",
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
        description: "RERA Project Registration No.: P52100050128",
      },
      {
        title: "Site Address",
        description: "Godrej Urban Retreat: Godrej Park Springs, Kharadi-Manjari Road, Pune 412307.",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Godrej Urban Retreat | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Runwal Gardens Dombivali. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Runwal Gardens Dombivali",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Godrej Urban Retreat | Terms & Conditions",
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
      title: "Godrej Urban Retreat | Privacy Policy",
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
      title: "Godrej Urban Retreat | Cookies Policy",
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
      title: "Godrej Urban Retreat | Thank You",
      description: "Thank you for your interest in Godrej Urban Retreat Kharadi.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_59",
      publicId: "7d8ee9b19e759225721aa4c65c2381d7",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Runwal Gardens Dombivli",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from godrej urban retreat kharadi",
      },
    },
  },
};

export type KharadiConfig = typeof kharadiConfig;
