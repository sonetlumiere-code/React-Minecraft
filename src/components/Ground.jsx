import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../assets/images/textures"
import { useDispatch } from 'react-redux'
import { addCube } from '../store/slices/cube/cubeSlice'

const Ground = () => {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
	}))
	const dispatch = useDispatch()
	groundTexture.repeat.set(100, 100)

	return (
		<mesh
			onClick={(e) => {
				e.stopPropagation()
				const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
				dispatch(addCube({ x, y, z }))
			}}
			ref={ref}
		>
			<planeGeometry attach='geometry' args={[100, 100]} />
			<meshStandardMaterial attach='material' map={groundTexture} />
		</mesh>
	)
}

export default Ground
