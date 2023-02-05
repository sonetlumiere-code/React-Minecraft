import { useEffect, useState, useContext } from 'react'
import { StateContext } from '../state/StateContext'
import { useKeyboard } from '../hooks/useKeyboard'
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../assets/images/images'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
}

const TextureSelector = () => {
	const { state, dispatch } = useContext(StateContext)
	const [visible, setVisible] = useState(false)

	const setTexture = (texture) => {
		dispatch({ 
			type: 'SET_TEXTURE',
			payload: texture
		})
	}

	const {
		dirt,
		grass,
		glass,
		wood,
		log,
	} = useKeyboard()

	useEffect(() => {
		const textures = {
			dirt,
			grass,
			glass,
			wood,
			log
		}
		const pressedTexture = Object.entries(textures).find(([k, v]) => v)
		if (pressedTexture) {
			setTexture(pressedTexture[0])
		}
	}, [dirt, grass, glass, wood, log])

	useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false)
		}, 2000)
		setVisible(true)
		return () => {
			clearTimeout(visibilityTimeout)
		}
	}, [state.texture])

	return visible && (
		<div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === state.texture ? 'active' : ''}`}
				/>)
			})}
		</div>
	)
}

export default TextureSelector
