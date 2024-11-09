import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  locationsFrom: [],
};

export const getLocationsFrom = createAsyncThunk('locations/getLocationsFrom', async () => {
  const request = await axios.get(`${API}/trips/terminals`);
  const response = request.data;

  return response;
});

const locationFromSlice = createSlice({
  name: 'locationFrom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocationsFrom.fulfilled, (state, action) => {
      // Update state with received data
      state.locationsFrom = action.payload;
    });
  },
});

export default locationFromSlice.reducer;
