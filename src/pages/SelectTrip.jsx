import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import Footer from '../layout/Footer/Footer';
import Button from '../components/Button/Button';
import useFormatDate from '../hooks/useFormatDate';
import NavigationBar from '../layout/Navbar/NavigationBar';

import { directBooking } from '../reducers/trips/tripsSlice';

const SelectTrip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tripList.loading);
  const response = useSelector((state) => state.tripList.tripsList);

  useEffect(() => {
    if (location.state) {
      dispatch(directBooking(location.state));
    } else {
      navigate('/');
    }
  }, [dispatch, location.state, navigate]);

  const tripList = response?.data;
  const metaData = response?.meta;

  const tripDate = tripList?.[0]?.trip_date || null;
  const formatDate = useFormatDate(tripDate, 'short');

  if (loading) {
    return <Loader />;
  }

  if (!metaData || !tripList || tripList.length === 0) {
    return (
      <div>
        <NavigationBar />
        <div className="container px-md-5 pb-5 padding-top">
          <div className="text-center">
            <h1 className="display-4">Oops!!</h1>
            <p className="lead">Something is not right, let&apos;s try again</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

// Group trips by time
const groupedVehicles = tripList.reduce((acc, trip) => {
  if (!acc[trip.trip_time]) {
    acc[trip.trip_time] = [];
  }
  acc[trip.trip_time].push(trip);
  return acc;
}, {});


  const handleOnSelect = (id, date) => {
    const params = { ...metaData, trip_id: id, date: date };
    navigate(`/bookings/select/seats/${id}`, { state: params });
  };

  return (
    <>
      <NavigationBar />
      <div className="container px-md-5 pb-5 padding-top">
        <div className="mb-5">
          <h6 style={{ color: '#303030', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Available Trips</h6>
          <h2 style={{ color: '#303030', fontSize: '30px', textTransform: 'uppercase' }}>
            {metaData.origin.location} ({metaData.origin.name}) to {metaData.destination.location} ({metaData.destination.name})
          </h2>
          <h2 style={{ color: '#28a745', textTransform: 'uppercase', marginTop: '0.25rem', marginBottom: '0.5rem', fontWeight: '500', fontSize: '1.25rem' }}>{tripList[0].trip_type} Trip</h2>
          <p style={{ marginBottom: '1rem' }}>
            <b>Date, </b>
            {formatDate}
          </p>
        </div>

        <div className="table-responsive">
          {Object.entries(groupedVehicles).map(([time, vehicles]) => (
            <div key={time} style={{ width: '100%', overflowX: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderTop: '1px solid #dee2e6' }}>
              <div style={{ padding: '0.75rem', width: '100%', minWidth: '100%' }}>
                <h5 style={{ color: '#28a745', textTransform: 'uppercase', marginTop: '0.25rem' }}>{time}</h5>
              </div>
              {vehicles.map((vehicle) => (
                <table key={vehicle.id} className="table">
                  <tbody>
                    <tr style={{ padding: '0.75rem', borderTop: '1px solid #dee2e6', borderBottom: '0px solid transparent' }}>
                      <td style={{ paddingRight: '5px', paddingLeft: '5px', color: '#707070', fontSize: '18px' }}>
                        <b>Vehicle {vehicle.vehicle_order}</b>
                      </td>
                      <td style={{ paddingRight: '5px', paddingLeft: '5px', fontSize: '18px' }}>
                        <b className="text-secondary">Time:</b>
                        <p className="text-secondary mb-0">{vehicle.trip_time}</p>
                      </td>
                      <td style={{ paddingRight: '5px', paddingLeft: '5px', fontSize: '18px' }}>
                        <b className="text-secondary">Availability:</b>
                        <div onClick={() => vehicle.seats_available !== 0 && handleOnSelect(vehicle.id, vehicle.trip_date)}>
                          <p className={`text-danger mb-0 ${vehicle.seats_available !== 0 ? 'cursor-pointer' : ''}`}>{vehicle.seats_available} seats available</p>
                        </div>
                      </td>
                      <td style={{ paddingRight: '5px', paddingLeft: '5px', fontSize: '18px' }}>
                        <b className="text-secondary">Amount:</b>
                        <p className="text-secondary mb-0">&#8358;{vehicle.amount} per seat</p>
                      </td>
                      <td className="align-bottom text-end" style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                        {vehicle.seats_available !== 0 ? <Button btnName="Select Seats" onClick={() => handleOnSelect(vehicle.id, vehicle.trip_date)} className="select-btn" /> : <p className="text-danger fw-bold mb-0" style={{ paddingRight: '20px' }}>Fully Booked</p>}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          ))}
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

export default SelectTrip;
