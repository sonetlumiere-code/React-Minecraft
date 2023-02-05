import { useContext } from 'react'
import { StateContext } from '../state/StateContext'
import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../assets/images/textures'

const Ground = () => {
	const { dispatch } = useContext(StateContext)

	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
	}))

	const addCube = (x, y, z) => {
		dispatch({ 
			type: 'ADD_CUBE', 
			payload: { x, y, z } 
		})
	}

	groundTexture.repeat.set(100, 100)

	return (
		<mesh
			onClick={(e) => {
				e.stopPropagation()
				const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
				addCube(x, y, z)
			}}
			ref={ref}
		>
			<planeGeometry attach='geometry' args={[100, 100]} />
			<meshStandardMaterial attach='material' map={groundTexture} />
		</mesh>
	)
}

export default Ground
