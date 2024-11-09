import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  loading: false,
  walletPayment: {},
};

export const makeWalletPayment = createAsyncThunk('wallet/makeWalletPayment', async (data) => {
  const response = await axios.post(`${API}/booking-pay`, data.body, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });

  return response.data;
});

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchCustomerBookings actions
      .addCase(makeWalletPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(makeWalletPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.walletPayment = action.payload;
      })
      .addCase(makeWalletPayment.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default walletSlice.reducer;
