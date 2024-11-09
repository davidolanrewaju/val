import PropTypes from 'prop-types';

const ArrowDown = ({ isOpen }) => {
  return (
    <svg 
      className={`w-2.5 h-2.5 ms-2.5 ${isOpen ? 'transform rotate-180' : ''}`} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 10 6"
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    </svg>
  );
};

ArrowDown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default ArrowDown;
