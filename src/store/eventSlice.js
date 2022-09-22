import { createSlice } from '@reduxjs/toolkit'

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        event: []
    },
    reducers: {
        updateEvent(state, action) {
            state.event = action.payload
        }
    }
})

export const { updateEvent } = eventSlice.actions;
export default eventSlice.reducer;