import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../layout/Footer/Footer';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';
import Error from '../components/ErrorDisplays/Error';
import Seats from '../layout/SelectSeatCard/Seats/Seats';
import NavigationBar from '../layout/Navbar/NavigationBar';
import useFormatDate from '../hooks/useFormatDate';

import { finalizeReschedule } from '../reducers/rescheduleBooking/rescheduleBookingSlice';
import { fetchRescheduleSeats } from '../reducers/rescheduleBooking/rescheduleBookingSlice';

const RescheduleSeat = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { seats, loading, error, origin, destination, success } = useSelector((state) => state.rescheduleBooking);
  const [selectedSeat, setSelectedSeat] = useState({
    amount: 0,
    noofseats: 0,
    seats: [],
    trip_id: 0,
  });
  const [seatError, setSeatError] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let timer;
    if (hasError) {
      timer = setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [hasError]);

  const date = useFormatDate(seats?.trip ? seats.trip['trip date'] : '', 'short');

  const handleSelectedSeat = (seatInfo) => {
    const isValidSelection = seatInfo.no_of_seats === (seats?.noofseats || 0);
    setSelectedSeat((prevState) => ({
      ...prevState,
      seats: seatInfo.seats,
      noofseats: seatInfo.no_of_seats,
      amount: seatInfo.amount,
      trip_id: seatInfo.trip_id,
    }));

    if (!isValidSelection) {
      setSeatError(`Please select exactly ${seats?.noofseats || 0} seat(s)`);
      setHasError(true);
    } else {
      setSeatError('');
      setHasError(false);
    }
  };

  useEffect(() => {
    dispatch(fetchRescheduleSeats(location.state));
  }, [dispatch, location.state]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return navigate('/customer/booking-history');
  }

  if (!seats || !seats.trip) {
    return (
      <div>
        <NavigationBar />
        <div className="container py-5">
          <h1 className="text-center">OOPS!!</h1>
          <p className="text-center">Something is not right, let&apos;s try again</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      booking_id: seats.booking.id,
      trip_id: selectedSeat.trip_id,
      seats: selectedSeat.seats,
    };
    dispatch(finalizeReschedule(data));
    if (success) {
      navigate('/', { state: { success: success } });
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <div className="container px-3 px-md-5 pb-5 flex-grow-1 padding-top">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <h2 className="pb-4 text-uppercase">Select Seats</h2>
            {origin && destination && (
              <h3 className="mb-3 fw-medium">
                {origin.location} ({origin.name}) to {destination.location} ({destination.name})
              </h3>
            )}
            <p className="mb-0 text-uppercase" style={{ color: '#28A745', fontSize: '1.25rem' }}>
              {seats.trip.capacity} Seater Trip
            </p>
            <p className="mb-0 my-2" style={{ fontSize: '1.25rem' }}>
              {seats.noofseats} Seats
            </p>

            <div className="shadow my-5 p-4">
              <h2 className="pb-4 pt-3">Customer Information</h2>
              <div className="table-responsive">
                <table className="table my-4">
                  <tbody>
                    <tr className="border-top">
                      <td className="text-secondary fw-bold py-3">Name:</td>
                      <td className="py-3">{seats.booking.gender}</td>
                    </tr>
                    <tr className="border-top">
                      <td className="text-secondary fw-bold py-3">Phone:</td>
                      <td className="py-3">{seats.booking.phone}</td>
                    </tr>
                    <tr className="border-top">
                      <td className="text-secondary fw-bold py-3">Email:</td>
                      <td className="py-3"></td>
                    </tr>
                    <tr className="border-top">
                      <td className="text-secondary fw-bold py-3">Reference:</td>
                      <td className="py-3">{seats.booking.ref_no}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-5">
                <h3 className="pb-4 pt-3" style={{ color: '#DC3545' }}>
                  Move From (Old Trip)
                </h3>
                <div className="table-responsive">
                  <table className="table mt-3 mb-4">
                    <tbody>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Route:</td>
                        <td className="py-3 border">
                          {origin.location} ({origin.name}) - {destination.location} ({destination.name})
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Vehicle:</td>
                        <td className="py-3 border">{seats.trip.capacity} Seater</td>
                      </tr>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Trip Status:</td>
                        <td className="py-3 border">
                          <span className="bg-warning text-dark fw-bold rounded px-2 py-1 d-inline-block">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Trip Date:</td>
                        <td className="py-3 border">
                          {date}, {seats.trip['trip time']}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="my-5">
                <h3 className="pb-4 pt-3" style={{ color: '#28A745' }}>
                  Move To (New Trip)
                </h3>
                <div className="table-responsive">
                  <table className="table mt-3 mb-4">
                    <tbody>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Route:</td>
                        <td className="py-3 border">
                          {origin.location} ({origin.name}) - {destination.location} ({destination.name})
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Vehicle:</td>
                        <td className="py-3 border">{seats.trip.capacity} Seater</td>
                      </tr>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Trip Status:</td>
                        <td className="py-3 border">
                          <span className="bg-warning text-dark fw-bold rounded px-2 py-1 d-inline-block">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-secondary fw-bold py-3 border">Trip Date:</td>
                        <td className="py-3 border">
                          {date}, {seats.trip['trip time']}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-5 text-center" style={{ marginTop: '10rem' }}>
                <h3>Seat Arrangement</h3>
                <div className="py-5 d-flex justify-content-center align-items-center">
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
                {seats && <Seats trip_type={`${seats.trip.capacity} seater`} handleSelectedSeat={handleSelectedSeat} updatedData={seats} />}

                <Error className="text-danger fw-medium" message={seatError} />
                <div className="form-check text-start mt-3">
                  <input className="form-check-input" type="checkbox" id="terms" required />
                  <label className="form-check-label text-secondary" htmlFor="terms">
                    I have read and agree to the{' '}
                    <a href="/terms" style={{ color: '#DC3545', textDecoration: 'none' }}>
                      terms and conditions
                    </a>{' '}
                    of service
                  </label>
                </div>
                <Button disabled={selectedSeat.noofseats !== seats.noofseats} onClick={handleSubmit} btnName="Continue" className="btn btn-secondary my-4 py-2 px-4" style={{ backgroundColor: '#343A40' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RescheduleSeat;
