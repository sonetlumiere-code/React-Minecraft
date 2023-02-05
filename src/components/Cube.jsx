import { useContext, useState } from 'react'
import { StateContext } from '../state/StateContext'
import { useBox } from '@react-three/cannon'
import * as textures from '../assets/images/textures'

const Cube = ({ position, texture }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))
	const { dispatch } = useContext(StateContext)
	const activeTexture = textures[texture + 'Texture']

	const addCube = (x, y, z) => {
		dispatch({ 
			type: 'ADD_CUBE', 
			payload: { x, y, z } 
		})
	}

	const removeCube = (x, y, z) => {
		dispatch({ 
			type: 'REMOVE_CUBE', 
			payload: { x, y, z }
		})
	}

	return (
		<mesh
			onPointerMove={(e) => {
				e.stopPropagation()
				setIsHovered(true)
			}}
			onPointerOut={(e) => {
				e.stopPropagation()
				setIsHovered(false)
			}}
			onClick={(e) => {
				e.stopPropagation()
				const clickedFace = Math.floor(e.faceIndex / 2)
				const { x, y, z } = ref.current.position
				if (e.altKey) {
					removeCube(x, y, z)
					return
				}
				else if (clickedFace === 0) {
					addCube(x + 1, y, z)
					return
				}
				else if (clickedFace === 1) {
					addCube(x - 1, y, z)
					return
				}
				else if (clickedFace === 2) {
					addCube(x, y + 1, z)
					return
				}
				else if (clickedFace === 3) {
					addCube(x, y - 1, z)
					return
				}
				else if (clickedFace === 4) {
					addCube(x, y, z + 1)
					return
				}
				else if (clickedFace === 5) {
					addCube(x, y, z - 1)
					return
				}
			}}
			ref={ref}
		>
			<boxGeometry attach="geometry" />
			<meshStandardMaterial
				color={isHovered ? 'grey' : 'white'}
				map={activeTexture}
				transparent={true}
				opacity={texture === 'glass' ? 0.6 : 1}
				attach="material" />
		</mesh>
	)
}

export default Cube
