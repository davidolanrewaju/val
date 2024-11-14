import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import Footer from '../layout/Footer/Footer';
import Button from '../components/Button/Button';
import useFormatDate from '../hooks/useFormatDate';
import TextInput from '../components/Forms/TextInput';
import SelectInput from '../components/Forms/SelectInput';
import NavigationBar from '../layout/Navbar/NavigationBar';

import { signup, login } from '../reducers/authentication/authenticationSlice';
import { selectSeat } from '../reducers/selectedSeat/selectedSeatSlice';

const BookingDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.selectedSeat.loading);
  const data = useSelector((state) => state.selectedSeat.selectedSeats);
  const authError = useSelector((state) => state.authentication.error);

  const [customerData, setCustomerData] = useState({
    trip_id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirm: '',
    nok_name: '',
    nok_phone: '',
    noofseats: 1,
    bookingIds: [],
    selectedseats: [],
    passengers: [],
  });

  const [passengerDetail, setPassengerDetail] = useState({
    gender: '',
    name: '',
  });

  const tripDate = data?.trip?.trip_date || null;
  const formattedDate = useFormatDate(tripDate, 'long');

  useEffect(() => {
    if (location.state) {
      dispatch(selectSeat(location.state));
    }
  }, [dispatch, location.state]);

  const passengerDetails = useMemo(() => {
    if (!data || !data.bookingIds) {
      return [];
    }
    return data.bookingIds.map((bookingId) => [bookingId, ...Object.values(passengerDetail)]);
  }, [data, passengerDetail]);

  if (loading || !data || !data.bookings || !data.bookings[0]) {
    return <Loader />;
  }

  const handlePassengerDataChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetail((prevPassengerDetail) => ({
      ...prevPassengerDetail,
      [name]: value,
      name: customerData.name,
    }));
  };

  const handleCustomerDataChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevCustomerData) => ({
      ...prevCustomerData,
      trip_id: data.bookings[0].trip.id,
      [name]: value,
      noofseats: [...data.selected_seats].length,
      bookingIds: [...data.bookingIds],
      selectedseats: [...data.selected_seats],
      passengers: [...passengerDetails],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signupData = {
      name: customerData.name,
      email: customerData.email,
      phone: customerData.phone,
      address: 'Address',
      password: customerData.phone,
      confirm: customerData.phone,
    };

    try {
      const signupResult = await dispatch(signup(signupData)).unwrap();
      if (signupResult.token) {
        const loginCredentials = {
          email: customerData.email,
          password: customerData.phone,
        };
        await dispatch(login(loginCredentials)).unwrap();
        navigate('/bookings/save', { state: { ...data, customerDetails: customerData } });
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Attempt login if signup fails (user might already exist)
      try {
        const loginCredentials = {
          email: customerData.email,
          password: customerData.phone,
        };
        await dispatch(login(loginCredentials)).unwrap();
        navigate('/bookings/save', { state: { ...data, customerDetails: customerData } });
      } catch (loginError) {
        console.error('Login failed:', loginError);
      }
    }
  };

  return (
    <div className='booking-details'>
      <NavigationBar />
      <div className='container px-md-5 padding-top'>
        <h1 className='text-uppercase fs-2 fw-medium' style={{ marginBottom: '40px' }}>
          Passenger Details
        </h1>
        <div className='row mt-4'>
          <div className='col-lg-6'>
            <div className='bg-white shadow p-3 text-secondary'>
              <div className='mb-5'>
                <div className='mt-3 py-2 px-3 border-top border-bottom row' style={{ backgroundColor: 'rgba(112, 112, 112, 0.07)' }}>
                  <p className='fw-semibold col-6'>Route</p>
                  <p className='col-6'>
                    : {data.bookings[0].route} [{data.bookings[0].trip.capacity} Seater]
                  </p>
                </div>
                <div className='py-2 px-3 row'>
                  <p className='fw-semibold col-6'>Date & Time</p>
                  <p className='col-6'>
                    : {formattedDate}
                    <span className='text-danger'> {data.bookings[0].trip.trip_time}</span>
                  </p>
                </div>
                <div className='py-2 px-3 border-top border-bottom row' style={{ backgroundColor: 'rgba(112, 112, 112, 0.07)' }}>
                  <p className='fw-semibold col-6'>Amount</p>
                  <p className='col-6'>: &#8358;{data.bookings[0].trip.amount} for 1 seat</p>
                </div>
              </div>

              <hr />

              <h3 className='my-3 fs-4 fw-medium'>Seat {data.bookings[0].seat_number}</h3>

              <form onSubmit={handleSubmit}>
                <div className='row mb-5'>
                  <div className='col-lg-8 col-md-12 mb-3 mb-md-0'>
                    <TextInput label='Full Name' span='(As it appears on ID Card)' className='booking-form' spanClassName='spanText' type='text' name='name' onChange={handleCustomerDataChange} required />
                  </div>
                  <div className='col-lg-4 col-md-12 mt-4 mt-lg-0'>
                    <SelectInput name='gender' label='Gender' className='booking-form' onChange={handlePassengerDataChange} required>
                      <option value=''>-Select Gender-</option>
                      <option value='M'>Male</option>
                      <option value='F'>Female</option>
                    </SelectInput>
                  </div>
                </div>

                <hr />

                <div className='row mt-3'>
                  <div className='col-12 col-lg-6 mb-3 mb-md-0'>
                    <TextInput label='Email' containerClassName='' className='booking-form' type='email' name='email' onChange={handleCustomerDataChange} required />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <TextInput label='Phone' containerClassName='' className='booking-form' type='tel' name='phone' onChange={handleCustomerDataChange} required />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-12 col-lg-6 mb-3 mb-md-0'>
                    <TextInput label='Next of Kin' containerClassName='' className='booking-form' type='text' name='nok_name' onChange={handleCustomerDataChange} required />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <TextInput label='Next of Kin Phone' containerClassName='' className='booking-form' type='tel' name='nok_phone' onChange={handleCustomerDataChange} required />
                  </div>
                </div>

                {authError && (
                  <div className='text-danger' role='alert'>
                    {authError}
                  </div>
                )}

                <div className='text-end'>
                  <Button btnName='Continue' className='login-btn mt-5 mb-3' />
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-6'>
            <img className='img-fluid' src='/assets/images/payment.png' alt='payment' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingDetails;
