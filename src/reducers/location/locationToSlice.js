import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  locationsTo: [],
};

export const getLocationsTo = createAsyncThunk('locations/getLocationsTo', async () => {
  const request = await axios.get(`${API}/trips/terminals`);
  const response = request.data;

  return response;
});

const locationToSlice = createSlice({
  name: 'locationTo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocationsTo.fulfilled, (state, action) => {
      // Update state with received data
      state.locationsTo = action.payload;
    });
  },
});

export default locationToSlice.reducer;
