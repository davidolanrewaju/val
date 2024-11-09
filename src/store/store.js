// import logger from 'redux-logger';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import tripsReducer from '../reducers/trips/tripsSlice';
import ticketReducer from '../reducers/ticket/ticketSlice';
import walletReducer from '../reducers/wallet/walletSlice';
import vehicleReducer from '../reducers/vehicle/vehicleSlice';
import myProfileReducer from '../reducers/customer/myProfileSlice';
import vehicleHireReducer from '../reducers/vehicleHire/vehicleHire';
import locationToReducer from '../reducers/location/locationToSlice';
import selectSeatReducer from '../reducers/selectSeats/selectSeatSlice';
import locationFromReducer from '../reducers/location/locationFromSlice';
import customerInfoReducer from '../reducers/customerInfo/customerInfoSlice';
import selectedSeatReducer from '../reducers/selectedSeat/selectedSeatSlice';
import customerWalletReducer from '../reducers/customer/customerWalletSlice';
import cancelBookingReducer from '../reducers/cancelBooking/cancelBookingSlice';
import customerBookingsReducer from '../reducers/customer/customerBookingsSlice';
import authenticationReducer from '../reducers/authentication/authenticationSlice';
import rescheduleBookingReducer from '../reducers/rescheduleBooking/rescheduleBookingSlice';

const rootReducer = combineReducers({
  ticket: ticketReducer,
  wallet: walletReducer,
  tripList: tripsReducer,
  seat: selectSeatReducer,
  myProfile: myProfileReducer,
  vehicleType: vehicleReducer,
  locationTo: locationToReducer,
  vehicleHire: vehicleHireReducer,
  customerInfo: customerInfoReducer,
  locationFrom: locationFromReducer,
  selectedSeat: selectedSeatReducer,
  cancelBooking: cancelBookingReducer,
  customerWallet: customerWalletReducer,
  authentication: authenticationReducer,
  customersBookings: customerBookingsReducer,
  rescheduleBooking: rescheduleBookingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
