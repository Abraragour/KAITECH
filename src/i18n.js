import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import slide1 from './assets/slide1.webp';
import slide2 from './assets/slide2.webp';
import slide3 from './assets/slide3.webp';


import project1 from './assets/project1.jpg'; 
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: { home: "Home", services: "Services", about: "About Us", contact: "Contact", projects: "Projects" },
         hero: [
            { title: "Engineering Excellence", desc: "Leading construction solutions in Egypt.", img: slide1 },
            { title: "Building the Future", desc: "Innovative engineering and quality.", img: slide2 },
            { title: "Modern Infrastructure", desc: "Highest safety and quality standards.", img: slide3 }
          ],
          services: {
            subtitle: "WHAT WE DO",
            title: "OUR SERVICES",
            items: ["Construction", "Infrastructure", "Energy Solutions"],
          },
          aboutPage: {
            title: "About KAITECH",
            subtitle: "Decades of Engineering Excellence",
            story: "A leading construction and engineering firm dedicated to delivering transformative projects that serve communities with the highest safety and quality standards.",
            values: [
              { title: "Quality", desc: "We never compromise on execution quality." },
              { title: "Innovation", desc: "Using the latest global engineering technologies." },
              { title: "Integrity", desc: "Transparency is the core of our client relations." }
            ],
            experienceBox: {
              number: "+10",
              text: "YEARS EXPERIENCE"
            }
          },
          projects: {
            title: "Our Projects",
            subtitle: "Our Blueprint for the Future",
            filters: { all: "All", construction: "Construction", infra: "Infrastructure", energy: "Energy" },
items: [
              { id: 1, title: "Shorouk Housing Complex", category: "construction", img: project1 },
              { id: 2, title: "Wind Energy Station", category: "energy", img: project2 },
              { id: 3, title: "Cairo Water Network", category: "infra", img: project3 }
            ]
          },
          contact: {
  title: "Contact Us",
  desc: "We are here to help you turn your engineering vision into reality.",
  form: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message"
  },
  info: {
    phone: "Call Us",
    email: "Email Us",
    address: "Location"
  }
},
          footer: "© 2026 KAITECH Engineering. All Rights Reserved."
        }
      },
      ar: {
        translation: {
          nav: { home: "الرئيسية", services: "خدماتنا", about: "عن الشركة", contact: "اتصل بنا", projects: "مشاريعنا" },
          hero: [
            { title: "تميز هندسي بلا حدود", desc: "حلول إنشائية رائدة في مصر والشرق الأوسط.", img: slide1 },
            { title: "نبني للمستقبل", desc: "هندسة مبتكرة مع التزام تام بالجودة.", img: slide2 },
            { title: "بنية تحتية متطورة", desc: "مشاريع قومية بأعلى معايير الأمان.", img: slide3 }
          ],
          services: {
            subtitle: "ماذا نقدم",
            title: "خدماتنا",
            items: ["الإنشاءات الهندسية", "البنية التحتية", "حلول الطاقة"]
          },
          aboutPage: {
            title: "عن كايتيك",
            subtitle: "عقود من التميز الهندسي",
            story: "نحن شركة رائدة في مجال الإنشاءات والحلول الهندسية، نلتزم بتقديم مشاريع تغير وجه المستقبل وتخدم المجتمعات بأعلى معايير الأمان والجودة.",
            experienceBox: {
              number: "١٠+",
              text: "سنوات خبرة"
            },
            values: [
              { title: "الجودة", desc: "لا نساوم أبداً في جودة التنفيذ." },
              { title: "الابتكار", desc: "نستخدم أحدث التقنيات الهندسية العالمية." },
              { title: "النزاهة", desc: "الشفافية هي أساس تعاملنا مع عملائنا." }
            ]
          },
         projects: {
            title: "مشاريعنا",
            subtitle: "بصمتنا في بناء المستقبل",
            filters: { all: "الكل", construction: "إنشاءات", infra: "بنية تحتية", energy: "طاقة" },
           items: [
              { id: 1, title: "مجمع الشروق السكني", category: "construction", img: project1 },
              { id: 2, title: "محطة طاقة الرياح", category: "energy", img: project2 },
              { id: 3, title: "شبكة مياه القاهرة", category: "infra", img: project3 }
            ]
          },
          contact: {
  title: "اتصل بنا",
  desc: "نحن هنا لمساعدتك في تحويل رؤيتك الهندسية إلى واقع ملموس. تواصل معنا اليوم.",
  form: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "رسالتك",
    send: "إرسال الرسالة"
  },
  info: {
    phone: "اتصل بنا",
    email: "راسلنا",
    address: "الموقع"
  }
},
          footer: "© 2026 كايتيك للهندسة. جميع الحقوق محفوظة."
        }
      }
    }, 
    lng: localStorage.getItem('i18nextLng') || 'ar',
    fallbackLng: "ar",
    interpolation: { escapeValue: false }
  });

export default i18n;