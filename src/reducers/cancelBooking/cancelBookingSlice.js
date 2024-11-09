import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  loading: false,
  message: '',
};

export const fetchBookingCancelMessage = createAsyncThunk('cancelBooking/fetchBookingCancelMessage', async (data) => {
  console.log(data);
  const response = await axios.post(`${API}/booking/cancel`, data.body, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  });

  return response.data;
});

const cancelBookingSlice = createSlice({
  name: 'bookingCancel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchCustomerBookings actions
      .addCase(fetchBookingCancelMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookingCancelMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(fetchBookingCancelMessage.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default cancelBookingSlice.reducer;
