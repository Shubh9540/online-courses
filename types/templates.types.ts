export interface HeaderContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: { id: string; label: string; url: string; hasDropdown?: boolean }[];
  contactButton: { text: string; url: string };
}



export interface HeroData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  description: string;
  image1: string;
  image2?: string;
  image3?: string;
  button1: { text: string; url: string };
  button2?: { text: string; url: string };
  floatingStats?: {
    id: string;
    icon: string;
    text1: string;
    text2?: string;
    avatars?: string[];
  }[];
  bottomStats?: {
    id: string;
    icon: string;
    number: string;
    label: string;
    bgColor?: string;
  }[];
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  description: string;
  image1: string;
  image2?: string;
  features: string[];
  contactPhone?: string;
  contactText?: string;
  button: { text: string; url: string };
  stats?: {
    experience: string;
    experienceLabel: string;
    badgeText: string;
    trustedTitle: string;
    trustedDesc: string;
  };
}

export interface WhatWeDoItem {
  id: string;
  icon: string;
  number?: string;
  title: string;
  description: string;
  url?: string;
}

export interface WhatWeDoData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  subheading?: string;
  description?: string;
  image?: string;
  bgImage?: string;
  features?: WhatWeDoItem[];
  steps?: WhatWeDoItem[];
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  id: string;
  subtitle?: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  imageSmall1?: string;
  imageSmall2?: string;
  features: ServiceDetailFeature[];
  overviewTitle?: string;
  overviewText?: string[];
  overviewImage?: string;
  processTitle?: string;
  processDescription?: string;
  processSteps: ServiceDetailProcessStep[];
  faqTitle?: string;
  faqs?: { id: string; question: string; answer: string }[];
  sidebar: {
    quoteForm?: {
      title: string;
      description: string;
      buttonText: string;
      servicesList: string[];
    };
    servicesList: {
      title: string;
      services: { id: string; label: string; url: string }[];
    };
    contactCard?: {
      title: string;
      description: string;
      phone: string;
      email: string;
      address: string;
      buttonText: string;
      bgImage: string;
    };
    whyChooseUsCard?: {
      title: string;
      description: string;
      buttonText: string;
      bgImage: string;
    };
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface FooterData {
  logo: string;
  bgImage?: string;
  col2Title: string;
  col3Title: string;
  col4Title: string;
  supportText: string;
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  followUsText?: string;
  hoursTitle?: string;
  hours?: string;
  hoursDays?: string;
  socialLinks: { id: string; icon: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { 
    address: string; 
    phone: string; 
    email: string; 
    phoneTitle?: string; 
    emailTitle?: string; 
    addressTitle?: string;
    hoursTitle?: string;
    hours?: string;
    hoursDays?: string;
  };
  instagram: string[];
  faqLinks?: { id: string; label: string; url: string }[];
}


export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  faqs: FaqItem[];
}

export interface ContactUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    addressTitle: string;
    address: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
  };
  form: {
    title: string;
    description: string;
    buttonText: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    phonePlaceholder?: string;
    subjectPlaceholder?: string;
    messagePlaceholder?: string;
    servicesList?: string[];
  };
  image?: string;
  mapUrl: string;
  infoBoxes?: {
    icon: string;
    title: string;
    desc1: string;
    desc2: string;
  }[];
}

export interface EnquiryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
}

export interface ServicesGridItem {
  id: string;
  title: string;
  image: string;
  icon: string;
  url: string;
}

export interface ServicesGridData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServicesGridItem[];
}

export interface SponsorItem {
  id: string;
  image: string;
  alt: string;
  url?: string;
}

export interface SponsorsData {
  subtitle: string;
  title1: string;
  title2: string;
  sponsors: SponsorItem[];
}

export interface AboutPageFeature {
  id: string;
  icon: string;
  title: string;
}

export interface AboutPageData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageFront: string;
  imageBack: string;
  experienceText1: string;
  experienceText2: string;
  features: AboutPageFeature[];
  buttonText: string;
  buttonUrl: string;
}

export interface CustomServiceDetailData {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  mainDescription: string;
  whatYouCanExpectTitle: string;
  whatYouCanExpectDescription: string;
  keyBenefitsTitle: string;
  keyBenefits: string[];
  whoCanBenefitTitle: string;
  whoCanBenefitDescription: string;
  buttonText: string;
  buttonUrl: string;
  sidebar: {
    doctorImage: string;
    doctorName: string;
    doctorRole: string;
    doctorDescription: string;
    socialLinks: { id: string; icon: string; url: string }[];
    quoteText: string;
    quoteAuthor: string;
  };
}

export interface CategoryItem {
  id: string;
  title: string;
  coursesCount: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  url: string;
}

export interface CategoryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  categories: CategoryItem[];
}

export interface CourseItem {
  id: string;
  category: string;
  image: string;
  rating: number;
  reviews: string;
  title: string;
  description: string;
  lessons: string;
  duration: string;
  level: string;
  price: string;
  originalPrice: string;
  url: string;
}

export interface CoursesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  tabs: string[];
  courses: CourseItem[];
  viewAllUrl: string;
}

export interface ProcessItem {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  bgClass: string;
}

export interface ProcessData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  items: ProcessItem[];
}

export interface InstructorItem {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface CtaData {
  title1: string;
  title2: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface InstructorsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  viewMoreUrl: string;
  contactUrl: string;
  instructors: InstructorItem[];
}

export interface OnlineCourseTemplateData {
  common: {
    aboutBreadcrumb?: any;
    servicesBreadcrumb?: any;
    contactBreadcrumb?: any;
    enquiryBreadcrumb?: any;
    Footer?: FooterData;
  };
  categories: {
    OnlineCourse: {
      templateComponents?: any;
      sections: {

        AboutPage?: { variants?: { OnlineCourseAboutPage1?: AboutPageData } };
        Header?: { variants?: { OnlineCourseHeader1?: HeaderData } };
        Hero?: { variants?: { OnlineCourseHero1?: HeroData } };
        AboutUs?: { variants?: { OnlineCourseAboutUs1?: AboutUsData } };
        Category?: { variants?: { OnlineCourseCategory1?: CategoryData } };
        Courses?: { variants?: { OnlineCourseCourses1?: CoursesData } };
        Process?: { variants?: { OnlineCourseProcess1?: ProcessData } };
        Instructors?: { variants?: { OnlineCourseInstructors1?: InstructorsData } };
        Testimonials?: { variants?: { OnlineCourseTestimonials1?: TestimonialsData } };
        Cta?: { variants?: { OnlineCourseCta1?: CtaData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        CustomServiceDetail?: { variants?: { [key: string]: CustomServiceDetailData } };
        
        WhatWeDo?: { variants?: { OnlineCourseWhatWeDo1?: WhatWeDoData } };
        Faq?: { variants?: { OnlineCourseFaq1?: FaqData } };
        Video?: { variants?: { OnlineCourseVideo1?: any } };
        ContactUs?: { variants?: { OnlineCourseContactUs1?: ContactUsData } };
        enquiry?: { variants?: { OnlineCourseEnquiry1?: EnquiryData } };
        ServicesGrid?: { variants?: { OnlineCourseServicesGrid1?: ServicesGridData } };
      };
    };
  };
}
