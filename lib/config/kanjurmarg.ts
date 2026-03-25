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

const route = routes.Kanjurmarg;

export const kanjurmargConfig = {
  name: "Mahindra Rainforest",
  about:
    "Mahindra Lifespace Developers Limited is a prominent real estate and infrastructure developer in India and a part of the renowned Mahindra Group. Established in 1994 and headquartered in Mumbai, the company is known for delivering sustainable residential communities, integrated townships, and industrial ecosystems across the country.A pioneer in sustainable urban development, Mahindra Lifespaces develops residential projects under brands like “Mahindra Lifespaces” and “Mahindra Happinest,” while also creating large-scale integrated developments such as “Mahindra World City” and “Origins by Mahindra.”The company stands out for its strong commitment to environmental responsibility, with a 100% green portfolio focused on eco-friendly construction and energy-efficient living. It has set an ambitious goal of achieving carbon neutrality by 2040 and is among the early adopters in India to align with global sustainability frameworks like the Science Based Targets initiative (SBTi), reinforcing its leadership in responsible and future-ready development.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    email: "sales@narangprivado.com",
    address: "Kanjurmarg, Bhandup",
  },
  gtmId: "GTM-W9WTC923",
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
        "Download the brochure to learn more about Mahindra Rainforest.",
    },
  },

  branding: {
    logo: "/kanjurmarg/images/logo.jpeg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/kanjurmarg/images/banner-1.jpg",
        alt: "Mahindra Rainforest.",
      },
      {
        src: "/kanjurmarg/images/banner-2.jpg",
        alt: "Mahindra Rainforest Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Mahindra Rainforest.",
      },
      title: "Welcome to Mahindra Rainforest",
      description: `Mahindra Rainforest is an expansive 37-acre mixed-use development designed to seamlessly integrate modern residences, commercial spaces, and everyday conveniences in the prime locale of Kanjurmarg.

The project features a striking 9-level elevated podium and a collection of 12 iconic towers, with Phase 1 comprising 5 towers. Each tower is thoughtfully planned with just six apartments per floor, ensuring privacy and exclusivity, while every home is complemented by a private balcony that enhances openness and natural light.

Residents can indulge in over 70,000 sq. ft. of curated lifestyle amenities, alongside sustainable design elements that promote eco-friendly living. With excellent connectivity to major hubs across Mumbai, the development offers a well-balanced urban lifestyle.

Combining smart security systems, intelligently designed layouts, and expansive green open spaces, Mahindra Rainforest creates a future-ready living environment—making it a sought-after address for modern families seeking comfort, connectivity, and a premium lifestyle.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Kanjurmarg, Bhandup by Mahindra Lifespaces",
      points: [
        { text: "Flexible Payment Plan" },
        { text: "Spot Booking Offers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "37 Acres",
        },
        // {
        //   title: "Floors",
        //   value: "G+5P+32 Storeys*",
        // },
        {
          title: "Possession",
          value: "Dec 2031",
        },
      ],
      price: {
        title: "Luxury 2 & 3 BHK Starts At",
        value: "1.94 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3, 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "2 BHK",
        carpetArea: "662 –  Sq.ft. - 863 Sq.ft.",
        price: "1.94 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "968 Sq.ft. - 1300 Sq.ft.",
        price: "3 Cr*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/kanjurmarg/images/costing.webp",
        alt: "Mahindra Rainforest.",
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
        src: "/kanjurmarg/images/master-plan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Mahindra Rainforest.",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-600-900",
          image: "/kanjurmarg/images/plan-1.webp",
          category: "3 BHK",
        },
        {
          type: "3 BHK-900-1300",
          image: "/kanjurmarg/images/plan-2.webp",
          category: "4 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Mahindra Rainforest.",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Mahindra Rainforest.",
    },
    amenities: [
      {
        title: "Swimming Pool",
        image: "/kanjurmarg/images/amenities/swmming_01.webp",
        description: "",
      },
      {
        title: "Gymnasium",
        image: "/kanjurmarg/images/amenities/gym.jpg",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/kanjurmarg/images/amenities/kids-playarea.jpg",
        description: "",
      },
      {
        title: "Multipurpose Hall",
        image: "/kanjurmarg/images/amenities/multipurpose-hall.jpg",
        description: "",
      },
      {
        title: "Clubhouse",
        image: "/kanjurmarg/images/amenities/clubhouse.jpg",
        description: "",
      },
      {
        title: "Yoga & Meditation Area",
        image: "/kanjurmarg/images/amenities/yoga.jpg",
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
      description: "Download the gallery of Mahindra Rainforest.",
    },
    images: [
      {
        title: "",
        image: "/kanjurmarg/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/kanjurmarg/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/kanjurmarg/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/kanjurmarg/images/gallery/g4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.088348472108!2d72.9344364!3d19.1416838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b994ab6af9d5%3A0xd1eb56165249edc6!2sMahindra%20Lifespaces%2C%20Bhandup!5e1!3m2!1sen!2sin!4v1774089984430!5m2!1sen!2sin",
    image: {
      src: "",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "NES International School",
        description: "2 Km",
      },
      {
        title: "Pawar Public School",
        description: "3 Km",
      },
      {
        title: "Eastern Express Highway",
        description: "2 Km",
      },
      {
        title: "LBS Marg",
        description: "1.5 km",
      },
      {
        title: "Fortis Hospital Mulund",
        description: "3.5 Km",
      },
      {
        title: "Lotus Multi-Speciality Hospital",
        description: "2 Km",
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
    description: "Experience Mahindra Rainforest from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/kanjurmarg/images/banner-1.jpg",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Mahindra Rainforest from the comfort of your home",
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
        src: "/kanjurmarg/images/ride.png",
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
      description: "",
      // "Mahindra Rainforest is registered via MahaRERA registration number: P51700015517 and is available on the website <a href='https://maharera.mahaonline.gov.in/'>https://maharera.mahaonline.gov.in/</a> under registered projects.",
      details: [
        {
          title: "Mahindra Rainforest ",
          reraNumber: "",
          qrCode: "/kanjurmarg/images/coming.jpg",
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
          "MAHA RERA Project Registration No.: P51700015517.",
      },
      {
        title: "Site Address",
        description:
          "Site Address :Mahindra Lifespaces, Lal Bahadur Shastri Marg, GKW Colony, Bhandup West, Mumbai, Maharashtra 400078",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title: "Mahindra Rainforest | Luxury Apartments in Thane",
    description:
      "Experience luxury living at Mahindra Rainforest, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "thane west",
      "Mahindra Rainforest",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Mahindra Rainforest | Terms & Conditions",
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
      title: "Mahindra Rainforest | Privacy Policy",
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
      title: "Mahindra Rainforest | Cookies Policy",
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
      title: "Mahindra Rainforest | Thank You",
      description: "Thank you for your interest in Mahindra Rainforest.",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_185",
      publicId: "7af6712b22db350f63b3095f9115422c",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Mahindra Kanjura",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Mahindra Rainforest.",
      },
    },
  },
};

export type KanjurmargConfig = typeof kanjurmargConfig;
