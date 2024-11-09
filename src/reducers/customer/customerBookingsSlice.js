import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAxios from '../../utils/axiosInstance';

const initialState = {
  loading: false,
  customerBookings: {},
  totalBooking: 0,
  error: null,
};

export const fetchCustomerBookings = createAsyncThunk(
  'customerBookings/fetchCustomerBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAxios.get('/customer/history/bookings');
      return {
        data: response.data,
        totalBooking: response.data["total bookings"],
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const customerBookingsSlice = createSlice({
  name: 'customerBookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomerBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.customerBookings = action.payload.data;
        state.totalBooking = action.payload.totalBooking
        state.error = null;
      })
      .addCase(fetchCustomerBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      });
  },
});

export default customerBookingsSlice.reducer;
