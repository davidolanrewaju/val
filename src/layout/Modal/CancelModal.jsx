import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchBookingCancelMessage } from '../../reducers/cancelBooking/cancelBookingSlice';

const CancelModal = ({ showCancelModal, setShowCancelModal, bookingId, token }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  // const response = useSelector((state) => state.cancelBooking.message);

  const handleNumberChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cancelBookingInfo = {
      token: token,
      body: {
        phone: number,
        booking_id: bookingId,
      },
    };
    dispatch(fetchBookingCancelMessage(cancelBookingInfo));
    setShowCancelModal(!showCancelModal);
  };

  return (
    <div className={`modal ${showCancelModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header border-bottom">
            <h5 className="modal-title fs-4 fw-medium">Cancel Trip:</h5>
            <button type="button" className="btn-close" onClick={() => setShowCancelModal(!showCancelModal)} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="py-2">
              <h2 className="text-secondary fs-5">Promotions</h2>
            </div>
            <div className="py-3">
              <h2 className="text-dark fs-4 fw-medium mb-2">To Cancel Booking</h2>
              <p className="text-secondary">
                Enter phone number on the Booking <br />
                <span className="text-danger">to verify that you are authorized to carry out this operation</span>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3">
                <input onChange={handleNumberChange} className="form-control py-3 ps-2" type="tel" name="tel" id="tel" placeholder="Enter phone number" style={{ fontSize: '16px' }}/>
              </div>
              <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                <button onClick={() => setShowCancelModal(!showCancelModal)} type="button" className="btn btn-secondary">
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CancelModal.propTypes = {
  token: PropTypes.string,
  bookingId: PropTypes.number,
  showCancelModal: PropTypes.bool,
  setShowCancelModal: PropTypes.func,
};

export default CancelModal;
