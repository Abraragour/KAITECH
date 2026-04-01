import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// استيراد الأيقونات من قسم Font Awesome 6
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();

  // مصفوفة البيانات باستخدام المكونات المستوردة مباشرة
  const socialLinks = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
    { Icon: FaXTwitter, link: "#" },
  ];

  return (
    <footer className="bg-[#000a1d] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-8 flex flex-col items-center">
        
        {/* Branding / Logo */}
        <div className="text-center mb-10">
          <span className="text-4xl font-black text-white tracking-[0.2em]">KAITECH</span>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-8 bg-[#FF8C00]/50" />
            <p className="text-[#FF8C00] text-[10px] tracking-[0.4em] font-bold uppercase whitespace-nowrap">
              Engineering Excellence
            </p>
            <div className="h-[1px] w-8 bg-[#FF8C00]/50" />
          </div>
        </div>

        {/* Social Media Grid */}
        <div className="flex gap-0 mb-12">
          {socialLinks.map((social, index) => {
            const IconComponent = social.Icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ backgroundColor: "#FF8C00", color: "#000a1d" }}
                className="w-14 h-14 flex items-center justify-center border border-white/10 text-white transition-all duration-300 hover:border-[#FF8C00] cursor-pointer"
              >
                {/* الأيقونة هتنور هنا فوراً */}
                <IconComponent size={20} />
              </motion.a>
            );
          })}
        </div>

        {/* Copyrights Section */}
        <div className="w-full pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-medium">
            © {new Date().getFullYear()} KAITECH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;