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

export const panvelConfig = {
  name: "Godrej Green Tarraces Panvel",
  about:
    "Founded in 1990, Godrej Properties is a leading real estate developer in India with a range of residential townships, business parks, and mixed-use properties as part of its portfolio. The firm's properties stand out for their lovely architecture, quality residences, tranquil lush environs, and use of cutting-edge technologies. With a grand legacy in the real estate industry, Godrej Properties has changed the skyline of many cities in the country",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Phase 3, Hinjawadi,Pune",
  },
  gtmId: "GTM-KJKSVSP4",
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
        "Download the brochure to learn more about Godrej Green Tarraces Panvel.",
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
        src: "/evergreen/images/banner-1.png",
        alt: "Godrej Green Tarraces Panvel Interior",
      },
      {
        src: "/evergreen/images/banner-2.png",
        alt: "Godrej Green Tarraces Panvel Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Godrej Green Tarraces Panvel.",
      },
      title: "Welcome to Godrej Green Tarraces Panvel",
      description: `Godrej Panvel, a premium development by Godrej Properties, offers thoughtfully designed 1, 2, and 3 BHK luxury apartments within a vast 107-acre golf township featuring a 9-hole golf course. This expansive community is designed for a refined lifestyle, boasting over 37 premium amenities, including a clubhouse, landscaped gardens, swimming pools, a fully equipped gym, a multi-purpose court, and a dedicated kids' play area. The highlight of this township is its sprawling golf arena, providing residents with a serene and luxurious living experience surrounded by lush greenery.  

      Strategically located, Godrej Panvel ensures seamless connectivity with direct access to NH4 and quick access to key transit points. The Mumbai-Pune Expressway is just 2 minutes away, while the upcoming Navi Mumbai International Airport can be reached in 15 minutes. Additionally, residents benefit from proximity to top educational institutions, healthcare facilities, and shopping centers, making everyday conveniences easily accessible. This premium township combines luxury, leisure, and connectivity, offering an unmatched lifestyle in one of the fastest-growing regions of Navi Mumbai.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Hinjewadi, Pune by Godrej Properties",
      points: [
        { text: "Option To Pay 1% Every Month" },
        { text: "Avail Stamp Duty Benefits" },
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
        title: "Luxurious 2,3 BHK Starts from",
        value: "₹ 99 Lacs",
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
        type: "2 BHK Olive",
        carpetArea: "657 Sq.Ft.",
        price: "99 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Titan",
        carpetArea: "753 Sq.Ft.",
        price: "1.15Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Panorama",
        carpetArea: "988 Sq. Ft.",
        price: "1.49Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Titan",
        carpetArea: "1071 Sq. Ft.",
        price: "1.70Cr",
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
        alt: "Godrej Green Tarraces Panvel Costing",
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
        description: "Explore the layout of Godrej Green Tarraces Panvel",
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
        description: "Explore the layout of Godrej Green Tarraces Panvel",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Godrej Green Tarraces Panvel",
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
      description: "Download the gallery of Godrej Green Tarraces Panvel",
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
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11499.177101140709!2d73.183491!3d18.927459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e59076441ddf%3A0xf1eaba60d2afc841!2sThe%20Highlands%2C%20Godrej%20City%2C%20Panvel!5e1!3m2!1sen!2sin!4v1739625231666!5m2!1sen!2sin",
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
      "Experience Godrej Green Tarraces Panvel from the comfort of your home",
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
        "Godrej Green Tarraces Panvel has been registered via MahaRERA registration number: P52100078240 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Godrej Green Tarraces Panvel",
          reraNumber: "Project MahaRERA - P5200052251",
          qrCode: "/evergreen/images/qrcode.webp",
        },
        {
          title: "Godrej Green Tarraces Panvel",
          reraNumber: "Project MahaRERA - P52000056268",
          qrCode: "/evergreen/images/qrcode.webp",
        },
        {
          title: "Godrej Green Tarraces Panvel",
          reraNumber: "Project MahaRERA - P52000049669",
          qrCode: "/evergreen/images/qrcode.webp",
        },
        {
          title: "Godrej Green Tarraces Panvel",
          reraNumber: "Project MahaRERA - P52000030367",
          qrCode: "/evergreen/images/qrcode.webp",
        },
        {
          title: "Godrej Green Tarraces Panvel",
          reraNumber: "Project MahaRERA - P52000026790",
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
        description: "RERA Project Registration No.: P5200052251 | P52000056268 | P52000049669 | P52000030367 P52000026790",
      },
      {
        title: "Site Address",
        description: "Godrej Green Tarraces Panvel: near Megapolis Circle, Phase 3, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Pune, Maharashtra 411057",
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
      "Godrej Green Tarraces Panvel | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Godrej Green Tarraces Panvel. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Godrej Green Tarraces Panvel",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Godrej Green Tarraces Panvel | Terms & Conditions",
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
      title: "Godrej Green Tarraces Panvel | Privacy Policy",
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
      title: "Godrej Green Tarraces Panvel | Cookies Policy",
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
      title: "Godrej Green Tarraces Panvel | Thank You",
      description: "Thank you for your interest in Godrej Green Tarraces Panvel.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_99",
      publicId: "54e9a0f1647c7bd8b09651637acd51b4",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Godrej Township Panvel",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Godrej Green Tarraces Panvel",
      },
    },
  },
};

export type PanvelConfig = typeof panvelConfig;
