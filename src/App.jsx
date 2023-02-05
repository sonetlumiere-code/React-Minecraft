import { useReducer } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Ground from './components/Ground'
import Player from './components/Player'
import FPV from './components/FPV'
import Cubes from './components/Cubes'
import { StateContext } from './state/StateContext'
import { initialState, stateReducer } from './state/stateReducer'
import TextureSelector from './components/TextureSelector'
import Menu from './components/Menu'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return (
    <>
      <StateContext.Provider value={{
        state,
        dispatch
      }}>
        <Canvas>
          <Sky sunPosition={[100, 100, 200]}/>
          <ambientLight intensity={0.5} />
          <FPV />
          <Physics>
            <Player />
            <Cubes />
            <Ground />
          </Physics>
        </Canvas>
        <div className="absolute centered cursor">+</div>
        <TextureSelector />
        <Menu />
      </StateContext.Provider>
    </>
  )
}

export default App
