import { configureStore } from "@reduxjs/toolkit/dist";
import counterReducer from "./counterSlice";

export const store = configureStore({
    
    reducer: {
        counter: counterReducer
    } 
})