import { useTranslation } from 'react-i18next';
import { Settings, Shield, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const { t, i18n } = useTranslation(); 

  const services = [
    { icon: <Settings size={40} />, id: "01" },
    { icon: <Shield size={40} />, id: "02" },
    { icon: <Zap size={40} />, id: "03" },
  ];

  const serviceItems = t('services.items', { returnObjects: true }) || [];

  return (
    <section id="services" className="py-32 bg-[#f4f4f4]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl text-start"> 
            <span className="text-[#FF8C00] font-black tracking-[0.3em] uppercase text-sm block mb-4 underline decoration-2 underline-offset-8">
              {t('services.subtitle')} 
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#001030] uppercase tracking-tighter leading-none">
              {t('services.title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((ser, index) => (
            <div key={index} className="group relative bg-white p-12 border border-gray-200 transition-all duration-500 hover:bg-[#001030] overflow-hidden">
              <span className={`absolute top-8 ${i18n.language === 'ar' ? 'left-8' : 'right-8'} text-6xl font-black text-gray-100 group-hover:text-white/5 transition-colors`}>
                {ser.id}
              </span>
              
              <div className="text-[#FF8C00] mb-8 relative z-10 group-hover:scale-110 transition-transform">
                {ser.icon}
              </div>

              <h3 className="text-2xl font-black text-[#001030] mb-6 uppercase tracking-tight group-hover:text-white transition-colors relative z-10">
                {serviceItems[index]}
              </h3>

              <div className="flex items-center gap-2 text-[#FF8C00] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {i18n.language === 'ar' ? 'اقرأ المزيد' : 'Read More'} 
                <ArrowRight size={14} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF8C00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;