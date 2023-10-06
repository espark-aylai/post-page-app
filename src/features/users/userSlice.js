import { createSlice } from "@reduxjs/toolkit"


const initialState = [
{id: '0', name : 'Ayla Imran'},
{id: '1', name : 'Neil young'},
{id: '2', name : 'Dave Gray'}
]

const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {

    }
})

export const selectAllUsers = (state) => state.users;
// export {} userSlice.reducers;

export default userSlice.reducer;
// export  userSlice.actions;