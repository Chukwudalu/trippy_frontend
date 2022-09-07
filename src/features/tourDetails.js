import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    tourDetail: {}
}

const tourSlice = createSlice({
    name: "tour_detail",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        getTourDetail: (state, action) => {
            state.value.tourDetail = action.payload
        }
    }
});

export const { getTourDetail } = tourSlice.actions

export default tourSlice.reducer