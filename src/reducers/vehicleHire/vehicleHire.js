// actions/bookingActions.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
  loading: false,
};

const API = import.meta.env.VITE_URL_API;

export const getHireVehicle = createAsyncThunk('vehicleHire/getHireVehicle', async (data) => {
  const response = await axios.post(`${API}/bookings/charter`, data);

  return response.data;
});

const vehicleHireSlice = createSlice({
  name: 'tripsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHireVehicle.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHireVehicle.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(getHireVehicle.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default vehicleHireSlice.reducer;
