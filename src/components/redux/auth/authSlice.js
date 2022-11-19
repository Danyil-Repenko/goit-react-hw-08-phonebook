import { createSlice } from "@reduxjs/toolkit";
import { registration, logingIn, logingOut } from "./operations";

const authInitialState =
{
    user: { name: null, email: null },
    token: null,
    isRefreshing: false,
    isLoading: false,
};

const handlePending = state => {
    state.isLoading = true
}

const handleRejected = (state) => {
    state.isRefreshing = false
    state.isLoading = false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                handlePending(state)
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false
                state.isRefreshing = false
            })
            .addCase(registration.rejected, (state) => {
                handleRejected(state);
            })
            .addCase(logingIn.pending, (state) => {
                handlePending(state);
            })
            .addCase(logingIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false
                state.isRefreshing = false
            })
            .addCase(logingIn.rejected, (state) => {
                handleRejected(state);
            })
            .addCase(logingOut.pending, (state) => {
                handlePending(state);
            })
            .addCase(logingOut.fulfilled, (state) => {
                state.user = { name: null, email: null }
                state.token = null;
                state.isRefreshing = false
                state.isLoading = false
            })
            .addCase(logingOut.rejected, (state) => {
                handleRejected(state);
            })
    },
})

export const authReducer = authSlice.reducer