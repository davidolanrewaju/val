import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaPhoneAlt, FaRegEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import BookingsMenu from './SubNav/BookingsMenu';
import MoreInfoMenu from './SubNav/MoreInfoMenu';
import Account from './SubNav/Account';
import { useWalletBalance } from '../../hooks/useWalletBalance';
import { useEmailHook } from '../../hooks/useEmailHook';

const NavItem = ({ component: Component, label, to, href, external, onClick }) => {
  const commonClasses = 'text-white hover-link fs-4';

  if (Component) {
    return <Component />;
  } else if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={commonClasses} onClick={onClick} style={{ textDecoration: 'none', fontWeight: '500' }}>
        {label}
      </a>
    );
  } else {
    return (
      <NavLink to={to} className={commonClasses} onClick={onClick} style={{ textDecoration: 'none', fontWeight: '500' }}>
        {label}
      </NavLink>
    );
  }
};

const NavigationBar = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.authentication.token);
  const walletBalance = useWalletBalance();
  const email = useEmailHook();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = [
    { component: () => <BookingsMenu toggleSidebar={toggleSidebar} />, label: 'Bookings' },
    { href: 'https://valgee.com/cooperative', label: 'Join Cooperative', external: true },
    { to: '/contact', label: 'Contact Us' },
    { component: () => <MoreInfoMenu toggleSidebar={toggleSidebar} />, label: 'More Info' },
    { component: token ? Account  : null, to: token ? null : '/login', label: token ? 'Account' : 'Login' },
  ];

  return (
    <div className={`${isScrolled ? 'fixed-top' : 'position-absolute'} w-100`}>
      {!isScrolled && (
        <div className='bg-black border-bottom border-dark text-white py-1'>
          <div className='container px-md-5 py-2'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-6 col-md-auto'>
                <div className='d-flex align-items-center'>
                  <div className='d-flex align-items-center me-md-4'>
                    <FaRegEnvelope className='valgee-red me-2' />
                    <span className='small d-none d-md-block'>valgeetransportservices@gmail.com</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <FaPhoneAlt className='valgee-red me-2' />
                    <span className='small d-none d-md-block'>+234 816 739 8567</span>
                  </div>
                </div>
              </div>
              {token && (
                <div className='col-6 col-md-auto'>
                  <div className='d-flex flex-md-row align-items-center justify-content-end'>
                    <span className='small d-none d-md-block me-md-4 mb-2 mb-md-0'>Wallet: &#8358;{walletBalance}.00</span>
                    <div className='d-flex align-items-center'>
                      <FaUser className='valgee-red me-2' />
                      <span className='small d-none d-lg-block'>{email}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className='bg-black'>
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'py-2 shadow' : ''}`}>
          <div className='px-md-5 container d-flex flex-row'>
            <img src='/assets/images/logo.jpg' className='navbar-brand logo' style={{ cursor: 'pointer' }} alt='Valgee Logo' onClick={() => navigate('/')} />

            <button className='navbar-toggler border-0' type='button' onClick={toggleSidebar}>
              <FaBars className='text-white' />
            </button>

            <div className='collapse navbar-collapse justify-content-end'>
              <ul className='navbar-nav d-flex align-items-center gap-5'>
                {navItems.map((item, index) => (
                  <li key={index} className='nav-item'>
                    <NavItem {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className='position-fixed top-0 start-0 h-100 w-100' style={{ zIndex: 1051, backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <div className='position-fixed top-0 start-0 h-100 bg-black text-white' style={{ width: '250px' }}>
            <div className='d-flex justify-content-end p-3'>
              <button onClick={toggleSidebar} className='btn btn-link text-white'>
                <FaTimes size={24} />
              </button>
            </div>
            <ul className='nav flex-column p-3'>
              {navItems.map((item, index) => (
                <li key={index} className='nav-item mb-3'>
                  <NavItem {...item} onClick={toggleSidebar} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

NavItem.propTypes = {
  component: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavigationBar;
