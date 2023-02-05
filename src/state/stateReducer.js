import { nanoid } from 'nanoid'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const initialState = {
	texture: 'dirt',
	cubes: getLocalStorage('cubes') || [],
}

export const stateReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CUBE':  
			return {
				...state,
				cubes: [
					...state.cubes,
					{
						key: nanoid(),
						pos: [action.payload.x, action.payload.y, action.payload.z],
						texture: state.texture
					}
				]
			}
		case 'REMOVE_CUBE':
			return {
				...state,
				cubes: state.cubes.filter(cube => {
					const [X, Y, Z] = cube.pos
					return X !== action.payload.x || Y !== action.payload.y || Z !== action.payload.z
				})
			}
		case 'SET_TEXTURE':
			return {
				...state,
				texture: action.payload
			}
		case 'SAVE_WORLD':
			setLocalStorage('cubes', state.cubes)
			return state
		case 'RESET_WORLD':
			return {
				...state,
				cubes: []
			}
		default:
			return state
	}
}
