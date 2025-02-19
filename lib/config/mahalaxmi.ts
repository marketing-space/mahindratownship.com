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

const route = routes.Mahalaxmi;

export const mahalaxmiConfig = {
  name: "Godrej Avenue 11 Launching Avalon",
  about:
    "Founded in 1990, Godrej Properties is a leading real estate developer in India with a range of residential townships, business parks, and mixed-use properties as part of its portfolio. The firm's properties stand out for their lovely architecture, quality residences, tranquil lush environs, and use of cutting-edge technologies. With a grand legacy in the real estate industry, Godrej Properties has changed the skyline of many cities in the country",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Phase 3, Hinjawadi,Pune",
  },
  gtmId: "GTM-KTW43JMD",
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
        "Download the brochure to learn more about Godrej Avenue 11 Launching Avalon.",
    },
  },

  branding: {
    logo: "/mahalaxmi/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/mahalaxmi/images/banner-1.png",
        alt: "Godrej Avenue 11 Launching Avalon Interior",
      },
      {
        src: "/mahalaxmi/images/banner-2.png",
        alt: "Godrej Avenue 11 Launching Avalon Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Godrej Avenue 11 Launching Avalon.",
      },
      title: "Welcome to Godrej Avenue 11 Launching Avalon",
      description: `Godrej Avenue 11 is a remarkable residential landmark in the prime locale of Saat Rasta, Mahalaxmi. The newly launched Avalon Tower offers elegantly designed 3 BHK and 4 BHK residences, thoughtfully crafted with premium features and meticulous attention to detail. These homes provide a seamless blend of aesthetics and functionality, ensuring privacy and sophistication. Residents can enjoy breathtaking views of the Mumbai coastline while experiencing the refreshing sea breeze. The development also features a wide range of lifestyle amenities, including a rooftop infinity pool, banquet hall, gymnasium, yoga zone, kids’ play area, indoor games room, jogging track, and a multipurpose sports court.  

      Situated in a vibrant and well-connected neighborhood, Godrej Avenue 11 offers easy access to top educational institutions, healthcare facilities, and recreational hubs such as DY Patil International School, Hill Spring International School, Wockhardt Hospital, Balaji Hospital, Mahalaxmi Race Course, Phoenix Palladium, and Peninsula Business Park. The Sant Gadge Maharaj Chowk Monorail Station and Mahalaxmi Railway Station are within walking distance, ensuring seamless connectivity to key business districts. Major roadways like Senapati Bapat Road and the Eastern Express Highway enhance accessibility, while the Bandra-Worli Sea Link provides a direct route to Chhatrapati Shivaji Maharaj International Airport. Combining luxury, convenience, and excellent connectivity, Avalon at Godrej Avenue 11 offers an unparalleled living experience in Mahalaxmi.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Mahalaxmi, Mumbai by Godrej Properties",
      points: [
        { text: "A Grand Multi-Level Club House" },
        { text: "Comfy Living With 80% Open Spaces" },
        { text: "Luxury & Ultra Spacious Apartments" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "4 Acres",
        },
        {
          title: "Floors",
          value: "G+69 Storeys",
        },
        {
          title: "Possession",
          value: "2027",
        },
      ],
      price: {
        title: "Majestic 3 & 4 BHK starts from",
        value: "9.90 Cr*",
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
        type: "3 BHK",
        carpetArea: "1650 Sq.Ft.",
        price: "9.90 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK",
        carpetArea: "2212 Sq.Ft.",
        price: "13.05 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK Regal",
        carpetArea: "2212 Sq. Ft.",
        price: "13.06 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK Royal",
        carpetArea: "2366 Sq.Ft.",
        price: "13.50 Cr",
        suffix: "Onwards",
      },
      {
        type: "4 BHK Royal",
        carpetArea: "2366 Sq. Ft.",
        price: "13.51 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/mahalaxmi/images/costing.webp",
        alt: "Godrej Avenue 11 Launching Avalon Costing",
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
        src: "/mahalaxmi/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Godrej Avenue 11 Launching Avalon",
      },
    },
    floorPlans: {
      categories: ["All","3 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "3 BHK-1650 Sq.ft.",
          image: "/mahalaxmi/images/floor1.webp",
          category: "3 BHK",
        },
        {
          type: "4 BHK-2212 Sq.ft.",
          image: "/mahalaxmi/images/floor2.webp",
          category: "4 BHK",
        },
        {
          type: "4 BHK Regal-2212 Sq.ft.",
          image: "/mahalaxmi/images/floor3.webp",
          category: "4 BHK",
        },
        {
          type: "4 BHK Royal-2366 Sq.ft.",
          image: "/mahalaxmi/images/floor2.webp",
          category: "4 BHK",
        },
        {
          type: "4 BHK Royal-2366 Sq.ft.",
          image: "/mahalaxmi/images/floor3.webp",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Godrej Avenue 11 Launching Avalon",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Godrej Avenue 11 Launching Avalon",
    },
    amenities: [
      {
        title: "Sky Cafe",
        image: "/mahalaxmi/images/amenities/sky-cafe.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/mahalaxmi/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Gumnasium",
        image: "/mahalaxmi/images/amenities/Gymnasium.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/mahalaxmi/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/mahalaxmi/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/mahalaxmi/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/mahalaxmi/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/mahalaxmi/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/mahalaxmi/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/mahalaxmi/images/amenities/supermarket.png",
        description: "",
      },
      {
        title: "Parking",
        image: "/mahalaxmi/images/amenities/parking.png",
        description: "",
      },
      {
        title: "Observatory Deck",
        image: "/mahalaxmi/images/amenities/observatorydeck.webp",
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
      description: "Download the gallery of Godrej Avenue 11 Launching Avalon",
    },
    images: [
      {
        title: "",
        image: "/mahalaxmi/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/mahalaxmi/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/mahalaxmi/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/mahalaxmi/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.094961108469!2d73.68759!3d18.576795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb8a63690447%3A0x58ffd3d5c7c2b618!2sGodrej%20mahalaxmi%20Square!5e1!3m2!1sen!2sin!4v1737886003903!5m2!1sen!2sin",
    image: {
      src: "/mahalaxmi/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Wockhardt Hospitals",
        description: "2 mins",
      },
      {
        title: "Mahalaxmi Station",
        description: "7 Mins",
      },
      {
        title: "St. Agnes High School",
        description: "10 Mins",
      },
      {
        title: "Phoenix Palladium Mall",
        description: "15 Mins",
      },
      {
        title: "Lala Lajpat Rai College",
        description: "10 Mins",
      },
      {
        title: "Mahalaxmi Race Course",
        description: "12 Mins",
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
    description: "Experience Godrej mahalaxmi from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/mahalaxmi/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Godrej Avenue 11 Launching Avalon from the comfort of your home",
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
        src: "/mahalaxmi/images/ride.png",
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
        "Godrej Avenue 11 Launching Avalon has been registered via MahaRERA registration number: P51900005216 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Godrej Avenue 11 Launching Avalon",
          reraNumber: "Project MahaRERA - P51900005216",
          qrCode: "/mahalaxmi/images/qrcode.webp",
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
        description: "RERA Project Registration No.: P51900005216",
      },
      {
        title: "Site Address",
        description: "Site Address: Godrej Avenues Eleven: Sane Guruji Marg, Mahalakshmi, Mumbai, Maharashtra 400011",
      },
      {
        title: "Corporate Office",
        description: " Corporate Office:Godrej Properties: Unit No. 5C, 5th Floor, Godrej One, Pirojshanagar, Vikhroli East, Mumbai - 400 079",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Godrej Avenue 11 Launching Avalon | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Godrej Avenue 11 Launching Avalon. 3 & 4 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Godrej Avenue 11 Launching Avalon",
      "3 bhk",
      "4 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Godrej Avenue 11 Launching Avalon | Terms & Conditions",
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
      title: "Godrej Avenue 11 Launching Avalon | Privacy Policy",
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
      title: "Godrej Avenue 11 Launching Avalon | Cookies Policy",
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
      title: "Godrej Avenue 11 Launching Avalon | Thank You",
      description: "Thank you for your interest in Godrej Avenue 11 Launching Avalon.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_100",
      publicId: "bc1eb72a1e826b1c94bce2877d6c34f5",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Godrej Township Mahalaxmi",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Godrej Avenue 11 Launching Avalon",
      },
    },
  },
};

export type MahalaxmiConfig = typeof mahalaxmiConfig;
