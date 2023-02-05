import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const saveWorld = createAsyncThunk(
  'cubes/saveWorld',
  async (cubes, { getState, dispatch }) => {
    setLocalStorage('cubes', getState().cubes.cubes)
  }
)

export const cubeSlice = createSlice({
  name: 'cubes',
  initialState: {
    cubes: [],
    texture: 'dirt',
  },
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
    setCubes: (state, action) => {
      state.cubes = action.payload
    },
    setTexture: (state, action) => {
      state.texture = action.payload
    },
    resetWorld: (state) => {
      state.cubes = [],
      state.texture = 'dirt'
    }
  },
  extraReducers: builder => {
    builder.addCase(saveWorld.fulfilled, (state) => {
      // This is called when the saveWorld thunk is resolved
    })
  }
})

export const { addCube, removeCube, setCubes, setTexture, resetWorld } = cubeSlice.actions
