import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAxios from '../../utils/axiosInstance';

const initialState = {
  loading: false,
  customerWallet: {},
  customerWalletBalance: 0,
};

export const fetchCustomerWallet = createAsyncThunk('customerWallet/fetchCustomerWallet', async (_, { rejectWithValue }) => {
  try {
    const response = await authAxios.get('/customer/history/transactions');
    return {
      data: response.data,
      walletBalance: response.data['wallet balance'],
    };
  } catch (error) {
    return rejectWithValue(error.message || 'An error occurred while fetching wallet data');
  }
});

const customerWalletSlice = createSlice({
  name: 'customerWallet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomerWallet.fulfilled, (state, action) => {
        state.loading = false;
        state.customerWallet = action.payload.data;
        state.customerWalletBalance = action.payload.walletBalance;
      })
      .addCase(fetchCustomerWallet.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default customerWalletSlice.reducer;
