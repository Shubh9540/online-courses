const fs = require('fs');

let typesStr = fs.readFileSync('types/templates.types.ts', 'utf8');

// Fix ContactUsData infoBoxes
typesStr = typesStr.replace(
  `  infoBoxes?: {
    icon: string;
    title: string;
    desc1: string;
    desc2: string;
  }[];`,
  `  infoBoxes?: {
    id: string;
    icon: string;
    title: string;
    desc1?: string;
    desc2?: string;
    description?: string;
  }[];`
);

// Replace EnrollData
const oldEnrollData = `export interface EnrollData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  form: {
    title: string;
    description: string;
    buttonText: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    phonePlaceholder?: string;
    coursePlaceholder?: string;
    messagePlaceholder?: string;
    coursesList?: string[];
  };
}`;

const newEnrollData = `export interface EnrollData {
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
  };
  infoBoxes: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
}`;

typesStr = typesStr.replace(oldEnrollData, newEnrollData);
fs.writeFileSync('types/templates.types.ts', typesStr);
