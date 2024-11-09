import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/customer/history', label: 'Profile' },
  { path: '/customer/booking-history', label: 'Bookings' },
  { path: '/customer/ticket-history', label: 'Messages' },
  { path: '/customer/wallet-history', label: 'Wallet' },
  { path: '/password/reset', label: 'Password' },
];

const MiniNav = () => {
  return (
    <nav className="container mb-4 p-0">
      <ul className="list-unstyled d-flex flex-nowrap align-items-center">
        {navItems.map((item, index) => (
          <li key={item.path} className="d-flex align-items-center flex-shrink-0">
            <NavLink to={item.path} end className={({ isActive }) => `mini-nav text-decoration-none ${isActive ? 'fw-bold text-dark' : 'text-dark'}`}>
              {item.label}
            </NavLink>
            {index < navItems.length - 1 && <span className="mb-0 text-muted px-1 px-md-2">|</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MiniNav;
