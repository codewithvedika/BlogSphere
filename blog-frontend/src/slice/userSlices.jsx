import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://blog-ez8m.onrender.com/api/user/"

export const getUser = createAsyncThunk("user/getUser", async () => {
    try {
        const { data } = await axios.get(url)
        return data.data
    } catch (error) {
        return { errors: true, message: error.message }
    }
})



export const postUser = createAsyncThunk("user/postUser", async (user) => {
    try {
        const { data } = await axios.post(url, user)
        return data.data
    } catch (error) {
        return { errors: true, message: error }
    }
})


export const updateUser = createAsyncThunk("user/updateUser", async (user) => {
    try {
        const { data } = await axios.put(url + user._id, user)
        return data.data
    } catch (error) {
        return { errors: true, message: error.message }
    }
})


export const deleteUser = createAsyncThunk("user/deleteUser", async (_id) => {
    try {
        const { data } = await axios.delete(url + _id)
        return data.data
    } catch (error) {
        return { errors: true, message: error.message }
    }
})

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
    try {
        const { data } = await axios.post(url + "login", user)
        return data.data
    } catch (error) {
        return { errors: true, message: error }
    }
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        loading: false,
        errorMessage: "",
        User: null
    },
    reducers:{
        logout:(state,action)=>{
            state.User = null
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true
        })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = payload
            })
            .addCase(postUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(postUser.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload.errors) {
                    console.log(payload);
                    state.errorMessage = payload.message.response.data.message
                } else {
                    state.data = state.data.concat(payload)
                }
            })
            .addCase(updateUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = state.data.map(el => el._id === payload._id ? payload : el)
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = state.data.filter(el => el._id != payload._id)
            })
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload.errors) {
                    state.errorMessage = payload.message.response.data.message
                } else {
                    state.User = payload
                    localStorage.setItem("token",payload.token)
                    localStorage.setItem("user",JSON.stringify(payload.user))
                }
            })
            .addCase(postUser.rejected, (state, { payload }) => {
                state.loading = false
                state.errorMessage = payload.message.response.data.message
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false
                state.errorMessage = payload.message.response.data.message
            })
    }
})

export default userSlice.reducer
export const {logout} = userSlice.actions