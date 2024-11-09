import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAxios from '../../utils/axiosInstance';

const initialState = {
  loading: false,
  data: {},
  seats: {},
  origin: 0,
  destination: 0,
  success: '',
  error: null,
};

export const fetchRescheduledBookingData = createAsyncThunk('rescheduleBooking/fetchRescheduledBookingData', async (data, { rejectWithValue }) => {
  try {
    const response = await authAxios.post(`/booking/reschedule`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data.message || { message: 'An error occurred' });
  }
});

export const fetchRescheduleSeats = createAsyncThunk('rescheduleBooking/fetchRescheduleSeats', async (data, { rejectWithValue }) => {
  try {
    const response = await authAxios.get(`booking/reschedule/seat/${data.trip_id}/${data.booking_id}`, {
      params: {
        origin: data.origin.id,
        destination: data.destination.id,
      },
    });
    return { ...response.data, origin: data.origin, destination: data.destination };
  } catch (error) {
    return rejectWithValue(error.response?.data.message || { message: 'An error occurred' });
  }
});

export const finalizeReschedule = createAsyncThunk('rescheduleBooking/finalizeReschedule', async (data, { rejectWithValue }) => {
  try {
    const response = await authAxios.post(`/booking/reschedule/finalize`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.message || { message: 'An error occurred' });
  }
});

const rescheduleBookingSlice = createSlice({
  name: 'rescheduleBooking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRescheduledBookingData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRescheduledBookingData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRescheduledBookingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = {};
      })
      .addCase(fetchRescheduleSeats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRescheduleSeats.fulfilled, (state, action) => {
        state.loading = false;
        state.seats = action.payload.data;
        state.origin = action.payload.origin;
        state.destination = action.payload.destination;
      })
      .addCase(fetchRescheduleSeats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(finalizeReschedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(finalizeReschedule.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(finalizeReschedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rescheduleBookingSlice.reducer;
