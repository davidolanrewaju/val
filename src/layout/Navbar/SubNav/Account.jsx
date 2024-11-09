import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../../reducers/authentication/authenticationSlice';

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleUserLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

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
      {/* Account Desktop Menu */}
      <div className="d-none d-lg-block position-relative">
        <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
          <button className="hover-link btn btn-link text-white p-0 fs-4 fs-lg-5 d-flex align-items-center" onClick={toggleMenu} style={{ textDecoration: 'none', fontWeight: '500' }}>
            My Account
            <svg className={`ms-2 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {/* Desktop Dropdown menu */}
          {isOpen && (
            <div className="position-absolute start-50 translate-middle-x pt-3" style={{ zIndex: 10 }}>
              <div className="bg-white shadow-sm" style={{ width: '176px' }}>
                <ul className="list-unstyled p-4">
                  <li>
                    <NavLink to="/customer/history" className="text-dark text-decoration-none">
                      <p className="hover-link">My Profile</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/customer/booking-history" className="text-dark text-decoration-none">
                      <p className="hover-link">My Bookings</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/customer/wallet-history" className="text-dark text-decoration-none">
                      <p className="hover-link">Wallet Transactions</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/customer/ticket-history" className="text-dark text-decoration-none">
                      <p className="hover-link">My Messages & Tickets</p>
                    </NavLink>
                  </li>
                  <li className="hover-link">
                    <NavLink to="/password/reset" className="text-dark text-decoration-none">
                      <p className="hover-link">Change Password</p>
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={handleUserLogout} className="p-0 text-dark text-decoration-none" style={{ backgroundColor: 'transparent', border: 'none' }}>
                      <p className="hover-link">Logout</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Account Mobile Menu */}
      <div className="d-lg-none w-100">
        <div onClick={toggleMenu}>
          <button className="hover-link btn btn-link text-white p-0 d-flex align-items-center justify-content-between w-100 fs-4" style={{ textDecoration: 'none', fontWeight: '500' }}>
            <span>My Account</span>
            <svg className={`ms-2 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {/* Mobile Dropdown menu */}
          <div className={`${isOpen ? 'd-block' : 'd-none'}`}>
            <ul className="list-unstyled pt-2">
              <li>
                <NavLink to="/customer/history" className="d-block py-2 ps-4 text-white text-decoration-none">
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/customer/booking-history" className="d-block py-2 ps-4 text-white text-decoration-none">
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/customer/wallet-history" className="d-block py-2 ps-4 text-white text-decoration-none">
                  Wallet Transactions
                </NavLink>
              </li>
              <li>
                <NavLink to="/customer/ticket-history" className="d-block py-2 ps-4 text-white text-decoration-none">
                  My Messages & Tickets
                </NavLink>
              </li>
              <li>
                <NavLink to="/password/reset" className="d-block py-2 ps-4 text-white text-decoration-none">
                  Change Password
                </NavLink>
              </li>
              <li>
                <button onClick={handleUserLogout} className="d-block py-2 ps-4 text-white text-decoration-none" style={{ backgroundColor: 'transparent', border: 'none' }}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
