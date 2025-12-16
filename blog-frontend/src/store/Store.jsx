import { configureStore } from "@reduxjs/toolkit";
import blogSlice from '../slice/Blogslice'
import userSlices from '../slice/userSlices';
import categorySlice from '../slice/categorySlice';

const store = configureStore({
    reducer: {
        user: userSlices,
        blog: blogSlice,
        category: categorySlice
    },
    devTools: true
})

export default store