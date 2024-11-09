// ticketSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAxios from '../../utils/axiosInstance';

const initialState = {
  ticketMessage: {},
  loading: false,
  error: null,
  tickets: [],
  singleTicket: {},
};

export const continueEnquiry = createAsyncThunk('ticket/continueEnquiry', async (enquiryCredentials, { rejectWithValue }) => {
  try {
    const response = await authAxios.post('/contact-login', enquiryCredentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message || 'An error occurred while continuing the enquiry');
  }
});

export const createTicket = createAsyncThunk('ticket/createTicket', async (ticketMessage, { rejectWithValue, getState, dispatch }) => {
  try {
    const state = getState();
    const token = state.authentication.token;

    const response = await authAxios.post('/ticket', ticketMessage, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await dispatch(fetchTickets());

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message || 'An error occurred while creating the ticket');
  }
});

export const fetchTickets = createAsyncThunk('ticket/fetchTickets', async () => {
  const response = await authAxios.get('/ticket');
  return response.data;
});

export const fetchSingleTicket = createAsyncThunk('ticket/fetchSingleTicket', async (id) => {
  const response = await authAxios.get(`/ticket/${id}`);
  return response.data;
});

export const sendReply = createAsyncThunk('ticket/sendReply', async (reply) => {
  const response = await authAxios.post('/send-reply', reply);
  return response.data;
});

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.ticketMessage = action.payload.data;
        state.error = null;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create ticket';
      })

      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload.data;
        state.error = null;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch tickets';
      })

      .addCase(fetchSingleTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.singleTicket = action.payload.data;
        state.error = null;
      })
      .addCase(fetchSingleTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch tickets';
      })

      .addCase(sendReply.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendReply.fulfilled, (state, action) => {
        state.loading = false;
        state.ticketMessage = action.payload.data;
        state.error = null;
      })
      .addCase(sendReply.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to send reply';
      });
  },
});

export const { clearMessages } = ticketSlice.actions;

export default ticketSlice.reducer;
