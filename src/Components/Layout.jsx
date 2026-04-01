import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  const { i18n } = useTranslation();

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;