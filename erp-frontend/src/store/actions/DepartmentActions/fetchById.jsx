import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = 'http://localhost:8081';
const token = localStorage.getItem('jwtToken');

export const fetchSingleDepartment = createAsyncThunk('department/fetchDepartment', async (departmentId) => {
    try {
        const response = await fetch(`${BASE_URL}/department/find/${departmentId}`,{

            method:'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },    
        });

        if (!response.ok) {

            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        throw error;
    }
});