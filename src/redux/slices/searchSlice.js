import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState:{
        prompt: '',
        response: [],
        searchedResults: [],
    },
    reducers:{
        addPrompt : (state, action) =>{
            state.prompt = action.payload;
        },
        addRespone: (state, action) =>{
            state.response = action.payload;
        },
        addSearchResults : (state, action)=>{
            state.searchedResults = action.payload;
        }
    }
})

export const {addPrompt, addRespone, addSearchResults } = searchSlice.actions;

export default searchSlice.reducer
