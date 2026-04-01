import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import aboutImg from '../assets/aboutt.jpeg'; 

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            key={i18n.language} 
            initial={{ opacity: 0, x: i18n.language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#FF8C00] font-bold uppercase tracking-widest mb-4">
              {t('aboutPage.title')} 
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#001030] mb-8 leading-tight">
              {t('aboutPage.subtitle')} 
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {t('aboutPage.story')}
            </p>

            <div className="grid gap-6">
              {(t('aboutPage.values', { returnObjects: true }) || []).map((value, index) => (
                <div key={index} className="flex gap-4 border-l-4 border-[#FF8C00] pl-4">
                  <div>
                    <h5 className="font-bold text-[#001030]">{value.title}</h5>
                    <p className="text-sm text-gray-500">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src={aboutImg} 
              alt="Engineering" 
              className="rounded-none shadow-2xl w-full h-[500px] object-cover" 
            />
            <div className="absolute -bottom-8 -right-8 bg-[#FF8C00] p-8 hidden md:block">
              <p className="text-4xl font-black text-[#001030]">
                {t('aboutPage.experienceBox.number')} 
              </p>
              <p className="text-sm font-bold uppercase text-[#001030]">
                {t('aboutPage.experienceBox.text')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;