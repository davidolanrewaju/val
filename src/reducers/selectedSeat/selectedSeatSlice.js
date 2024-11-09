// actions/bookingActions.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selectedSeats: {},
  loading: false,
};

const API = import.meta.env.VITE_URL_API;

export const selectSeat = createAsyncThunk('selectedSeat/postSelectedSeat', async (seatInfo) => {
  const seatData = { ...seatInfo };
  console.log(seatData);
  const response = await axios.post(`${API}/bookings/process-booking-seat`, seatData);

  return response.data;
});

const selectedSeatSlice = createSlice({
  name: 'selectedSeats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectSeat.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectSeat.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSeats = action.payload.data;
      })
      .addCase(selectSeat.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default selectedSeatSlice.reducer;
