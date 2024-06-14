import { createSlice } from '@reduxjs/toolkit';
import { emsLogin } from '../actions/AuthenticationActions/employeeLogin';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: [],
        status: STATUSES.PENDING,
        error: null,
        isLoggedIn: Boolean(localStorage.getItem('jwtToken'))
    },
    reducers: {
        logout: (state) => {
            console.log("Logout action dispatched");
            state.isLoggedIn = false;
            localStorage.removeItem('jwtToken');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(emsLogin.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(emsLogin.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(emsLogin.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            });
    }
});

export const { logout } = authSlice.actions;
export { emsLogin };
export default authSlice.reducer;
