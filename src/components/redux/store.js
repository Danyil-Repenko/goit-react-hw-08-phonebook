import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { authReducer } from "./auth/authSlice";
import { contactReducer } from "./contacts/contactSlice";
import { filterReducer } from "./filter/filterSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactReducer,
        filter: filterReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
    },
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)
