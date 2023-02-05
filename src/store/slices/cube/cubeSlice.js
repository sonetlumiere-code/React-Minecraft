import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

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
      const { x, y, z } = action.payload
      state.cubes.push({
        key: nanoid(),
        pos: [x, y, z],
        texture: state.texture
      })     
    },
    removeCube: (state, action) => {
      const { x, y, z } = action.payload
      state.cubes = state.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos
        return X !== x || Y !== y || Z !== z
      })
    },
    setTexture: (state, action) => {
      state.texture = action.payload
    },
    // saveWorld: () => {
    //   setLocalStorage('cubes', prev.cubes)
    // },
    resetWorld: (state) => {
      state.cubes = [],
      state.texture = 'dirt'
    }
  }
})

export const { addCube, removeCube, setTexture, resetWorld } = cubeSlice.actions
