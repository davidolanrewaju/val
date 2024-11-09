import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TextInput from '../../components/Forms/TextInput';

import { continueEnquiry } from '../../reducers/ticket/ticketSlice';

const ContinueEnquiry = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    phone: '',
  });

  const handleLoginDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Ticket message:', loginDetails);
      await dispatch(continueEnquiry(loginDetails)).unwrap();
      setToggle(false);
      setLoginDetails({ email: '', phone: '' });
      navigate('/customer/ticket-history');
    } catch (err) {
      console.error('Failed to create ticket:', err);
    }
  };

  return (
    <div className={`${toggle ? 'show' : 'd-none'} modal fade`} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h3 className="modal-title fw-semibold">Verify Your Identity</h3>
            <button type="button" className="btn-close btn-close-white" onClick={() => setToggle(false)}></button>
          </div>
          <form onSubmit={handleUserLogin} className="modal-body">
            <TextInput label="Email:" labelClassName="fs-5 text-muted" containerClassName="w-100 mb-3" className="py-2 ps-2 mt-1 w-100 rounded border" type="email" name="email" value={loginDetails.email} onChange={handleLoginDetails} />

            <TextInput label="Phone Number:" labelClassName="fs-5 text-muted" containerClassName="w-100 mb-3" className="py-2 ps-2 mt-1 w-100 rounded border" name="phone" type="text" value={loginDetails.phone} onChange={handleLoginDetails} />

            <div className="modal-footer mt-5 mx-0 px-0">
              <button type="button" className="btn btn-outline-secondary rounded-1 me-2" style={{ fontSize: '18px' }} onClick={() => setToggle(false)}>
                Close
              </button>
              <button type="submit" className="btn btn-danger rounded-1" style={{ fontSize: '18px' }}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ContinueEnquiry.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default ContinueEnquiry;
