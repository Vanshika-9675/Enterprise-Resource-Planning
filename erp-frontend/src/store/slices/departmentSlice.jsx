import {fetchDepartment } from "../actions/DepartmentActions/fetch"
import { fetchSingleDepartment } from "../actions/DepartmentActions/fetchById";
import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});
  

const DepartmentSlice = createSlice({
    name: 'departments',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        error: null,    
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartment.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchDepartment.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(fetchDepartment.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchSingleDepartment.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchSingleDepartment.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(fetchSingleDepartment.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            });
    }
});
export {fetchDepartment};
export default DepartmentSlice.reducer;
