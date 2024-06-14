import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = 'http://localhost:8081';
const token = localStorage.getItem('jwtToken');

export const deleteProject = createAsyncThunk('project/deleteProject', async (projectId) => {
    try {
        const response = await fetch(`${BASE_URL}/project/delete/${projectId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(`Project with ID ${projectId} deleted successfully`);
        return projectId;
    } catch (error) {
        console.error('Error deleting project:', error);
        throw error;
    }
});