import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = 'http://localhost:8081';

const token = localStorage.getItem('jwtToken');

export const createProject = createAsyncThunk('project/createProject', async (projectData) => {
    try {
        console.log(projectData);
         const response = await fetch(`${BASE_URL}/project/add`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        });

        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Project created:', data);
        return data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
});
