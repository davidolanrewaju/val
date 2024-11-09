/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFormatDate from '../../hooks/useFormatDate';

import Seats from './Seats/Seats';
import Button from '../../components/Button/Button';
import Error from '../../components/ErrorDisplays/Error';

const SelectSeatCard = ({ seats, origin, destination }) => {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState({
    amount: 0,
    noofseats: 0,
    seats: [],
    trip_id: 0,
  });
  const [seatError, setSeatError] = useState('');
  const [hasError, setHasError] = useState(false);
  const tripDate = seats.trip.trip_date || null;
  const formatDate = useFormatDate(tripDate);

  useEffect(() => {
    let timer;
    if (hasError) {
      timer = setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [hasError]);

  const handleSelectedSeat = (seatInfo) => {
    const isValidSelection = seatInfo.no_of_seats === parseInt(seats.no_of_seats);
    setSelectedSeat((prevState) => ({
      ...prevState,
      seats: seatInfo.seats,
      noofseats: seatInfo.no_of_seats,
      amount: seatInfo.amount,
      trip_id: seatInfo.trip_id,
    }));

    if (!isValidSelection) {
      setSeatError(`Please select exactly ${seats.no_of_seats} seat(s)`);
      setHasError(true);
    } else {
      setSeatError('');
      setHasError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/bookings/details', { state: selectedSeat });
  };

  return (
    <div className="" style={{ marginBottom: '100px' }}>
      <div className="row">
        <div className="mx-auto col-12 col-sm-10 col-md-7 col-lg-10 col-xl-8 p-2">
          <form onSubmit={handleSubmit} className="w-100">
            <div className="shadow text-center py-4 px-1">
              <div className="border-top border-bottom" style={{ padding: '12px 5px', backgroundColor: 'rgba(112, 112, 112, 0.07)' }}>
                <h3 className="mb-3" style={{ fontWeight: '500' }}>
                  {origin.location} ({origin.name}) to {destination.location} ({destination.name})
                </h3>
                <p style={{ color: '#28A745', fontSize: '18px' }}>{seats.trip.trip_type}</p>
              </div>
              <div>
                <h5 className="fw-medium" style={{ padding: '12px 5px' }}>
                  {formatDate}, at {seats.trip.trip_time}
                </h5>
                <div className="border-top" style={{ padding: '12px 5px', backgroundColor: 'rgba(112, 112, 112, 0.07)' }}>
                  <p className="mb-0 fw-semibold text-secondary">Total Amount:</p>
                  <p className="text-secondary mb-0">
                    &#8358;{seats.amount} for {seats.no_of_seats} seat
                  </p>
                </div>
                <div className="pt-3 d-flex justify-content-center align-items-center">
                  <span className="text-white p-1 bg-danger" style={{ fontSize: '12px' }}>
                    Booked
                  </span>
                  <span className="text-white p-1 bg-dark" style={{ fontSize: '12px' }}>
                    Available
                  </span>
                  <span className="text-white p-1 bg-success" style={{ fontSize: '12px' }}>
                    Selected
                  </span>
                </div>

                {seatError && (
                  <div className="py-2 alert alert-danger" role="alert">
                    <Error message={seatError} />
                  </div>
                )}

                <div className="m-2 text-center p-1 p-md-5">
                  <Seats updatedData={seats} trip_type={seats.trip.trip_type} handleSelectedSeat={handleSelectedSeat} />

                  <Error className="text-danger fw-medium" message={seatError} />
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label text-secondary" htmlFor="terms">
                      I have read and agree to the{' '}
                      <a href="/terms" style={{ color: '#DC3545', textDecoration: 'none', fontSize: '16px' }}>
                        terms and conditions
                      </a>{' '}
                      of service
                    </label>
                  </div>
                  <Button disabled={selectedSeat.noofseats !== parseInt(seats.no_of_seats)} link="/bookings/details" btnName="Continue" className="btn btn-secondary my-4 py-2 px-3" style={{ backgroundColor: '#343A40' }} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectSeatCard;
