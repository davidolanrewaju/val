import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  loading: false,
  customerInfoData: {},
};

export const postCustomerInfoData = createAsyncThunk('customerInfo/cutomerInfoData', async (customerData) => {
  const response = await axios.post(`${API}/bookings/process-details`, customerData);

  return response.data;
});

const customerInfoSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCustomerInfoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCustomerInfoData.fulfilled, (state, action) => {
        // Update state with received data
        state.loading = false;
        state.customerInfoData = action.payload.data;
      })
      .addCase(postCustomerInfoData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default customerInfoSlice.reducer;
