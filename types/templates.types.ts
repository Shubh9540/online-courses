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
  logoUrl: string;
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
  button: { text: string; url: string };
  stats?: {
    experience: string;
    experienceLabel: string;
    badgeText: string;
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
  homeUrl: string;
  scrollTopLabel: string;
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
  faqLinks?: { id: string; label: string; url: string }[];
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  paths: BreadcrumbPath[];
  bgImage?: string;
}

export interface DynamicBreadcrumbData {
  homeLabel: string;
  homeUrl: string;
  listingLabel: string;
  listingUrl: string;
  bgImage: string;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface GlobalUIData {
  notFound: NotFoundData;
  courseBreadcrumb: DynamicBreadcrumbData;
  instructorBreadcrumb: DynamicBreadcrumbData;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  fontFamily: string;
  icon: string;
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
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface ContactUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    title1?: string;
    title2?: string;
    description?: string;
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
    title1?: string;
    title2?: string;
    title?: string;
    description: string;
    buttonText: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    phonePlaceholder?: string;
    subjectPlaceholder?: string;
    messagePlaceholder?: string;
    servicesList?: string[];
    coursePlaceholder?: string;
    privacyText?: string;
  };
  image?: string;
  mapUrl: string;
  mapTitle: string;
}

export interface EnquiryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    id: string;
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    servicePlaceholder: string;
    datePlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
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

export interface CourseDetailIconItem {
  id: string;
  icon: string;
  text: string;
  usesLessonCount?: boolean;
}

export interface CourseModuleItem {
  id: string;
  number: string;
  title: string;
  lessons: string;
  time: string;
}

export interface CourseDetailUI {
  introSuffix: string;
  levelLabel: string;
  learningLabel: string;
  accessValue: string;
  accessLabel: string;
  overviewTitle1: string;
  overviewTitle2: string;
  overviewParagraphs: string[];
  learnTitle1: string;
  learnTitle2: string;
  learningOutcomes: CourseDetailIconItem[];
  curriculumTitle1: string;
  curriculumTitle2: string;
  modules: CourseModuleItem[];
  lessonTitle: string;
  lessonDuration: string;
  requirementsTitle1: string;
  requirementsTitle2: string;
  requirements: string[];
  discountText: string;
  enrollText: string;
  enrollUrl: string;
  contactText: string;
  contactUrl: string;
  sidebarFeatures: CourseDetailIconItem[];
  includesTitle: string;
  includes: CourseDetailIconItem[];
}

export interface CoursesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  courses: CourseItem[];
  viewAllUrl?: string;
  viewAllText: string;
  viewDetailsText: string;
  detailUI?: CourseDetailUI;
}

export interface CoursePageData extends Omit<CoursesData, 'viewAllUrl' | 'viewAllText'> {}

export interface ProcessItem {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  badgeClass: string;
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
  bio: string;
}

export interface InstructorPageData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  instructors: InstructorItem[];
}



export interface EnrollData {
  leftSubtitle: string;
  leftTitle1: string;
  leftTitle2: string;
  leftDescription: string;
  image: string;
  form: {
    headerTitle1: string;
    headerTitle2: string;
    headerDescription: string;
    buttonText: string;
    nameLabel?: string;
    emailLabel?: string;
    phoneLabel?: string;
    courseLabel?: string;
    batchLabel?: string;
    modeLabel?: string;
    messageLabel?: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    phonePlaceholder?: string;
    coursePlaceholder?: string;
    batchPlaceholder?: string;
    modePlaceholder?: string;
    messagePlaceholder?: string;
    coursesList?: string[];
    batchesList?: string[];
    modesList?: string[];
    secureText?: string;
    processingText: string;
    successText: string;
  };
  infoBoxes: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
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
  viewMoreText: string;
  contactText: string;
  instructors: InstructorItem[];
}

export interface MissionVisionFeature {
  id: string;
  icon: string;
  title: string;
}

export interface MissionVisionData {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  features: MissionVisionFeature[];
  image: string;
  imageAlt: string;
}

export interface CounterItem {
  id: string;
  icon: string;
  number: string;
  label: string;
}

export interface AchievementsData {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  bgImage?: string;
  counters: CounterItem[];
}


export interface ThankYouData {
  image: string;
  title1: string;
  title2: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface OnlineCourseTemplateData {
  common: {
    siteMetadata: SiteMetadataData;
    aboutBreadcrumb?: BreadcrumbData;
    coursesBreadcrumb?: BreadcrumbData;
    pricingBreadcrumb?: BreadcrumbData;
    instructorsBreadcrumb?: BreadcrumbData;
    enrollBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    enquiryBreadcrumb?: BreadcrumbData;
    faqBreadcrumb?: BreadcrumbData;
    Footer?: FooterData;
    globalUI: GlobalUIData;
  };
  categories: {
    OnlineCourse: {
      templateComponents?: TemplateComponentsData;
      sections: {
        Header?: { variants?: { OnlineCourseHeader1?: HeaderData } };
        Hero?: { variants?: { OnlineCourseHero1?: HeroData } };
        AboutUs?: { variants?: { OnlineCourseAboutUs1?: AboutUsData } };
        Mission?: { variants?: { OnlineCourseMission1?: MissionVisionData } };
        Vision?: { variants?: { OnlineCourseVision1?: MissionVisionData } };
        Achievements?: { variants?: { OnlineCourseAchievements1?: AchievementsData } };
        Category?: { variants?: { OnlineCourseCategory1?: CategoryData } };
        Courses?: { variants?: { OnlineCourseCourses1?: CoursesData } };
        CoursePage?: { variants?: { OnlineCoursePage1?: CoursePageData } };
        Process?: { variants?: { OnlineCourseProcess1?: ProcessData } };
        Instructors?: { variants?: { OnlineCourseInstructors1?: InstructorsData } };
        InstructorsPage?: { variants?: { OnlineCourseInstructorsPage1?: InstructorPageData } };
        EnrollPage?: { variants?: { OnlineCourseEnroll1?: EnrollData } };


        Testimonials?: { variants?: { OnlineCourseTestimonials1?: TestimonialsData } };
        Cta?: { variants?: { OnlineCourseCta1?: CtaData } };
        WhatWeDo?: { variants?: { OnlineCourseWhatWeDo1?: WhatWeDoData } };
        Faq?: { variants?: { OnlineCourseFaq1?: FaqData } };
        ContactUs?: { variants?: { OnlineCourseContactUs1?: ContactUsData } };
        enquiry?: { variants?: { OnlineCourseEnquiry1?: EnquiryData } };
        Pricing?: { variants?: { OnlineCoursePricing1?: PricingData } };
        ThankYouPage?: { variants?: { OnlineCourseThankYou1?: ThankYouData } };
      };
    };
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  icon: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  isPopular?: boolean;
}

export interface PricingData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  plans: PricingPlan[];
  popularText: string;
}

export interface TemplateComponentItem {
  id: string;
  key: string;
  component: string;
}

export interface TemplateComponentsData {
  shared: Record<string, string>;
  pages: Record<string, { components: TemplateComponentItem[] }>;
}

