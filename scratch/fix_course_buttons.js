const fs = require('fs');

// 1. Update Types
let typesStr = fs.readFileSync('types/templates.types.ts', 'utf8');

const oldCourseItem = `export interface CourseItem {
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
}`;

const newCourseItem = `export interface CourseItem {
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
  enrollText?: string;
  enrollUrl?: string;
  contactText?: string;
  contactUrl?: string;
}`;

typesStr = typesStr.replace(oldCourseItem, newCourseItem);
fs.writeFileSync('types/templates.types.ts', typesStr);

// 2. Update JSON
let dataStr = fs.readFileSync('data/templates.json', 'utf8');
let dataObj = JSON.parse(dataStr);

let courses = dataObj.categories.OnlineCourse.sections.Courses.variants.OnlineCourseCourses1.courses;
courses.forEach(c => {
  c.enrollText = "Enroll Now";
  c.enrollUrl = "/enroll";
  c.contactText = "Contact Us";
  c.contactUrl = "/contact";
});

fs.writeFileSync('data/templates.json', JSON.stringify(dataObj, null, 2));
