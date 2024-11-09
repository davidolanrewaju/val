import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  seats: null,
  origin: null,
  loading: false,
  destination: null,
  error: null,
};

export const getSeat = createAsyncThunk('selectSeat/getSeat', async (params) => {
  const fetchedParams = { ...params };
  try {
    const response = await axios.get(`${API}/bookings/select/seat/${fetchedParams.trip_id}`, {
      params: {
        date: fetchedParams.date,
        type: fetchedParams.trip_type_name,
        origin: fetchedParams.origin.id,
        destination: fetchedParams.destination.id,
        no_of_seats: fetchedParams['number_of_seat(s)'],
      },
    });

    return {
      ...response.data,
      origin: fetchedParams.origin,
      destination: fetchedParams.destination,
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
});

const selectSeatSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSeat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSeat.fulfilled, (state, action) => {
        state.loading = false;
        state.seats = action.payload.data;
        state.origin = action.payload.origin;
        state.destination = action.payload.destination;
        state.error = null;
      })
      .addCase(getSeat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default selectSeatSlice.reducer;
