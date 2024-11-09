import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../layout/Footer/Footer';
import ManageForm from '../layout/ManageForm/ManageForm';
import NavigationBar from '../layout/Navbar/NavigationBar';
import Testimonials from '../layout/Testimonials/Testimonials';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import VehicleHireForm from '../layout/VehicleHireForm/VehicleHireForm';
import DirectBookingForm from '../layout/DirectBookingForm/DirectBookingForm';

const DirectBooking = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  window.history.replaceState({}, '');

  return (
    <>
      <NavigationBar />
      <div className="padding-top">
        <div className="trip-content container px-md-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-4">
              <div className="section-heading">
                <h2>BOOK YOUR TRIP NOW</h2>
                <p></p>
                <h6>Shuttle Bus Service</h6>
                <p></p>
              </div>

              {location.state && location.state.message ? (
                <div className="alert alert-success" role="alert">
                  {location.state.message}
                </div>
              ) : null}

              {location.state && location.state.success ? (
                <div className="alert alert-success" role="alert">
                  {location.state.success}
                </div>
              ) : null}

              <div className="booking-options">
                <ul className="nav nav-tabs card-header-tabs mb-5" id="myTab" role="tablist">
                  <li className="nav-item" onClick={() => handleTabClick(0)}>
                    <a className="nav-link" style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}>
                      BOOK A TRIP &nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => handleTabClick(1)}>
                    <a className="nav-link" style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}>
                      HIRE A VEHICLE&nbsp;&nbsp;
                    </a>
                  </li>
                </ul>
                <div className="mb-5">{activeTab === 0 ? <DirectBookingForm /> : <VehicleHireForm />}</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <ImageSlider />
            </div>
          </div>
        </div>
        <div id="verify" className="contact-area section-padding-10-0 position-relative m-0">
          <div className="container px-md-5">
            <div className="row align-items-center justify-content-between">
              <ManageForm />
              <div className="col-12 col-lg-6">
                <img className="w-100" src="assets/images/slide-img3.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-area" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DirectBooking;
