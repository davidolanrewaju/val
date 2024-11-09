/* eslint-disable react/prop-types */
import Button from '../Button/Button';

const AboutHero = ({ header, style, body }) => {
  return (
    <div className="bg-image h-100" style={{...style, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center text-white py-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
        <h1 className="text-uppercase fw-medium display-4 mb-3">{header}</h1>
        <p className="fs-5 mb-4">{body}</p>
        <p className="fs-5">Intra &amp; Inter State Car Hire Services.</p>
        <div className="mt-5 d-flex gap-3">
          <Button 
            btnName="Get Started" 
            className="red-btn"
          />
          <Button 
            btnName="Contact Us" 
            className="red-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;