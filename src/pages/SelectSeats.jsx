/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../components/Loader/Loader';
import Footer from '../layout/Footer/Footer';
import NavigationBar from '../layout/Navbar/NavigationBar';
import SelectSeatCard from '../layout/SelectSeatCard/SelectSeatCard';

import { getSeat } from '../reducers/selectSeats/selectSeatSlice';

const SelectSeats = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const seats = useSelector((state) => state.seat.seats);
  const origin = useSelector((state) => state.seat.origin);
  const loading = useSelector((state) => state.seat.loading);
  const destination = useSelector((state) => state.seat.destination);

  useEffect(() => {
    dispatch(getSeat(location.state));
  }, [dispatch, location.state]);

  if (loading) {
    return <Loader />;
  }

  if (!seats) {
    return (
      <div>
        <NavigationBar />
        <div className="container pb-5 padding-top">
          <h1>OOPS!!</h1>
          <p>Something is not right, lets try again</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <div className="container pb-5 padding-top">
        <div className="row justify-content-center" style={{ marginTop: '50px' }}>
          <div className="container" style={{ marginLeft: '32px', marginRight: '32px' }}>
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-lg-6 offset-lg-3">
                <h1 className="fw-medium text-center" style={{ marginBottom: '20px', fontSize: '28px' }}>Select {seats.no_of_seats} Seat(s)</h1>
                <SelectSeatCard seats={seats} origin={origin} destination={destination} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectSeats;
