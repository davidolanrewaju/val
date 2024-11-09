import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authAxios, { updateAuthToken } from '../../utils/axiosInstance';
import { continueEnquiry } from '../ticket/ticketSlice';

const API = import.meta.env.VITE_URL_API;

const initialState = {
  loading: false,
  userDetails: {},
  isAuthenticated: false,
  token: null,
  error: null,
};

const createAuthThunk = (name, endpoint, useAuth = false) =>
  createAsyncThunk(`authentication${name}`, async (payload, { rejectWithValue }) => {
    try {
      const axiosInstance = useAuth ? authAxios : axios;
      const response = await axiosInstance.post(`${API}${endpoint}`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message || `${name} failed`);
    }
  });

export const login = createAuthThunk('login', '/login');
export const signup = createAuthThunk('signup', '/signUp');
export const logout = createAuthThunk('logout', '/logout', true);
export const forgotPassword = createAuthThunk('forgotPassword', '/forgot-password');

const setTokenWithExpiration = (token, userDetails) => {
  const now = new Date();
  const expirationDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
  const tokenData = {
    token,
    userDetails,
    expiration: expirationDate.getTime(),
  };
  localStorage.setItem('authToken', JSON.stringify(tokenData));
};

export const getValidTokenData = () => {
  const tokenData = JSON.parse(localStorage.getItem('authToken'));
  if (tokenData && new Date().getTime() < tokenData.expiration) {
    return tokenData;
  }
  return null;
};

export const checkAuthStatus = createAsyncThunk(
  'authentication/checkStatus',
  async (_, { rejectWithValue }) => {
    try {
      const tokenData = getValidTokenData();
      if (tokenData) {
        updateAuthToken(tokenData.token);
        return {
          token: tokenData.token,
          data: tokenData.userDetails,
        };
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userDetails = action.payload.data;
        state.token = action.payload.token;
        updateAuthToken(action.payload.token);
        setTokenWithExpiration(action.payload.token, action.payload.data);
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userDetails = action.payload.data;
        state.token = action.payload.token;
        updateAuthToken(action.payload.token);
        setTokenWithExpiration(action.payload.token, action.payload.data);
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, () => {
        updateAuthToken(null);
        localStorage.removeItem('authToken');
        return initialState;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.changePwd = action.payload;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(continueEnquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userDetails = action.payload.data;
        state.token = action.payload.token;
        updateAuthToken(action.payload.token);
        setTokenWithExpiration(action.payload.token, action.payload.data);
        state.error = null;
      })
      .addCase(continueEnquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userDetails = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.userDetails = {};
        state.token = null;
        state.error = action.payload;
      });
  },
});

export const { clearError } = authenticationSlice.actions;
export default authenticationSlice.reducer;