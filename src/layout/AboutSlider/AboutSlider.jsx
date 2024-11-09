import { useState, useEffect, useRef } from 'react';
import AboutHero from '../../components/AboutHero/AboutHero';

const AboutSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    const showSlide = () => {
      slidesRef.current.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
        if (index === slideIndex) {
          slide.classList.add('slide-animation');
        }
      });
    };

    showSlide();
  }, [slideIndex]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slidesRef.current.length);
    }, 9000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div>
      <div className="carousel" style={{ zIndex: '1' }}>
        <div ref={(el) => (slidesRef.current[0] = el)} className="carousel-item w-100">
          <AboutHero
            className="about-hero"
            header="NEED A CAR HIRE SERVICE?"
            style={{ backgroundImage: "url('/assets/images/img-1.jpg')" }}
            body="We consider it vital that you want the perfect vehicle so we always
              make sure you have a wide range of vehicles tailored to meet your
              needs."
          />
        </div>
        <div ref={(el) => (slidesRef.current[1] = el)} className="carousel-item w-100">
          <AboutHero
            className="about-hero"
            style={{ backgroundImage: "url('/assets/images/img-5.jpg')" }}
            header="BOOK YOUR TRIPS ONLINE"
            body="Our Online platform allows you select, schedule and pay for trips with
              ease."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
