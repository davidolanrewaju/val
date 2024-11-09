import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAxios from '../../utils/axiosInstance';

const initialState = {
  loading: false,
  customerProfile: {},
};

export const fetchCustomerProfile = createAsyncThunk('myProfile/fetchCustomerProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await authAxios.get('/customer/history/profile');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message || 'An error occurred while fetching profile data');
  }
});

const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.customerProfile = action.payload.data;
      })
      .addCase(fetchCustomerProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default myProfileSlice.reducer;
