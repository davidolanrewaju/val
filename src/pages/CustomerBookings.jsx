import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../layout/Footer/Footer';
import Loader from '../components/Loader/Loader';
import MiniNav from '../layout/Navbar/MiniNav/MiniNav';
import CancelModal from '../layout/Modal/CancelModal';
import RescheduleModal from '../layout/Modal/RescheduleModal';
import NavigationBar from '../layout/Navbar/NavigationBar';

import { fetchCustomerBookings } from '../reducers/customer/customerBookingsSlice';

const CustomerBookings = () => {
  const dispatch = useDispatch();
  const [bookingId, setBookingId] = useState(0);
  const [bookingName, setBookingName] = useState('');
  const [cancelModal, showCancelModal] = useState(false);
  const [rescheduleModal, showRescheduleModal] = useState(false);
  const [rescheduleError, setRescheduleError] = useState(null);
  const [cancelMessage, setCancelMessage] = useState(null);
  const rescheduleBookingState = useSelector((state) => state.rescheduleBooking);
  const { message } = useSelector((state) => state.cancelBooking);
  const token = useSelector((state) => state.authentication.token);
  const { loading, customerBookings, totalBooking } = useSelector((state) => state.customersBookings);
  const bookingsData = customerBookings.data;

  useEffect(() => {
    if (!customerBookings.data && !loading) {
      dispatch(fetchCustomerBookings());
    }
  }, [dispatch, customerBookings.data, loading]);

  useEffect(() => {
    if (rescheduleBookingState.error) {
      setRescheduleError(rescheduleBookingState.error);
    }
  }, [rescheduleBookingState.error]);

  useEffect(() => {
    setCancelMessage(message);
    if (message) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [message]);

  const handleBookingReschedule = (name, id) => {
    setCancelMessage(null);
    setRescheduleError(null);
    showRescheduleModal(!rescheduleModal);
    setBookingName(name);
    setBookingId(id);
  };

  const handleBookingCancel = (id) => {
    showCancelModal(!cancelModal);
    setBookingId(id);
  };

  const formatDate = (inputDate, format) => {
    const date = new Date(inputDate);

    if (format === 'short') {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear();

      return `${day} ${month} ${year}`;
    } else {
      const weekday = date.toLocaleDateString('default', { weekday: 'short' });
      const day = date.toLocaleDateString('default', { day: 'numeric' });
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();

      return `${weekday} ${day} ${month} ${year}`;
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NavigationBar />
      <div className="container px-md-5 padding-top">
        {token ? (
          <>
            <MiniNav />
            <h2 className="fw-medium mt-5 mb-4">Bookings</h2>
            <div className="my-4">
              <h6 className="text-danger">Total Bookings: </h6>
              <h6>{totalBooking}</h6>
            </div>
            <div className="my-5">
              <p className="my-2 fs-5 fw-medium">Booking History</p>
              {rescheduleError && (
                <div className="alert alert-danger" role="alert">
                  {rescheduleError}
                </div>
              )}
              {cancelMessage && (
                <div className="alert alert-success" role="alert">
                  {cancelMessage}
                </div>
              )}
              <div className="table-responsive">
                <table className="table table-bordered text-start">
                  <thead>
                    <tr>
                      <th className="p-3">Booking Date</th>
                      <th className="p-3">Trip Date</th>
                      <th className="p-3">Route</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Reference</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingsData && bookingsData.length > 0 ? (
                      bookingsData.map((data) => (
                        <tr key={data.id}>
                          <td className="p-2"></td>
                          <td className="p-2">
                            {formatDate(data.trip['trip date'], 'short')}, {data.trip['trip time']}
                          </td>
                          <td className="p-2">
                            <p className="mb-1">{data.route}</p>
                            <p className="text-danger mb-0">{data['trip type']}</p>
                          </td>
                          <td className="p-2">{data.name}</td>
                          <td className="p-2">{data['reference number']}</td>
                          <td className="p-2">&#8358;{data.trip.amount}</td>
                          <td className="p-2">
                            <p className={`mb-0 ${data.status.color === 'yellow' ? 'text-warning' : ''} ${data.status.color === 'green' ? 'text-success' : ''}`}>{data.status.name}</p>
                          </td>
                          <td className="p-2">
                            {data.status.name === 'Paid' ? (
                              <div className="d-flex flex-column flex-md-row gap-2">
                                <button onClick={() => handleBookingReschedule(data.name, data.id)} className="btn btn-outline-info btn-sm">
                                  Reschedule
                                </button>
                                <button onClick={() => handleBookingCancel(data.id)} className="btn btn-outline-secondary btn-sm">
                                  Cancel Trip
                                </button>
                              </div>
                            ) : null}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center">
                          No bookings found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="my-5">
              <p className="fw-bold text-muted">
                Travel Notes: <br />
                <span className="fw-normal">It&apos;s a travel experience. We aim to help you create the most comfortable journey.</span>
              </p>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1>Something went wrong...Please Try Again</h1>
          </div>
        )}
      </div>
      <Footer />
      <CancelModal token={token} bookingId={bookingId} showCancelModal={cancelModal} setShowCancelModal={showCancelModal} />
      <RescheduleModal token={token} bookingId={bookingId} bookingName={bookingName} rescheduleModal={rescheduleModal} showRescheduleModal={showRescheduleModal} />
    </>
  );
};

CustomerBookings.propTypes = {
  setBookingId: PropTypes.func,
  setBookingName: PropTypes.func,
  showCancelModal: PropTypes.bool,
  rescheduleModal: PropTypes.bool,
  setShowCancelModal: PropTypes.func,
  showRescheduleModal: PropTypes.func,
};

export default CustomerBookings;
