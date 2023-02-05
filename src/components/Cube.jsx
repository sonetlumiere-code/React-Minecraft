import { useState } from "react"
import { useBox } from "@react-three/cannon"
// import { useStore } from "../hooks/useStore"
import * as textures from "../assets/images/textures"
import { useDispatch, useSelector } from 'react-redux'
import { addCube, removeCube } from '../store/slices/cube/cubeSlice'

const Cube = ({ position, texture }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))
	// const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])
	const activeTexture = textures[texture + 'Texture']

	//const { cubes } = useSelector(state => state.cube)
	const dispatch = useDispatch()

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
					dispatch(removeCube({ x, y, z }))
					return
				}
				else if (clickedFace === 0) {
					dispatch(addCube( { x: x + 1, y, z }))
					return
				}
				else if (clickedFace === 1) {
					dispatch(addCube({ x: x - 1, y, z }))
					return
				}
				else if (clickedFace === 2) {
					dispatch(addCube({ x, y: y + 1, z }))
					return
				}
				else if (clickedFace === 3) {
					dispatch(addCube({ x, y: y - 1, z }))
					return
				}
				else if (clickedFace === 4) {
					dispatch(addCube({ x, y, z: z + 1 }))
					return
				}
				else if (clickedFace === 5) {
					dispatch(addCube({ x, y, z: z - 1 }))
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
