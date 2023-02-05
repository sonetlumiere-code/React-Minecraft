import { useSelector } from 'react-redux'
import Cube from './Cube'

const Cubes = () => {
	const { cubes } = useSelector(state => state.cubes)

	return cubes.map(({ key, pos, texture }) => {
		return (
			<Cube key={key} position={pos} texture={texture} />
		)
	})
}

export default Cubes
