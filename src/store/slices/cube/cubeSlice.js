import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))

const initialState = {
  // cubes: getLocalStorage('cubes') || [],
  cubes: [],
  texture: 'dirt'
}

export const cubeSlice = createSlice({
  name: 'cubes',
  initialState,
  reducers: {
    addCube: (state, action) => {
      console.log(action.payload);
      
      const { x, y, z } = action.payload
      state.cubes.push({
        key: nanoid(),
        pos: [x, y, z],
        texture: state.texture
      })
      console.log(state.cubes);
      
    },
    removeCube: (state, action) => {
      const { x, y, z } = action.payload
      state.cubes = state.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos
        return X !== x || Y !== y || Z !== z
      })
    }
  }
})

export const { addCube, removeCube } = cubeSlice.actions
