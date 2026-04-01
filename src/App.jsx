import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import './i18n';
import { useState } from 'react';

const LandingPage = () => {
  const [showContact, setShowContact] = useState(false);
  
  return (
    <>
     <section id="home"><Home /></section>
      
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
    
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;