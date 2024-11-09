import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/Loader/Loader';
import Footer from '../layout/Footer/Footer';
import MiniNav from '../layout/Navbar/MiniNav/MiniNav';
import NavigationBar from '../layout/Navbar/NavigationBar';

import { fetchCustomerProfile } from '../reducers/customer/myProfileSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { loading, customerProfile } = useSelector((state) => state.myProfile);
  const token = useSelector((state) => state.authentication.token);

  const customerDetails = customerProfile?.['user profile'];

  useEffect(() => {
    if (!customerDetails && !loading) {
      dispatch(fetchCustomerProfile());
    }
  }, [dispatch, customerDetails, loading]);

  return (
    <>
      {token ? (
        <>
          <NavigationBar />
          <div className="container px-md-5 padding-top">
            <MiniNav />
            <h2 className="fw-medium mt-5 mb-4">Your Account</h2>
            <div className="user-info mb-5">
              <div className="mb-3">
                <p className="valgee-red small mb-1">Name:</p>
                <h6 className="text-dark">{customerDetails?.name}</h6>
              </div>
              <div className="mb-3">
                <p className="valgee-red small mb-1">Email:</p>
                <h6 className="text-dark">{customerDetails?.email}</h6>
              </div>
              <div className="mb-3">
                <p className="valgee-red small mb-1">Phone:</p>
                <h6 className="text-dark">{customerDetails?.phone}</h6>
              </div>
              <div className="mb-3">
                <p className="valgee-red small mb-1">N.O.K Name:</p>
                <h6 className="text-dark">{customerDetails?.nok_name}</h6>
              </div>
              <div className="mb-3">
                <p className="valgee-red small mb-1">N.O.K Phone:</p>
                <h6 className="text-dark">{customerDetails?.nok_phone}</h6>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MyProfile;
