import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { checkAuthStatus } from './reducers/authentication/authenticationSlice';

import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import SelectTrip from './pages/SelectTrip';
import SelectSeats from './pages/SelectSeats';
import PaymentView from './pages/PaymentView';
import ChatArea from './pages/Chatbox/ChatArea';
import TripFeedback from './pages/TripFeedback';
import DirectBooking from './pages/DirectBooking';
import TripReschedule from './pages/TripReschedule';
import BookingDetails from './pages/BookingDetails';
import ChangePassword from './pages/ChangePassword';
import CustomerWallet from './pages/CustomerWallet';
import RescheduleSeat from './pages/RescheduleSeat';
import RescheduleTrip from './pages/RescheduleTrip';
import CourierFeedback from './pages/CourierFeedback';
import CustomerBookings from './pages/CustomerBookings';
import TicketHistory from './pages/TicketHistory/TicketHistory';
import TermsAndConditions from './pages/TermsAndConditions';
import Loader from './components/Loader/Loader';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const loading = useSelector((state) => state.authentication.loading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      dispatch(checkAuthStatus());
    }
  }, [dispatch, isAuthenticated, loading]);

  if (loading) {
    return <Loader/>;
  }

  if (!isAuthenticated) {
    return navigate('/login');
  }
  return children;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DirectBooking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookings/select/vehicles" element={<SelectTrip />} />
      <Route path="/bookings/select/seats/:id" element={<SelectSeats />} />
      <Route path="/bookings/details" element={<BookingDetails />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/customer/feedback" element={<TripFeedback />} />
      <Route path="/customer/courier-feedback" element={<CourierFeedback />} />

      {/* Protected routes */}
      <Route
        path="/ticket/index/:id"
        element={
          <ProtectedRoute>
            <ChatArea />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings/save"
        element={
          <ProtectedRoute>
            <PaymentView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/history"
        element={
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/ticket-history"
        element={
          <ProtectedRoute>
            <TicketHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/password/reset"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />

      <Route
        path="/booking/reschedule"
        element={
          <ProtectedRoute>
            <TripReschedule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/wallet-history"
        element={
          <ProtectedRoute>
            <CustomerWallet />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/booking-history"
        element={
          <ProtectedRoute>
            <CustomerBookings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings/reschedule/:id"
        element={
          <ProtectedRoute>
            <RescheduleTrip />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings/reschedule/select/seats/:id"
        element={
          <ProtectedRoute>
            <RescheduleSeat />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
