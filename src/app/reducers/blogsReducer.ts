import Blog from "../../interfaces/Blog";
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';


const initialState: Blog[] = [];


export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,

    reducers: {
        addBlog: (state, { payload }) => {
            payload.id = uuidv4();
            state.push(payload);
        },
    },
});

export const { addBlog } = blogsSlice.actions;

export const selectBlogs = (state: RootState) => state.blogs;

export default blogsSlice.reducer;
