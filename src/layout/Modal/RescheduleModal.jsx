import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchRescheduledBookingData } from '../../reducers/rescheduleBooking/rescheduleBookingSlice';

const RescheduleModal = ({ bookingId, bookingName, rescheduleModal, showRescheduleModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ date: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const rescheduleBookingInfo = {
        date: input.date,
        phone: input.phone,
        booking_id: Number(bookingId),
    };
    const resultAction = await dispatch(fetchRescheduledBookingData(rescheduleBookingInfo));
    if (fetchRescheduledBookingData.fulfilled.match(resultAction)) {
      navigate(`/bookings/reschedule/${bookingId}`, { state: { ...resultAction.payload } });
    } else {
      showRescheduleModal(false);
    }
  };

  return (
    <div className={`modal ${rescheduleModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: rescheduleModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-4 fw-medium">Reschedule Trip:</h5>
            <button type="button" className="btn-close" onClick={() => showRescheduleModal(!rescheduleModal)} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h4 className="text-success fw-medium">{bookingName}</h4>
            <p className="fs-5 fw-medium mt-4 text-secondary">To Reschedule Booking</p>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="date" className="fs-5 form-label">
                  Select New Travel Date
                </label>
                <input type="date" className="form-control py-3 ps-2" id="date" name="date" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="tel" className="fs-5 form-label">
                  Enter phone number on the Booking
                  <br />
                  <small className="text-danger">to verify that you are authorized to carry out this operation</small>
                </label>
                <input type="tel" className="py-3 ps-2 form-control" id="tel" name="phone" onChange={handleInputChange} />
              </div>
              <div className="modal-footer mt-5">
                <button type="button" className="btn btn-secondary" onClick={() => showRescheduleModal(!rescheduleModal)}>
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

RescheduleModal.propTypes = {
  token: PropTypes.string,
  bookingId: PropTypes.number,
  bookingName: PropTypes.string,
  rescheduleModal: PropTypes.bool,
  showRescheduleModal: PropTypes.func,
};

export default RescheduleModal;
