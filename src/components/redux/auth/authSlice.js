import { createSlice } from "@reduxjs/toolkit";
import { registration, logingIn, logingOut, refreshUser } from "./operations";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const authInitialState =
{
    user: { name: null, email: null },
    token: null,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isRefreshing = false
            })
            .addCase(registration.rejected, (state) => {
                state.isRefreshing = false
            })
            .addCase(logingIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isRefreshing = false
            })
            .addCase(logingIn.rejected, (state) => {
                state.isRefreshing = false
            })
            .addCase(logingOut.fulfilled, (state) => {
                state.user = { name: null, email: null }
                state.token = null;
                state.isRefreshing = false
            })
            .addCase(logingOut.rejected, (state) => {
                state.isRefreshing = false
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true

            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isRefreshing = false
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false
            })
    },
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer)