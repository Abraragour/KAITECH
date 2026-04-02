import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (<>
  
    <Helmet>
        <title>
          {isRtl ? 'كايتك | اتصل بنا - تواصل معنا' : 'KAITECH | Contact Us - Get in Touch'}
        </title>
        <meta name="description" content={t('contact.desc')} />
      </Helmet>
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      // تعديل: استخدمنا text-start بدل text-right عشان يتبع لغة الصفحة تلقائياً
      className={`min-h-screen pt-32 pb-24 bg-white text-start ${isRtl ? 'rtl' : 'ltr'}`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-16">
           <h2 className="text-[#001030] text-5xl md:text-8xl font-black uppercase mb-4 tracking-tighter leading-none">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-2 bg-[#FF8C00]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <p className="text-gray-500 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
              {t('contact.desc')}
            </p>

            <div className="space-y-8">
              {/* Phone Item */}
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 flex-shrink-0 bg-[#001030] flex items-center justify-center rounded-full text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-[#001030] transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">{t('contact.info.phone')}</h4>
                  <p className="text-[#001030] text-xl font-black" dir="ltr">+20 123 456 7890</p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 flex-shrink-0 bg-[#001030] flex items-center justify-center rounded-full text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-[#001030] transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">{t('contact.info.email')}</h4>
                  <p className="text-[#001030] text-xl font-black">info@kaitech.com</p>
                </div>
              </div>

              {/* Address Item */}
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 flex-shrink-0 bg-[#001030] flex items-center justify-center rounded-full text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-[#001030] transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">{t('contact.info.address')}</h4>
                  <p className="text-[#001030] text-xl font-black">Shorouk City, Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-[#001030] p-8 md:p-14 shadow-2xl overflow-hidden"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-24 h-1 bg-[#FF8C00]"></div>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="text" required className="w-full bg-transparent border-b border-gray-600 py-3 text-white outline-none focus:border-[#FF8C00] transition-all peer" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#FF8C00] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    {t('contact.form.name')}
                  </label>
                </div>
                <div className="relative group">
                  <input type="email" required className="w-full bg-transparent border-b border-gray-600 py-3 text-white outline-none focus:border-[#FF8C00] transition-all peer" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#FF8C00] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    {t('contact.form.email')}
                  </label>
                </div>
              </div>

              <div className="relative">
                <input type="text" required className="w-full bg-transparent border-b border-gray-600 py-3 text-white outline-none focus:border-[#FF8C00] transition-all peer" placeholder=" " />
                <label className="absolute left-0 top-3 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#FF8C00] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  {t('contact.form.subject')}
                </label>
              </div>

              <div className="relative">
                <textarea rows="4" required className="w-full bg-transparent border-b border-gray-600 py-3 text-white outline-none focus:border-[#FF8C00] transition-all peer resize-none" placeholder=" "></textarea>
                <label className="absolute left-0 top-3 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#FF8C00] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  {t('contact.form.message')}
                </label>
              </div>

              <button className="group relative w-full bg-[#FF8C00] text-[#001030] py-5 font-black uppercase tracking-widest overflow-hidden transition-all duration-500 hover:bg-white">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t('contact.form.send')} <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;