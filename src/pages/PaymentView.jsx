import { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import Footer from '../layout/Footer/Footer';
import Button from '../components/Button/Button';
import SelectInput from '../components/Forms/SelectInput';
import NavigationBar from '../layout/Navbar/NavigationBar';

import useFormatDate from '../hooks/useFormatDate';
import { useWalletBalance } from '../hooks/useWalletBalance';
import { makeWalletPayment } from '../reducers/wallet/walletSlice';
import { postCustomerInfoData } from '../reducers/customerInfo/customerInfoSlice';

const PaymentView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const customerData = location.state;
  const [paymentOption, setPaymentOption] = useState('');
  const [isPayButtonDisabled, setIsPayButtonDisabled] = useState(true);
  const loading = useSelector((state) => state.customerInfo.loading);
  const response = useSelector((state) => state.customerInfo.customerInfoData);
  const walletBalance = useWalletBalance();

  //Fetch Customer Information for payment
  useEffect(() => {
    if (customerData?.customerDetails) {
      dispatch(postCustomerInfoData(customerData.customerDetails));
    }
  }, [dispatch, customerData]);

  console.log(customerData);

  useEffect(() => {
    setIsPayButtonDisabled(paymentOption === '');
  }, [paymentOption]);

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  //Handle customer payment using wallet payment API
  const handleWalletPayment = () => {
    //Wallet Payment API body details
    const walletPaymentInfo = {
      token: response.token,
      body: {
        type: 'wallet',
        purpose: 'bookings',
        reference: response.reference_number,
        amount: response.amount,
        bookingIds: response.bookingIds,
      },
    };
    dispatch(makeWalletPayment(walletPaymentInfo));
    navigate('/', { state: { message: `Booking for : ${response.route} was successful. Reference code is: ${response.reference_number} (${response.trip_type} for ${response.noofseats}). Please be at the terminal 30mins before your trip` } });
    window.scrollTo(0, 0);
  };

  //Fill route details
  const locationRoutes = [
    {
      name: 'Jos',
      location: 'Plateau',
    },
    {
      name: 'Abuja',
      location: 'FCT',
    },
    {
      name: 'Markudi',
      location: 'Benue',
    }
  ];
  const route = customerData.bookings[0].route.split(' - ');
  const getRouteDetails = () => {
    const origin = locationRoutes.find((locationRoute) => locationRoute.name === route[0]);
    const destination = locationRoutes.find((locationRoute) => locationRoute.name === route[1]);
    return { origin, destination };
  };
  const { origin, destination } = getRouteDetails();

  //Formet Date to fit UI
  const formatDate = useFormatDate(customerData.trip.trip_date);

  //Consume Third partyAPI(PayStack)
  const paystackDetails = {
    email: response.email,
    amount: response.amount * 100,
    metadata: { ...response.metadata },
    publicKey: response.paystack_public_key,
    text: 'Make Payment',
    onSuccess: () => {
      navigate('/', { state: { message: `Booking for : ${response.route} was successful. Reference code is: ${response.reference_number} (${response.trip_type} for ${response.noofseats}). Please be at the terminal 30mins before your trip` } });
      window.scrollTo(0, 0);
    },
    onClose: () => alert('Payment unsuccessful'),
  };

  //On Form submit
  const onSubmit = (e) => {
    e.preventDefault();
  };

  //Loading State
  if (loading) {
    return <Loader />;
  }

  //Return to homepage
  const returnHome = () => {
    navigate('/', { state: { message: 'Oops! You just Cancelled your booking, you need to start the process again' } });
  };

  return (
    <>
      <NavigationBar />
      <div className="container px-md-5 padding-top">
        <div className="row justify-content-center" style={{ marginTop: '50px'}}>
          <div className="col-12 col-lg-6 text-center">
            <h2 className="pb-4 text-uppercase">Make Payment</h2>
            <div className="p-2 shadow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.07)' }}>
              <img className="img-fluid shadow" src="/assets/images/luggage.jpg" alt="" />
            </div>
          </div>
        </div>
        <form className="my-5 text-center col-12 col-lg-6 offset-lg-3 mx-auto" onSubmit={onSubmit}>
          <div className="bg-white pt-4 px-1">
            <div className="bg-light py-4 border-top border-bottom" style={{ backgroundColor: 'rgba(112, 112, 112, 0.07)' }}>
              {origin && destination && (
                <h1 className="mb-3 fw-medium">
                  {origin.location} ({origin.name}) to {destination.location} ({destination.name})
                </h1>
              )}
              <p className="mb-0" style={{ color: '#28A745', fontSize: '20px' }}>
                {customerData.trip.trip_type.split(' ')[0]} Seater
              </p>
            </div>
            <div className="py-3">
              <h1 className="h5 fw-medium">
                {formatDate}, at {customerData.trip.trip_time}
              </h1>
            </div>
            <div className="bg-light py-3 border-top border-bottom">
              <h4 className="fw-medium text-secondary">Passenger:</h4>
              <p className='m-0'>{customerData.customerDetails.name}</p>
            </div>
            <div className="py-3">
              <h4 className="fw-medium text-secondary">Amount To Pay:</h4>
              <p className="text-secondary m-0">
                ₦{customerData.amount} for {customerData.customerDetails.noofseats} seat
              </p>
            </div>

            <div className="py-3 px-4 bg-light border-top">
              <p className="fw-bold text-secondary m-0">Select Payment Method:</p>
              <div className="col-md-8 mx-auto">
                <SelectInput name="paymentMethod" containerClassName="mb-3" className="form-select text-secondary" onChange={handlePaymentOptionChange} value={paymentOption}>
                  <option value="">- Select -</option>
                  <option value="paystack">Pay with Paystack (Card or USSD)</option>
                  {walletBalance && walletBalance > 7500 && <option value="wallet">Wallet</option>}
                </SelectInput>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <Button link="/bookings/details" btnName="Start Over" className="btn px-3 py-2 my-2 fw-medium" onClick={returnHome} style={{ border: '1px solid #F82827', color: '#F82827' }} />
                {paymentOption === 'paystack' ? (
                  <PaystackButton className="pay-now px-3 my-2" {...paystackDetails} />
                ) : paymentOption === 'wallet' ? (
                  <Button btnName="Make Payment" onClick={handleWalletPayment} className="pay-now py-2 px-3 my-2" />
                ) : (
                  <Button disabled={isPayButtonDisabled} btnName="Make Payment" className={`pay-now px-3 py-2 my-2 fw-medium ${isPayButtonDisabled ? 'btn-secondary' : 'btn-success'}`} />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PaymentView;
