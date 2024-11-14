import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MoreInfoMenu = ({ toggleSidebar }) => {
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

  return (
    <>
      {/* MoreInfo Desktop Menu */}
      <div className='d-none d-lg-block position-relative'>
        <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
          <button className='d-flex align-items-center btn btn-link hover-link text-white p-0 fs-4 fs-lg-5' style={{ textDecoration: 'none', fontWeight: '500' }}>
            More Info
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
                    <NavLink to='/about#about' className='text-dark text-decoration-none'>
                      <p className='hover-link'>About Us</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/customer/feedback' className='text-dark text-decoration-none'>
                      <p className='hover-link'>Trip Feedback</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/customer/courier-feedback' className='text-dark text-decoration-none'>
                      <p className='hover-link'>Courier Feedback</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/about#services' className='text-dark text-decoration-none'>
                      <p className='hover-link'>Services</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/terms' className='text-dark text-decoration-none'>
                      <p className='mb-0 hover-link'>Terms & Conditions</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MoreInfo Mobile Menu */}
      <div className='d-lg-none w-100'>
        <div onClick={toggleMenu}>
          <button className='hover-link btn btn-link text-white p-0 d-flex align-items-center justify-content-between w-100 fs-4' style={{ textDecoration: 'none', fontWeight: '500' }}>
            <span>More Info</span>
            <svg className={`ms-2 ${isOpen ? 'transform rotate-180' : ''}`} xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 10 6'>
              <path stroke='currentColor' d='m1 1 4 4 4-4' />
            </svg>
          </button>
          {/* Mobile Dropdown menu */}
          <div className={`${isOpen ? 'd-block' : 'd-none'}`}>
            <ul className='list-unstyled pt-2'>
              <li onClick={toggleSidebar}>
                <NavLink to='/about#about' className='d-block py-2 ps-4 text-white text-decoration-none'>
                  About Us
                </NavLink>
              </li>
              <li onClick={toggleSidebar}>
                <NavLink to='/customer/feedback' className='d-block py-2 ps-4 text-white text-decoration-none'>
                  Trip Feedback
                </NavLink>
              </li>
              <li onClick={toggleSidebar}>
                <NavLink to='/customer/courier-feedback' className='d-block py-2 ps-4 text-white text-decoration-none'>
                  Courier Feedback
                </NavLink>
              </li>
              <li onClick={toggleSidebar}>
                <NavLink to='/about#services' className='d-block py-2 ps-4 text-white text-decoration-none'>
                  Services
                </NavLink>
              </li>
              <li onClick={toggleSidebar}>
                <NavLink to='/terms' className='d-block py-2 ps-4 text-white text-decoration-none'>
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfoMenu;
