import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = 'http://localhost:8081';
const token = localStorage.getItem('jwtToken');

export const updateProject = createAsyncThunk(
    'project/updateProject',
    async ({ projectId, projectData }) => {
      try {
          const response = await fetch(`${BASE_URL}/project/update/${projectId}`, {
              method: 'PUT',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(projectData)
          });
  
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          return data;
      } catch (error){
          throw error;
      }
    }
  );
  