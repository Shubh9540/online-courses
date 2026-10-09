const fs = require('fs');

let typesStr = fs.readFileSync('types/templates.types.ts', 'utf8');

const oldContactUsData = `export interface ContactUsData {
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
    id: string;
    icon: string;
    title: string;
    desc1?: string;
    desc2?: string;
    description?: string;
  }[];
}`;

const newContactUsData = `export interface ContactUsData {
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
    privacyText?: string;
  };
  image?: string;
  mapUrl: string;
  infoBoxes?: {
    id: string;
    icon: string;
    title: string;
    desc1?: string;
    desc2?: string;
    description?: string;
  }[];
}`;

typesStr = typesStr.replace(oldContactUsData, newContactUsData);
fs.writeFileSync('types/templates.types.ts', typesStr);
