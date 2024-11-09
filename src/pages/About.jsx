import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../layout/Footer/Footer';
import NavigationBar from '../layout/Navbar/NavigationBar';
import AboutSlider from '../layout/AboutSlider/AboutSlider';
import AboutSection from '../layout/AboutSection/AboutSection';
import ServicesSection from '../layout/ServicesSection/ServicesSection';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <NavigationBar />
      <div id="about">
        <div style={{ paddingTop: '145px' }}>
          <AboutSlider />
        </div>
        <div className="pb-5 px-3 px-md-5">
          <AboutSection />
        </div>
      </div>
      <div id="services" className="bg-light py-5 px-3 px-md-5">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
