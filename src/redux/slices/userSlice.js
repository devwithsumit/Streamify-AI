import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        },
        updateUserProfile: (state, action) => {
            // console.log(state);
            // console.log(action.payload);
            if (state) {
                return { ...state, ...action.payload };
            }
        }
    }
})

export const { addUser, removeUser, updateUserProfile } = userSlice.actions;

export default userSlice.reducer;