import { configureStore } from '@reduxjs/toolkit'
import Filter from './Slices/Filter'
import Size  from './Slices/Size.slice'
import Category from '../redux/Slices/Category'

export const store = configureStore({
  reducer: {
    Filter,
    Size,
    Category,
  },
})