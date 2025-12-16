import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://blogsphere-backend-8k2r.onrender.com/api/category/"

export const getCategory = createAsyncThunk("category/getCategory", async () => {
    try {
        const { data } = await axios.get(url)
        return data.data
    } catch (error) {
        return { error: true, message: error.message }
    }
})

const categorySlice = createSlice({
    name: "category",
    initialState: {
        data: [],
        loading :false
    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, { payload }) => {
            state.loading = false
            state.data = payload
        })
        .addCase(getCategory.pending,(state,action)=>{
            state.loading=true
        })
    }
})

export default categorySlice.reducer