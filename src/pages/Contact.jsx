import { useState } from 'react';
import Footer from '../layout/Footer/Footer';
import NavigationBar from '../layout/Navbar/NavigationBar';
import CreateEnquiry from '../layout/ContactEnquiryModals/CreateEnquiry';
import ContinueEnquiry from '../layout/ContactEnquiryModals/ContinueEnquiry';

const Contact = () => {
  const [toggleContinue, setToggleContinue] = useState(false);
  const [toggleCreate, setToggleCreate] = useState(false);

  const handleToggleContinue = () => {
    setToggleContinue(!toggleContinue);
  };

  const handleToggleCreate = () => {
    setToggleCreate(!toggleCreate);
  };

  return (
    <>
      <NavigationBar />
      <div className="container padding-top">
        <div className="row align-items-center justify-content-center">
          <div className="form-container col-12 col-lg-6">
            <div className='me-0 me-lg-5'>
              <h2 className="text-dark fw-medium mb-3">GET IN TOUCH</h2>
              <p className="mb-5">Dear Customer,</p>
              <p>We would love to hear your enquiries, complaints, and feedback. Send us a message, and we will get back to you shortly.</p>
            </div>
            <div className="me-0 me-lg-5 my-4 my-lg-0 d-flex flex-column flex-sm-row align-items-center gap-2">
              <button onClick={handleToggleContinue} className="contact-btn w-100 ">
                Continue Previous Chat
              </button>
              <p className="mx-2 mb-0">or</p>
              <button onClick={handleToggleCreate} className="contact-outline-btn w-100 ">
                Send New Enquiry
              </button>
            </div>
          </div>
          <div className="map-container col-12 col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6554775808845!2d8.870727014206237!3d9.879243992933988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537350f2dbc5c1%3A0x529da9021acc57e8!2sVALGEE%20TRANSPORT%20SERVICES!5e0!3m2!1sen!2sng!4v1640925676980!5m2!1sen!2sng"
              style={{
                border: '0',
                boxShadow: '0px 0px 18px 2px rgba(0,0,0,0.2)',
                width: '100%',
                height: '450px',
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
      <ContinueEnquiry toggle={toggleContinue} setToggle={setToggleContinue} />
      <CreateEnquiry toggle={toggleCreate} setToggle={setToggleCreate} />
    </>
  );
};

export default Contact;
