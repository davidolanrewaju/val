import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  vehiclesType: [],
};

export const getVehicles = createAsyncThunk('vehicles/getVehicles', async () => {
  const request = await axios.get(`${API}/trips/trip-types`);
  const response = request.data;

  return response;
});

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      // Update state with received data
      state.vehiclesType = action.payload;
    });
  },
});

export default vehicleSlice.reducer;
