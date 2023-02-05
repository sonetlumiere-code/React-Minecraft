import { configureStore } from '@reduxjs/toolkit'
import { cubeSlice } from './slices/cube/cubeSlice'

export const store = configureStore({
  reducer: {
    cubes: cubeSlice.reducer
  }
})
