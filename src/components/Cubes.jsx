import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCubes } from '../store/slices/cube/cubeSlice'
import Cube from './Cube'

const Cubes = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const storedCubes = JSON.parse(window.localStorage.getItem('cubes'))
		if (storedCubes) {
			dispatch(setCubes(storedCubes))
		}
	}, [])

	const { cubes } = useSelector(state => state.cubes)

	return cubes.map(({ key, pos, texture }) => {
		return (
			<Cube key={key} position={pos} texture={texture} />
		)
	})
}

export default Cubes
