// import { useStore } from '../hooks/useStore'
import { useSelector } from 'react-redux'
import Cube from './Cube'

const Cubes = () => {
	// const [cubes] = useStore((state) => [
	// 	state.cubes
	// ])

	const { cubes } = useSelector(state => state.cubes)
	// const dispatch = useDispatch()

	return cubes.map(({ key, pos, texture }) => {
		return (
			<Cube key={key} position={pos} texture={texture} />
		)
	})
}

export default Cubes
