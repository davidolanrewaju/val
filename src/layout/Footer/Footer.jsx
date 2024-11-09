import { FaTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGooglePlusG } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer id="footer" style={{ backgroundColor: '#325740', color: '#fff' }}>
        <div className="py-5">
          <div className=" px-md-5 container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="mb-4">
                  <div className="mb-4">
                    <a href="#">
                      <img src="https://valgee.com/frontend/img/core-img/logo.png" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <p>We offer a unique service of transportation for those visiting Jos where safety, comfort, affordability and excellent customer service are our core values</p>
                  <div className="d-flex align-items-center justify-content-sm-start justify-content-md-center justify-content-lg-start gap-2">
                    <a href="https://web.facebook.com/valgeetransportservice/" target="_blank" className="footer-logo" style={{ width: '40px', height: '40px' }}>
                      <FaFacebookF className='d-flex align-items-center justify-content-between' />
                    </a>
                    <a href="https://twitter.com/valgeets" target="_blank" className="footer-logo" style={{ width: '40px', height: '40px' }}>
                      <FaTwitter className='d-flex align-items-center justify-content-between' />
                    </a>
                    <a href="#" className="footer-logo" style={{ width: '40px', height: '40px' }}>
                      <FaGooglePlusG className='d-flex align-items-center justify-content-between' />
                    </a>
                    <a href="https://www.instagram.com/valgeets/" target="_blank" className="footer-logo" style={{ width: '40px', height: '40px' }}>
                      <FaInstagram className='d-flex align-items-center justify-content-between' />
                    </a>
                    <a href="#" className="footer-logo" style={{ width: '40px', height: '40px' }}>
                      <FaLinkedinIn className='d-flex align-items-center justify-content-between' />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="mb-4">
                  <h5 className="mb-3">HEAD OFFICE</h5>
                  <div>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Terminal/Pickup (Jos) :</span>
                      <br /> Valgee Hotspot, Old Nitel Building, Close to old airport Roundabout Jos.
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Administrative Office (Jos) :</span>
                      <br /> Valgee Hotspot, Old Nitel Building, Close to old airport Roundabout Jos.
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>CCare Transport (Jos) :</span>
                      <br /> 08164982545, 07046573096
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>CCare Express/Logistics (Jos) :</span>
                      <br /> 09167483252, 09167411435
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Open hours :</span>
                      <br /> Mon - Sat: 6 AM to 6 PM
                      <br /> Sun: 6 AM to 1 PM
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Email :</span>
                      <br /> valgeetransportservices@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="mb-4">
                  <h5 className="mb-3">ABUJA OFFICE</h5>
                  <div>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Terminal/Pick Up (Abuja) :</span>
                      <br /> Riverplate Garden, 1st Gate, after Nitel Junction, Ahmadu Bello Way, Abuja
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>CCare Transport (Abuja) :</span>
                      <br /> 09068652712, 09135652615
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>CCare Express/Logistics (Abuja) :</span>
                      <br /> 08138822795, 09131671858
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="mb-4">
                  <h5 className="mb-3">MAKURDI OFFICE</h5>
                  <div>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Terminal/Pick Up (Makurdi) :</span>
                      <br /> Opposite Bonatex Warehouse, Beside Ben Jax, Ishaya Bakyut Road, High Level, Makurdi, Benue State
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Administrative Office (Makurdi) :</span>
                      <br />
                      Same as pickup Location
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>CCare Transport (Makurdi) :</span>
                      <br /> 07032156441, 07032459786
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>CCare Express/Logistics (Makurdi) :</span>
                      <br /> 07037071630
                    </p>
                  </div>

                  <h5 className="mt-4 mb-3">OTHERS OFFICE</h5>
                  <div>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Yobe :</span>
                      <br /> Shop 1 Sani Ahmed Daura Housing Estate By-Pass Extension Damaturu, Yobe State.
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Gusau :</span>
                      <br /> Opposite fire service damba, Gusau Zamfara State.
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Sokoto Office :</span>
                      <br /> Bafarawa Estate, Opposite Liberty CLinic, Sokoto State
                    </p>
                    <p style={{ fontSize: '18px' }}>
                      <span style={{ color: '#B7B7B7' }}>Kebbi Office :</span>
                      <br /> Along Nagari College Express way, Kebbi State
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 border-top">
          <div className="container">
            <div className="row" style={{ color: '#B7B7B7', textDecoration: 'none' }}>
              <div className="col-12 col-md-4">
                <p className="mb-0 text-center text-md-start" style={{ fontSize: '13px' }}>
                  All rights reserved | Powered with &#9825; by <span></span>
                  <a href="http://www.transportr.africa" target="_blank" className="text-white" style={{ textDecoration: 'none' }}>
                    TransportR
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-8">
                <nav>
                  <ul className="list-inline my-2 text-center my-md-0 text-md-end">
                    <li className="list-inline-item">
                      <NavLink to="/" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        Book A Trip
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/about#about" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        About
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/about#services" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        Services
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/terms" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        T &amp; C
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        Enquiries &amp; Support
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/customer/feedback" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        Customer Feedback
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://valgee.com/cooperative" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        Cooperative
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" style={{ color: '#B7B7B7', textDecoration: 'none', fontSize: '12px' }}>
                        Promotions
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
