import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // تأكدي إن دي موجودة
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.png';
import { Helmet } from 'react-helmet-async';
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };

  const navLinkStyles = "text-white hover:text-[#FF8C00] transition-colors duration-300 font-medium cursor-pointer";

  return (
    <>
    <Helmet htmlAttributes={{ 
        lang: i18n.language, 
        dir: isRtl ? 'rtl' : 'ltr' 
      }} />
 
    <nav className="bg-[#001030] text-white sticky top-0 z-[1000] shadow-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* التعديل هنا: استخدام Link للعودة للرئيسية */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logoImg} 
            alt="Kaitech Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {/* التعديل هنا: استخدام href="/#id" مع Link أو a يضمن الرجوع للرئيسية */}
          <li><a href="/#home" className={navLinkStyles}>{t('nav.home')}</a></li>
          <li><a href="/#about" className={navLinkStyles}>{t('nav.about')}</a></li>
          <li><a href="/#services" className={navLinkStyles}>{t('nav.services')}</a></li>
          <li><a href="/#projects" className={navLinkStyles}>{t('nav.projects')}</a></li>
          {/* ضفت لك لينك الكونتاكت عشان يروح لصفحتها الجديدة */}
          <li><Link to="/contact" className={navLinkStyles}>{t('nav.contact')}</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all text-sm"
          >
            <Globe size={16} className="text-[#FF8C00]" />
            <span className="font-bold">{i18n.language === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* الموبايل منيو */}
      {isOpen && (
        <div className="md:hidden bg-[#001030] border-t border-white/5 p-6 absolute w-full left-0 animate-in fade-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-6 text-center">
            <li><a href="/#home" onClick={() => setIsOpen(false)} className={navLinkStyles}>{t('nav.home')}</a></li>
            <li><a href="/#about" onClick={() => setIsOpen(false)} className={navLinkStyles}>{t('nav.about')}</a></li>
            <li><a href="/#services" onClick={() => setIsOpen(false)} className={navLinkStyles}>{t('nav.services')}</a></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className={navLinkStyles}>{t('nav.contact')}</Link></li>
          </ul>
        </div>
      )}
    </nav>
       </>
  );
};

export default Navbar;