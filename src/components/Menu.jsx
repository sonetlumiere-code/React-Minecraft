import { resetWorld, saveWorld } from '../store/slices/cube/cubeSlice'
import { useDispatch } from 'react-redux'

const Menu = () => {
	const dispatch = useDispatch()

	return (
		<div className="menu absolute">
			<button
				onClick={() => dispatch(saveWorld())}
			>Save</button>
			<button
				onClick={() => dispatch(resetWorld())}
			>Reset</button>
		</div>
	)
}

export default Menu
