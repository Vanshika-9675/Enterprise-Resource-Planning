import {fetchEmployees} from "../actions/Emplo/fetch"
import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});
  

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        error: null,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            });
    }
});
export {fetchEmployees};
export default employeeSlice.reducer;
