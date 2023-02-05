import { useContext } from "react"
import { StateContext } from '../state/StateContext'

const Menu = () => {
	const { dispatch } = useContext(StateContext)

	const saveWorld = () => {
		dispatch({ type: 'SAVE_WORLD' })
	}

	const resetWorld = () => {
		dispatch({ type: 'RESET_WORLD' })
	}

	return (
		<div className="menu absolute">
			<button
				onClick={() => saveWorld()}
			>Save</button>
			<button
				onClick={() => resetWorld()}
			>Reset</button>
		</div>
	)
}

export default Menu
