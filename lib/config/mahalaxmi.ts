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
  name: "Runwal 7 Mahalaxmi",
  about:
    "Founded in 1978, Runwal Group excels in establishing sprawling residential complexes, retail shopping malls, and commercial spaces. With a mission of developing standout landmarks rather than mere living spaces, Runwal homes are known for their aesthetic designs, plush interiors, and central green landscaping. Over the course of 40 years, the firm has become a leading face in real estate and changed the Mumbai skyline.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Sane Guruji Marg, Mumbai",
  },
  gtmId: "GTM-54C85XZ6",
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
        "Download the brochure to learn more about Runwal 7 Mahalaxmi.",
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
        alt: "Runwal 7 Mahalaxmi Interior",
      },
      {
        src: "/mahalaxmi/images/banner-2.png",
        alt: "Runwal 7 Mahalaxmi Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Runwal 7 Mahalaxmi.",
      },
      title: "Welcome to Runwal 7 Mahalaxmi",
      description: `Runwal 7 Mahalaxmi - Experience exclusive luxury and contemporary living in the heart of Mahalaxmi, South Mumbai. Crafted for discerning individuals, these 2, 3 BHK, and Jodi apartments feature grand sundecks and offer breathtaking views of the Mumbai skyline and the Eastern Coast from higher floors. With a remarkable 11-foot clear floor-to-ceiling height, the apartments boast expansive spaces filled with natural light. Enhancing the luxurious living experience, the development offers 1.6 acres of podium-level amenities, including a gymnasium, clubhouse, multipurpose hall, indoor games, swimming pool, business center, yoga and meditation zone, tennis court, and a kids' play area.

      Located in a prime neighborhood of South Mumbai, Runwal 7 Mahalaxmi provides unparalleled convenience. Prestigious institutions such as Finland International School, DSB International School, and DY Patil International School are nearby, along with renowned healthcare facilities like Jaslok Hospital, Siddhachal Hospital, and Wockhardt Hospital. Proximity to One World Centre, Phoenix Palladium, Mahalakshmi Race Course, IKEA, and Lodha Excelus adds to the appeal. Nestled beside NM Joshi Road, the residence offers excellent connectivity to the Eastern Express Highway, Senapati Bapat Road, and Atal Setu, with Chinchpokli railway station and Lower Parel monorail station just a short walk away. Runwal 7 Mahalaxmi stands as a distinguished landmark, delivering unparalleled opulence and comfort in Mahalaxmi.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Mahalaxmi by Runwal Group",
      points: [
        { text: "Get Exclusive Payment Plan & Benefits" },
        { text: "Largest Clubhouse in South Mumbai" },
        { text: "Eastern Harbour & Atal Setu Views" },
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
        title: "Luxurious 2, 3 BHK & Jodi Starts at",
        value: "₹ 4.07 Cr",
        suffix: "All Inc",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3 BHK & Jodi residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "784 Sq.ft.",
        price: "₹3.92 Cr",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "814 Sq.ft.",
        price: "₹4.06 Cr",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "873 Sq.ft.",
        price: "₹4.34 Cr",
        suffix: "All Inc",
      },
      {
        type: "3 BHK",
        carpetArea: "1103 Sq.ft.",
        price: "₹5.40 Cr",
        suffix: "All Inc",
      },
      {
        type: "3 BHK",
        carpetArea: "1201 Sq.ft.",
        price: "₹6.24 Cr Cr",
        suffix: "All Inc",
      },
      {
        type: "3 BHK",
        carpetArea: "1266 Sq.ft.",
        price: "₹6.58 Cr",
        suffix: "All Inc",
      },
      {
        type: "Jodi",
        carpetArea: "1698 Sq.ft.",
        price: "₹8.83 Cr",
        suffix: "All Inc",
      },
      {
        type: "Jodi",
        carpetArea: "1997 Sq.ft.",
        price: "₹10.38 Cr",
        suffix: "All Inc",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/gardencity/images/costing.webp",
        alt: "Runwal 7 Mahalaxmi Costing",
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
        description: "Explore the layout of Runwal 7 Mahalaxmi",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-784 Sq.ft.",
          image: "/mahalaxmi/images/floor-1.webp",
          category: "2 BHK",
        },
        {
          type: "3 BHK-814 Sq.ft.",
          image: "/mahalaxmi/images/floor-2.webp",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Runwal 7 Mahalaxmi",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Runwal 7 Mahalaxmi",
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
        title: "Pet Park",
        image: "/mahalaxmi/images/amenities/pet-park.png",
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
      description: "Download the gallery of Runwal 7 Mahalaxmi",
    },
    images: [
      {
        title: "",
        image: "/mahalaxmi/images/gallery/gallery_1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/mahalaxmi/images/gallery/gallery_2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/mahalaxmi/images/gallery/gallery_3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/mahalaxmi/images/gallery/gallery_4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d183855.96490111478!2d72.865987!3d19.045949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e1b83b03a9%3A0xbb4c252a85354523!2sRunwal%20Group!5e1!3m2!1sen!2sin!4v1737277130399!5m2!1sen!2sin",
    image: {
      src: "/mahalaxmi/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Senapati Bapat Marg",
        description: "5 mins",
      },
      {
        title: "Coastal Road",
        description: "15 Mins",
      },
      {
        title: "Lower Parel Monorail Station",
        description: "12 Mins",
      },
      {
        title: "Bandra Worli Sea Link",
        description: "15 Mins",
      },
      {
        title: "Eastern Express Highway",
        description: "15 Mins",
      },
      {
        title: "CSM International Airport",
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
    description: "Experience Runwal 7 Mahalaxmi from the comfort of your home",
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
      "Experience Runwal 7 Mahalaxmi from the comfort of your home",
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
        "Runwal 7 Mahalaxmi has been registered via MahaRERA registration number: PR1170002400011 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Runwal 7 Mahalaxmi",
          reraNumber: "Project MahaRERA - PR1170002400011",
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
        description: "RERA Project Registration No.: PR1170002400011",
      },
      {
        title: "Site Address",
        description: " Runwal 7 Mahalaxmi: N M Joshi Marg, Sane Guruji Marg, Mumbai, Maharashtra 400011",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Runwal Gardens Dombivli | Price, Floor Plans, Amenities | Request Brochure",
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
      title: "Runwal Gardens Dombivali | Terms & Conditions",
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
      title: "Runwal Gardens Dombivali | Privacy Policy",
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
      title: "Runwal Gardens Dombivali | Cookies Policy",
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
      title: "Runwal Gardens Dombivali | Thank You",
      description: "Thank you for your interest in Runwal Gardens Dombivali",
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
        subject: "New Enquiry from Runwal 7 Mahalaxmi",
      },
    },
  },
};

export type MahalaxmiSiteConfig = typeof mahalaxmiConfig;
