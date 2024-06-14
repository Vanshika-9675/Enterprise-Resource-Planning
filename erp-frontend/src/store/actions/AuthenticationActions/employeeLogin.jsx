import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = 'http://localhost:8081';
                                                                                             
export const emsLogin = createAsyncThunk(                     
  'auth/login',                                                                                    
    async (credentials, thunkAPI) => {
      try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
  
        const data = await response.json();
        localStorage.setItem('jwtToken',data.jwtToken);
       
        return data.roles;
        
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );