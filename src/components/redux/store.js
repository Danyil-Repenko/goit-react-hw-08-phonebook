import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { contactReducer } from "./contacts/contactSlice";
import { filterReducer } from "./filter/filterSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactReducer,
        filter: filterReducer
    }
})

