import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const pageSlice = createSlice({
    name : 'pages',
    initialState,
    reducers:{
        education: (state)=>{
            state.value = 1
        } ,
        experience: (state) =>{
            state.value = 2
        },
        projects: (state) =>{
            state.value = 3
        },
        resume: (state)=>{
            state.value = 4
        }

    }
})

export const{education , experience , projects , resume} = pageSlice.actions;

export default pageSlice.reducer