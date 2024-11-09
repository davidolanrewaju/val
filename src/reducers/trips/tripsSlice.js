// actions/bookingActions.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tripsList: [],
  loading: false,
};

const API = import.meta.env.VITE_URL_API;

export const directBooking = createAsyncThunk('directBooking/postDirectBooking', async (bookingData) => {
  const response = await axios.post(`${API}/bookings/select/vehicle`, bookingData);
  return response.data;
});

const tripsSlice = createSlice({
  name: 'tripsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(directBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(directBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.tripsList = action.payload;
      })
      .addCase(directBooking.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default tripsSlice.reducer;
