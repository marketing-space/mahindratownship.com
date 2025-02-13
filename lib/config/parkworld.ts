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

const route = routes.Parkworld;

export const parkworldConfig = {
  name: "Godrej Park World R13",
  about:
    "The Godrej Group has a broad range of business ventures, including real estate development, fast-moving consumer products, cutting-edge engineering, furniture, security, and agri-care. Each Godrej Properties project blends a dedication to advanced design and technology with a 125-year tradition of excellence and trust. Godrej Properties brings the Godrej Group's innovation, sustainability, and excellence-focused principles to the real estate industry.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Hinjawadi, Pune",
  },
  gtmId: "GTM-GDZKJKTC",
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
        "Download the brochure to learn more about Godrej Park World R13.",
    },
  },

  branding: {
    logo: "/parkworld/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/parkworld/images/banner-1.png",
        alt: "Godrej Park World R13 Interior",
      },
      {
        src: "/parkworld/images/banner-2.png",
        alt: "Godrej Park World R13 Interior",
      },
      {
        src: "/parkworld/images/banner-3.png",
        alt: "Godrej Park World R13 Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Godrej Park World R13.",
      },
      title: "Welcome to Godrej Park World R13",
      description: `Godrej Park World R13 - Welcome to The Godrej Park World R13 – your gateway to premium living in the heart of Godrej Hinjewadi, Pune. Nestled within the thriving Godrej Hinjewadi township, Park World R13 seamlessly combines luxury with everyday convenience. Building on the success of Godrej Woodsville, this new launch introduces stunning 2 & 3 BHK Simplex and Duplex Apartments, along with premium plots, designed to elevate your living experience. 

      Strategically located near top hospitals, reputed educational institutions, luxury hotels, and entertainment hubs, everything you need is just a stone's throw away. With excellent connectivity to key areas of Pune through well-planned roads and robust infrastructure, your commute is always stress-free. Designed to cater to the varied preferences of homebuyers, Godrej Gale at Park World Hinjewadi offers a lifestyle that redefines expectations.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Hinjawadi Phase 1, Pune By Godrej Properties",
      points: [
        { text: "Zero Stamp Duty" },
        { text: "A 100-acre Township" },
        { text: "Zero Floor Rise Charges" },
        { text: "32,000 sq. ft. ClubhousesBook" },
        { text: "Special Discount: 3 Lacs" },
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
          value: "March 2029",
        },
      ],
      price: {
        title: "1,2 & 3 BHK, Simplex & Duplex Apartments Starts at",
        value: "₹ 1.25 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1,2 &3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "943 Sq.ft.",
        price: "₹ 1.25 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1201 Sq.ft.",
        price: "₹1.60 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1255 Sq.ft.",
        price: "On Request",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/parkworld/images/costings.webp",
        alt: "Godrej Park World R13 Costing",
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
        src: "/parkworld/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Godrej Park World R13",
      },
    },
    floorPlans: {
      categories: ["All","2 BHK","3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-943 Sq.ft.",
          image: "/parkworld/images/floor-1.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1201 Sq.ft.",
          image: "/parkworld/images/floor-2.jpg",
          category: "3 BHK",
        },
        
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Godrej Park World R13",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Godrej Park World R13",
    },
    amenities: [
      {
        title: "Sky Cafe",
        image: "/parkworld/images/amenities/badminton courts.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/parkworld/images/amenities/barbecue Area.webp",
        description: "",
      },
      {
        title: "Pet Park",
        image: "/parkworld/images/amenities/pet-park.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/parkworld/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/parkworld/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/parkworld/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/parkworld/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/parkworld/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/parkworld/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/parkworld/images/amenities/supermarket.png",
        description: "",
      },

      {
        title: "Business Lounge",
        image: "/parkworld/images/amenities/buissness lounge.webp",
        description: "",
      },
      {
        title: "Jacuzzi",
        image: "/parkworld/images/amenities/jacuzzi.webp",
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
      description: "Download the gallery of Godrej Park World R13",
    },
    images: [
      {
        title: "",
        image: "/parkworld/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/parkworld/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/parkworld/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/parkworld/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7447525667694!2d73.72717447372209!3d18.57851036740482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbedd0adbe05%3A0x74ccfec233fba641!2s439%2C%20Thakar%20Chowk%20Maan%20Rd%2C%20Phase%201%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e1!3m2!1sen!2sin!4v1738045646082!5m2!1sen!2sin",
    image: {
      src: "/parkworld/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Pune International Airport",
        description: "45 mins",
      },
      {
        title: "Rajiv Gandhi Infotech Park",
        description: "5 Mins",
      },
      {
        title: "Mahindra International School",
        description: "5 Mins",
      },
      {
        title: " Xion Mall",
        description: "15 Mins",
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
    description: "Experience Godrej Park World R13 from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/parkworld/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Godrej Park World R13 from the comfort of your home",
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
        src: "/parkworld/images/ride.png",
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
        "Godrej Park World R13 has been registered via MahaRERA registration number: P52100054971 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Godrej Park World R13",
          reraNumber: "Project MahaRERA - P52100054971",
          qrCode: "/parkworld/images/qr-code.webp",
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
        description: "RERA Project Registration No.: P52100054971",
      },
      {
        title: "Site Address",
        description: " Godrej Park World R13: N M Joshi Marg, Sane Guruji Marg, Mumbai, Maharashtra 400011",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Godrej Park World R13 | Price, Floor Plans, Amenities | Request Brochure",
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
      title: "Godrej Park World R13 | Terms & Conditions",
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
      title: "Godrej Park World R13 | Privacy Policy",
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
      title: "Godrej Park World R13 | Cookies Policy",
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
      formId: "__vtigerWebForm_95",
      publicId: "3e6e79e4d31ec8f56f4616c9850d077d",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Godrej Township Park World",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Godrej Park World R13",
      },
    },
  },
};

export type ParkworldConfig = typeof parkworldConfig;
