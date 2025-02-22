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

const route = routes.VasantLawns;


export const vasantLawnsConfig = {
  name: "Sheth Vasant Lawns",
  about:
    "Founded in 1987, Ashwin Sheth Group specialises in developing modern residential complexes, luxury addresses, shopping malls, and commercial workspaces. The firm's properties are majestic landmarks that stand out for their elegant design, lovely landscaping, and state-of-the-art amenities. With a legacy of 3 decades, the company has developed a range of properties across the Western Suburbs, Mulund, Thane, and South Mumbai.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    email: "sales@narangprivado.com",
    address: "Thane West, Mumbai",
  },
  gtmId: "GTM-WDH5LX44",
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
        "Download the brochure to learn more about Sheth Vasant Lawns.",
    },
  },

  branding: {
    logo: "/vasantlawns/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/vasantlawns/images/banner-1.webp",
        alt: "Sheth Vasant Lawns.", 
      },
      {
        src: "/vasantlawns/images/banner-2.webp",
        alt: "Sheth Vasant Lawns Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Sheth Vasant Lawns.",
      },
      title: "Welcome to Sheth Vasant Lawns",
      description: `Discover the elegance of Sheth Vasant Lawns in Thane, where luxury meets sophistication. This lavish residential complex is home to the stunning Fern tower, offering exquisitely designed 2, 3, and 4 BHK apartments with plush interiors and breathtaking views of the majestic Yeoor Hills. The thoughtfully planned open spaces and lush green lawns create a serene ambiance, while over 40 lifestyle amenities ensure that every moment spent here is truly special. Whether it's a leisurely stroll through the landscaped gardens or indulging in recreational activities, Sheth Vasant Lawns offers an enriching living experience.  

      Strategically located along the Eastern Express Highway, Vasant Lawns places you at the heart of Thane’s prestigious Platinum Belt. Residents enjoy seamless connectivity to top schools, healthcare facilities, shopping malls, and major commute routes. With Viviana Mall, Jupiter Hospital, and Singhania School just five minutes away, convenience is always within reach. The unique urban-green landscape allows you to admire the dazzling city skyline at night while still embracing the soothing sounds of nature, offering the perfect blend of modernity and tranquility.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Thane by Sheth Developers",
      points: [
        { text: "Price Rise By 4Lacs After Month End" },
        { text: "Pay Just 10% Now" },
        { text: "₹10,000 Monthly For Next 2 Years" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "7 Acres",
        },
        {
          title: "Floors",
          value: "2B + G + 32 Storeys",
        },
        {
          title: "Possession",
          value: "June 2026",
        },
      ],
      price: {
        title: "Luxurious 2 & 3 BHK Starts from",
        value: "1.55 Cr",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "840 Sq.ft.",
        price: "1.55 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1120 Sq.ft.",
        price: "2.07 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1068 Sq.ft.",
        price: "2.60 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/vasantlawns/images/costing.webp",
        alt: "Sheth Vasant Lawns.",
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
        src: "/vasantlawns/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Sheth Vasant Lawns.",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-840 Sq.ft.",
          image: "/vasantlawns/images/plan-1.jpg",
          category: "2 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Sheth Vasant Lawns.",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Sheth Vasant Lawns.",
    },
    amenities: [
      {
        title: "Banquet Hall",
        image: "/vasantlawns/images/amenities/banquet-hall.png",
        description: "",
      },
      {
        title: "Cricket Pitch",
        image: "/vasantlawns/images/amenities/creche.png",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/vasantlawns/images/amenities/Gymnasium.png",
        description: "", 
      },
      {
        title: "Library",
        image: "/vasantlawns/images/amenities/library.png",
        description: "",
      },
      {
        title: "Carrom & Chess Room",
        image: "/vasantlawns/images/amenities/Carrom & Chess Room.png",
        description: "",
      },
      {
        title: "Parking",
        image: "/vasantlawns/images/amenities/parking.png",
        description: "",
      },
      {
        title: "Pet Park",
        image: "/vasantlawns/images/amenities/pet-park.png",
        description: "",
      },
      {
        title: "Party Lawn",
        image: "/vasantlawns/images/amenities/party.webp",
        description: "",
      },
      {
        title: "Supermarket",
        image: "/vasantlawns/images/amenities/supermarket.png",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/vasantlawns/images/amenities/swimming-pool.png",
        description: "",
      },
      {
        title: "Private Theatre",
        image: "/vasantlawns/images/amenities/theatre.png",
        description: "",
      },
      {
        title: "Sky Club",
        image: "/vasantlawns/images/amenities/sky-club.png",
        description: "",
      },
    ],
    stats: {
      title: "40+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Sheth Vasant Lawns.",
    },
    images: [
      {
        title: "",
        image: "/vasantlawns/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/vasantlawns/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/vasantlawns/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/vasantlawns/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45917.84494556292!2d72.97432!3d19.211878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9412e66b20d%3A0x36c7e21ac72b6c03!2sPampas%20Vasant%20Lawns!5e1!3m2!1sen!2sin!4v1739952563309!5m2!1sen!2sin",
    image: {
      src: "/vasantlawns/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Thane Railway Station",
        description: "18 Mins",
      },
      {
        title: "Eastern Express Highway",
        description: "2 Mins",
      },
      {
        title: "Viviana Mall ",
        description: "4 Mins",
      },
      {
        title: "Cadbury Junction",
        description: "8 Mins",
      },
      {
        title: "Singhania School",
        description: "6 Mins",
      },
      {
        title: "Jupiter Hospital",
        description: "5 Mins",
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
    description: "Experience Sheth Vasant Lawns from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/vasantlawns/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Sheth Vasant Lawns from the comfort of your home",
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
        src: "/vasantlawns/images/ride.png",
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
        "Sheth Vasant Lawns is registered via MahaRERA registration number: P51700003655 and is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
      details: [
        {
          title: "Sheth Vasant Lawns",
          reraNumber: "Project Maha RERA - P51700003655",
          qrCode: "/vasantlawns/images/qr.webp",
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
        description:
          "MAHA RERA Project Registration No.: P51700003655.",
      },
      {
        title: "Site Address",
        description:
          "Site Address : Sheth Vasant Lawns: 6X5F+WFF, Laxmi Nagar, Thane West, Thane, Maharashtra 400601",
      },
      {
        title: "Corporate Office",
        description:
          "Corporate Office : Sheth Realty S-7-4, Pinnacle Business Park, Mahakali Caves Rd, Shanti Nagar, Andheri East, Mumbai, Maharashtra 400093",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "Sheth Vasant Lawns | Luxury Apartments in Thane",
    description:
      "Experience luxury living at Sheth Vasant Lawns, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "Sheth Vasant Lawns",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Sheth Vasant Lawns | Terms & Conditions",
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
      title: "Sheth Vasant Lawns | Privacy Policy",
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
      title: "Sheth Vasant Lawns | Cookies Policy",
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
      title: "Sheth Vasant Lawns | Thank You",
      description: "Thank you for your interest in Sheth Vasant Lawns.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_102",
      publicId: "bab5217442d849044e6232864809409a",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Sheth Township Vasant Lawns",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Sheth Vasant Lawns.",
      },
    },
  },
};

export type VasantLawnsConfig = typeof vasantLawnsConfig;
