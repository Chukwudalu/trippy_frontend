import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    userDetail: {}
}

const userSlice = createSlice({
    name: "user_detail",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        getUserDetail: (state, action) => {
            state.value.userDetail = action.payload
        }
    }
});

export const { getUserDetail } = userSlice.actions

export default userSlice.reducer