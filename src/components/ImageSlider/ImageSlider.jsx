import { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    { src: '/assets/images/slide-img1.jpg', alt: 'First slide' },
    { src: '/assets/images/slide-img2.jpg', alt: 'Second slide' },
    { src: '/assets/images/slide-img3.jpg', alt: 'Third slide' },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [images.length]);

  const changeSlide = (n) => {
    const newIndex = (slideIndex + n + images.length) % images.length;
    setSlideIndex(newIndex);
  };

  return (
    <div className="map-area mb-100">
      <section className="hero-area section-padding-0 position-relative" style={{ margin: '0px 0px 100px 0px' }}>
        <div className="carousel slide">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === slideIndex ? 'active' : ''}`}>
                <img className="d-block w-100" src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" onClick={() => changeSlide(-1)}>
            <span style={{ width: '20px', height: '20px', fontWeight: 'bold' }} className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" onClick={() => changeSlide(1)}>
            <span style={{ width: '20px', height: '20px', fontWeight: 'bold' }} className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
