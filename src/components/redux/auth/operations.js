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
            console.log(response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logingIn = createAsyncThunk(
    'auth/logingIn', async (information, thunkAPI) => {
        try {
            const response = await axios.post(`${baseURL}/users/login`, information)
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