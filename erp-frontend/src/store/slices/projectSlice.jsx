import {createSlice } from '@reduxjs/toolkit';
import {fetchProjects} from "../actions/projectActions/fetch"
import {deleteProject} from "../actions/projectActions/delete"
import {updateProject} from "../actions/projectActions/update"
import {createProject} from "../actions/projectActions/create"

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});
  

const ProjectSlice = createSlice({
    name: 'projects',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        error: null,
    },
    reducers: {
        removeProject: (state,action) => {
            console.log(action.payload);
            state.data = state.data.filter(project => project.id !== action.payload);
        }   
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            })
            .addCase(createProject.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(createProject.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            })
            .addCase(deleteProject.pending, (state,action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(deleteProject.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            })
            .addCase(updateProject.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(updateProject.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                state.error = null;
            })
            .addCase(updateProject.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUSES.ERROR;
            });
    }
});
export const {removeProject} = ProjectSlice.actions;
export {fetchProjects,createProject,deleteProject,updateProject}
export default ProjectSlice.reducer;
