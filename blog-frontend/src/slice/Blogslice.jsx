import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const url = "https://blog-ez8m.onrender.com/api/blog/"
const url = "http://localhost:5000/API/BLOG"


export const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
    try {
        const { data } = await axios.get(url)
        return data.data
    } catch (error) {
        return { errors: true, message: error.message }
    }
})


export const postBlog = createAsyncThunk("blog/postBlog", async (blog) => {
    try {
        const token = localStorage.getItem("token")
        const { data } = await axios.post(url, blog, { headers: { "auth-token": token } })
        return data.data
    } catch (error) {
        return { errors: true, message: error.message }
    }
})


export const updateBlog = createAsyncThunk("blog/updateBlog", async (blog) => {
    try {
        const token = localStorage.getItem("token")
        const { data } = await axios.put(url + `/${blog._id}`, blog, { headers: { "auth-token": token } })
        return data.data
    } catch (error) {
        return { errors: true, message: error.message }
    }
})


export const deleteBlogs = createAsyncThunk("blog/deleteBlogs", async (_id) => {
    try {
        const token = localStorage.getItem("token")
        const { data } = await axios.delete(url + `/${_id}`, { headers: { "auth-token": token } })
        return data.data
    } catch (error) {
        return { errors: true, message: error.message }
    }
})

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        data: [],
        loading: false,
        errorMessage: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state, action) => {
            state.loading = true
        })
            .addCase(getBlogs.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = payload
            })
            .addCase(postBlog.pending, (state, action) => {
                state.loading = true
            })
            .addCase(postBlog.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = state.data.concat(payload)
            })
            .addCase(updateBlog.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateBlog.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = state.data.map(el => el._id == payload._id ? payload : el)
            })
            .addCase(deleteBlogs.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteBlogs.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = state.data.filter(el => el._id != payload._id)
            })
    }
})

export default blogSlice.reducer