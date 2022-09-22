import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import tokenReducer from './tokenSlice'
import socialReducer from './socialSlice'
import contactReducer from './contactSlice'
import eventReducer from './eventSlice'

export default configureStore({
   reducer: {
      role: userReducer,
      token: tokenReducer,
      event: eventReducer,
      contact: contactReducer,
      social: socialReducer
   },
})