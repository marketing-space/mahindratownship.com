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

const route = routes.Avante;

export const avanteConfig = {
  name: "Sheth Avante",
  about:
    "Founded in 1987, Ashwin Sheth Group specialises in developing modern residential complexes, luxury addresses, shopping malls, and commercial workspaces. The firm's properties are majestic landmarks that stand out for their elegant design, lovely landscaping, and state-of-the-art amenities. With a legacy of 3 decades, the company has developed a range of properties across the Western Suburbs, Mulund, Thane, and South Mumbai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address: "Kanjurmarg West, Bhandup West, Mumbai",
  },
  gtmId: "GTM-WGM76DJ2",
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
        "Download the brochure to learn more about Sheth Avante.",
    },
  },

  branding: {
    logo: "/avante/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/avante/images/banner-1.png",
        alt: "Sheth Avante Interior",
      },
      {
        src: "/avante/images/banner-2.png",
        alt: "Sheth Avante Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Sheth Avante.",
      },
      title: "Welcome to Sheth Avante",
      description: `Nestled in the upscale lanes of Kanjurmarg, Sheth Avante offers an urban-chic residential experience that redefines city living. Its towering structures house elegantly designed 1, 2, and 3 BHK residences, featuring spacious layouts, modern fittings, and a host of unique amenities. Residents can indulge in exclusive experiences, from refreshing swims in the infinity pool and lively gatherings on the rooftop deck to peaceful moments in the library or serene strolls through the landscaped gardens. Every aspect of Sheth Avante is designed to offer a lifestyle that is both sophisticated and fulfilling.  

      Located just minutes from Powai, Kanjurmarg provides easy access to top-tier schools, healthcare facilities, fine dining restaurants, and entertainment hubs. The property boasts excellent connectivity across Mumbai, with key transport links such as JVLR, SCLR, Eastern Express Highway, and Kanjurmarg Railway Station just 5 to 10 minutes away. At Sheth Avante, residents enjoy the luxury of convenience—effortless commutes, vibrant social interactions, and exciting weekend escapades, all within reach of a dynamic urban environment.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Kanjurmarg by Sheth Developers",
      points: [
        { text: "Spot Booking Offer" },
        { text: "Early Buy Discount" },
        { text: "Flexipay For First 100 Customers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "18 Acres",
        },
        {
          title: "Floors",
          value: "25 Storeys",
        },
        {
          title: "Possession",
          value: "March-2024",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Starts at",
        value: "1.03 Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of Sea Facing 2, 3, and 4 BHK Apartments , each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "446 sq. ft",
        price: "1.03 Cr*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "555 sq.ft.",
        price: "1.55 Cr*",
        suffix: "All Inclusive",
      },
      {
        type: "2 BHK Large",
        carpetArea: "737 Sq.ft.",
        price: "2.05 Cr*",
        suffix: "All Inclusive",
      },
      {
        type: "3 BHK with Balcony",
        carpetArea: "891 Sq.ft.",
        price: "2.50 Cr*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/avante/images/costing.webp",
        alt: "Sheth Avante Costing",
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
        src: "/avante/images/master-plan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Sheth Avante",
      },
    },
    floorPlans: {
      categories: ["All","2 BHK","3 BHK", "4 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-446 Sq.ft.",
          image: "/avante/images/floor-1.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-555 Sq.ft.",
          image: "/avante/images/floor-2.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-737 Sq.ft.",
          image: "/avante/images/floor-3.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-891 Sq.ft.",
          image: "/avante/images/floor-4.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Sheth Avante",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Sheth Avante",
    },
    amenities: [
      {
        title: "Sky Cafe",
        image: "/avante/images/amenities/sky-cafe.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/avante/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/avante/images/amenities/Gymnasium.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/avante/images/amenities/sky-club.png",
        description: "",
      },
      {
        title: "Library",
        image: "/avante/images/amenities/library.png",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/avante/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Creche",
        image: "/avante/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Picnic & BBQ Pavilion",
        image: "/avante/images/amenities/picnic-bbq-pavilion.png",
        description: "",
      },
      {
        title: "Theatre",
        image: "/avante/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/avante/images/amenities/supermarket.png",
        description: "",
      },
      {
        title: "Parking",
        image: "/avante/images/amenities/parking.png",
        description: "",
      },
      {
        title: "Yoga Studio",
        image: "/avante/images/amenities/yoga-1.webp",
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
      description: "Download the gallery of Sheth Avante",
    },
    images: [
      {
        title: "",
        image: "/avante/images/gallery/g1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/avante/images/gallery/g2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/avante/images/gallery/g3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/avante/images/gallery/g4.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d22970.24442689449!2d72.926845!3d19.13063!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1739947801419!5m2!1sen!2sin",
    image: {
      src: "/avante/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "DMart",
        description: "3 mins",
      },
      {
        title: "St. Xaviers High School & Junior College ",
        description: "5 Mins",
      },
      {
        title: "JVLR",
        description: "15 Mins",
      },
      {
        title: "Dr. L H Hiranandani Hospital",
        description: "15 Mins",
      },
      {
        title: "International Airport",
        description: "25 Mins",
      },
      {
        title: "R City Mall",
        description: "25 Mins",
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
    description: "Experience Sheth Avante from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/avante/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Sheth Avante from the comfort of your home",
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
        src: "/avante/images/ride.png",
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
        "Sheth Avante has been registered via MahaRERA registration number: P51800001140 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Sheth Avante",
          reraNumber: "Project MahaRERA - P51800001140",
          qrCode: "/avante/images/qr.webp",
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
        description: "RERA Project Registration No.: P51800001140",
      },
      {
        title: "Site Address",
        description: " Sheth Avante:  4WJG+3Q8, Opposite Naval Dock Yard Colony,L.B.S Marg,Kanjur Marg Station, Lal Bahadur Shastri Marg, Ambedkar Nagar, Kanjurmarg West, Bhandup West, Mumbai, Maharashtra 400078",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Sheth Avante | Price, Floor Plans, Amenities | Request Brochure",
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
      title: "Sheth Avante | Terms & Conditions",
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
      title: "Sheth Avante | Privacy Policy",
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
      title: "Sheth Avante | Cookies Policy",
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
      title: "Sheth Avante | Thank You",
      description: "Thank you for your interest in Sheth Avante",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_10",
      publicId: "5cf6477e215e5b0fb848d582679ad5d0",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Sheth Township Avante",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Sheth Avante",
      },
    },
  },
};

export type HorizonConfig = typeof avanteConfig;
