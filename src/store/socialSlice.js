import { createSlice } from '@reduxjs/toolkit'

const socialSlice = createSlice({
    name: 'social',
    initialState: {
        social: []
    },
    reducers: {
        updateSocial(state, action) {
            state.social = action.payload
        }
    }
})

export const { updateSocial } = socialSlice.actions;
export default socialSlice.reducer;