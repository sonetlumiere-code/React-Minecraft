import { useContext } from 'react'
import { StateContext } from '../state/StateContext'
import Cube from './Cube'

const Cubes = () => {
	const { state } = useContext(StateContext)

	return state.cubes.map(({ key, pos, texture }) => {
		return (
			<Cube key={key} position={pos} texture={texture} />
		)
	})
}

export default Cubes
