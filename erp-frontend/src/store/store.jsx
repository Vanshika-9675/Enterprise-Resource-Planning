import {configureStore} from "@reduxjs/toolkit";
import themeReducer from './themeReducer'
import projectReducer from './slices/projectSlice'
import authReducer from './slices/authSlice'
import departmentReducer from './slices/departmentSlice'

const store = configureStore({

    reducer:{
        theme:themeReducer,
        project: projectReducer,
        auth:authReducer,
        department:departmentReducer,
    }
})


export default store;