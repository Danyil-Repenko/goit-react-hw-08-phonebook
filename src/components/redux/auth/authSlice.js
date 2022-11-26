import { createSlice } from "@reduxjs/toolkit";
import { registration, logingIn, logingOut, refreshUser } from "./operations";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const authInitialState =
{
    user: { name: null, email: null },
    token: null,
    error: null,
    isRefreshing: false,
};

const handleRejected = (state, action) => {
    state.isRefreshing = false
    state.error = action.payload;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
                state.isRefreshing = false
            })
            .addCase(registration.rejected, (state, action) => {
                handleRejected(state, action)
                state.error = null
            })
            .addCase(logingIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null
                state.isRefreshing = false
            })
            .addCase(logingIn.rejected, (state, action) => {
                handleRejected(state, action)
                state.error = null
            })
            .addCase(logingOut.fulfilled, (state) => {
                state.user = { name: null, email: null }
                state.token = null;
                state.error = null
                state.isRefreshing = false
            })
            .addCase(logingOut.rejected, (state, action) => {
                handleRejected(state, action)
                state.error = null
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true

            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isRefreshing = false
                state.error = null
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false
                state.error = null
            })
    },
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer)