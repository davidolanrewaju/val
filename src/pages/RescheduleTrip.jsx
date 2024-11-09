import { useEffect, useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import Footer from '../layout/Footer/Footer';
import Button from '../components/Button/Button';
import useFormatDate from '../hooks/useFormatDate';
import NavigationBar from '../layout/Navbar/NavigationBar';

const RescheduleTrip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (location.state) {
      setResponse(location.state);
      setLoading(false);
    } else {
      navigate('/');
    }
  }, [location.state, navigate]);

  const tripList = response?.data?.trips || [];
  const { origin, destination, date, booking_id } = response?.data || {};

  const formatDate = useFormatDate(date, 'short');

  if (loading) {
    return <Loader />;
  }

  if (!tripList || tripList.length === 0) {
    return (
      <div>
        <NavigationBar />
        <div className="container pb-5 px-md-5 padding-top">
          <div className="alert alert-danger text-center">
            <h3>Please choose a different date, there are no available trips for the chosen date</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const groupedVehicles = tripList.reduce((acc, vehicle) => {
    if (!acc[vehicle.time]) {
      acc[vehicle.time] = [];
    }
    acc[vehicle.time].push(vehicle);
    return acc;
  }, {});

  const handleOnSelect = (id) => {
    const params = { origin, destination, trip_id: id, booking_id };
    navigate(`/bookings/reschedule/select/seats/${id}`, { state: params });
  };

  return (
    <>
      <NavigationBar />
      <div className="container px-3 px-md-5 pb-5 reschedule-padding">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="mb-4">
              <h2 className="text-uppercase mb-2" style={{ color: '#303030' }}>
                Available Trips
              </h2>
              <h5 className="fw-medium mb-2" style={{ color: '#28a745' }}>
                on {formatDate}
              </h5>
              <h3 className="mb-2" style={{ color: '#303030' }}>
                {origin.location} ({origin.name}) to {destination.location} ({destination.name})
              </h3>
              <h5 className="text-uppercase mt-1 mb-2 fw-500" style={{ color: '#28a745' }}>
                {response.data.description} Trip
              </h5>
            </div>

            <div className="w-100 table-responsive shadow p-4">
              {Object.entries(groupedVehicles).map(([time, vehicles]) => (
                <div key={time} className="mb-4">
                  <div className="table-responsive">
                    <table className="w-100 table-borderless">
                      <thead style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        <tr>
                          <th className="py-2 py-md-3 px-2">Time</th>
                          <th className="py-2 py-md-3 px-2">Date</th>
                          <th className="py-2 py-md-3 px-2">Availability</th>
                          <th className="py-2 py-md-3 px-2">Amount</th>
                          <th className="py-2 py-md-3 px-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vehicles.map((vehicle) => (
                          <tr key={vehicle.id}>
                            <td className="py-2 py-md-3 px-2">{time}</td>
                            <td className="py-2 py-md-3 px-2">{formatDate}</td>
                            <td className="py-2 py-md-3 px-2">
                              <p className={`text-danger mb-0 ${vehicle.remaining_seats !== 0 ? 'cursor-pointer' : ''}`} style={{ fontSize: '0.9rem' }}>
                                {vehicle.remaining_seats} seats available
                              </p>
                            </td>
                            <td className="py-2 py-md-3 px-2" style={{ fontSize: '0.9rem' }}>
                              &#8358;{vehicle.amount}
                            </td>
                            <td className="py-2 py-md-3 px-2">
                              {vehicle.remaining_seats !== 0 ? (
                                <Button btnName="Select Seat" onClick={() => handleOnSelect(vehicle.id)} className="select-btn w-100" style={{ fontSize: '0.9rem', padding: '0.25rem 0.5rem' }} />
                              ) : (
                                <p className="text-danger fw-bold mb-0" style={{ fontSize: '0.9rem' }}>
                                  Booked
                                </p>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <div className="mt-4 py-2 py-md-3 px-2 d-flex justify-content-end" style={{ width: '100%', overflowX: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <button className="btn-outline bg-light rounded py-1" style={{ fontSize: '0.9rem' }}>
                  <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    Go Back to Home
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img className="img-fluid" src="/assets/images/payment.png" alt="payment" />
          </div>
        </div>

        <div className="mt-4">
          <p className="fw-bold fs-6 text-secondary">
            Travel Notes: <br />
            <span className="fw-normal">It&apos;s a travel experience. We aim to help you create the most comfortable journey.</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RescheduleTrip;
