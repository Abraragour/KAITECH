import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Home = ({ onContactClick }) => { 
  const { t, i18n } = useTranslation();
  const slides = t('hero', { returnObjects: true }) || [];

  return (
    <section id="home" className="h-screen w-full relative overflow-hidden bg-[#001030]">
      <Swiper
        key={i18n.language}
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }} 
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={1000}
        navigation={true}
        className="h-full w-full"
      >
        {Array.isArray(slides) && slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center">
              
              {/* Background with Slow Zoom */}
              <div 
                className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
                style={{ backgroundImage: `url(${slide.img})` }} 
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#001030] via-[#001030]/70 to-transparent" />
              </div>

              {/* Content Box */}
              <div className="container mx-auto px-8 md:px-16 z-10">
                <motion.div 
                  key={`${i18n.language}-${index}`}
                  initial={{ x: -50, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="max-w-4xl border-l-8 border-[#FF8C00] pl-8 md:pl-12"
                >
                  <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-6 tracking-tighter">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 font-light max-w-xl mb-12 tracking-wide">
                    {slide.desc}
                  </p>
                  
                  <Link 
  to="/contact" 
  className="inline-block bg-[#FF8C00] text-[#001030] px-12 py-4 text-sm font-black uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-none shadow-2xl text-center"
>
  {t('nav.contact')}
</Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.6); }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 24px !important; font-weight: bold; }
        .animate-slow-zoom { animation: slowzoom 20s infinite alternate; }
        @keyframes slowzoom { from { transform: scale(1); } to { transform: scale(1.15); } }
      `}</style>
    </section>
  );
};

export default Home;