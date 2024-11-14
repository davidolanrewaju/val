import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const BookingsMenu = ({toggleSidebar}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToVerify = (e) => {
    e.preventDefault();
    navigate('/');

    setTimeout(() => {
      const element = document.getElementById('verify');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* Booking Desktop Menu */}
      <div className='d-none d-lg-block position-relative'>
        <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
          <button className='d-flex align-items-center btn btn-link hover-link text-white p-0 fs-4 fs-lg-5' style={{ textDecoration: 'none', fontWeight: '500' }}>
            Bookings
            <svg className={`ms-2 ${isOpen ? 'transform rotate-180' : ''}`} xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 10 6'>
              <path stroke='currentColor' d='m1 1 4 4 4-4' />
            </svg>
          </button>
          {/* Desktop Dropdown menu */}
          {isOpen && (
            <div className='position-absolute start-50 translate-middle-x pt-3' style={{ zIndex: 10 }}>
              <div className='bg-white shadow-sm' style={{ width: '176px' }}>
                <ul className='list-unstyled p-4'>
                  <li>
                    <NavLink to='/' className='text-dark text-decoration-none'>
                      <p className='hover-link'>Book a Trip</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={scrollToVerify} className='text-dark text-decoration-none'>
                      <p className='mb-0 hover-link'>Verify your Booking</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Booking Mobile Menu */}
      <div className='d-lg-none w-100'>
        <div onClick={toggleMenu}>
          <button className='hover-link btn btn-link text-white p-0 d-flex align-items-center justify-content-between w-100 fs-4' style={{ textDecoration: 'none', fontWeight: '500' }}>
            <span>Bookings</span>
            <svg className={`ms-2 ${isOpen ? 'transform rotate-180' : ''}`} xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 10 6'>
              <path stroke='currentColor' d='m1 1 4 4 4-4' />
            </svg>
          </button>
          {/* Mobile Dropdown menu */}
          <div className={`${isOpen ? 'd-block' : 'd-none'}`}>
            <ul className='list-unstyled pt-2'>
              <li onClick={toggleSidebar}>
                <NavLink onClick={closeMenu} to='/' className='d-block py-2 ps-4 text-white text-decoration-none'>
                  Book a Trip
                </NavLink>
              </li>
              <li onClick={toggleSidebar}>
                <NavLink onClick={scrollToVerify} className='d-block py-2 ps-4 text-white text-decoration-none'>
                  Verify your Booking
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingsMenu;
