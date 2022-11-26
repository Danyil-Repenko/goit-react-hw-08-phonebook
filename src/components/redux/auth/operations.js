import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk(
    'auth/register', async (information, thunkAPI) => {
        try {
            const response = await axios.post(`${baseURL}/users/signup`, information)
            setAuthHeader(response.data.token)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logingIn = createAsyncThunk(
    'auth/logingIn', async (info, thunkAPI) => {
        try {
            const response = await axios.post(`${baseURL}/users/login`, info)
            setAuthHeader(response.data.token)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logingOut = createAsyncThunk(
    'auth/logingOut', async (_, thunkAPI) => {
        try {
            await axios.post(`${baseURL}/users/logout`)
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refreshing', async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        setAuthHeader(persistedToken);
        try {
            const response = await axios.get(`${baseURL}/users/current`)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
