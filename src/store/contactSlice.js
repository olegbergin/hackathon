import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: []
    },
    reducers: {
        updateContact(state, action) {
            state.contact = action.payload
        }
    }
})

export const { updateContact } = contactSlice.actions;
export default contactSlice.reducer;