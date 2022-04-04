import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pages';


export default configureStore({
    reducer:{
        pages : pageReducer
    },
})