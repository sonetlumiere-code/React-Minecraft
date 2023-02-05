import { useEffect, useState } from 'react'
import { useKeyboard } from "../hooks/useKeyboard"
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../assets/images/images'
import { setTexture } from '../store/slices/cube/cubeSlice'
import { useDispatch, useSelector } from 'react-redux'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
}

const TextureSelector = () => {
	const [visible, setVisible] = useState(false)
	const { texture } = useSelector(state => state.cubes)
	const dispatch = useDispatch()

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
			dispatch(setTexture(pressedTexture[0]))
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
	}, [texture])

	return visible && (
		<div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === texture ? 'active' : ''}`}
				/>)
			})}
		</div>
	)
}

export default TextureSelector
