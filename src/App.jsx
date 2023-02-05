import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Ground from './components/Ground'
import Player from './components/Player'
import FPV from './components/FPV'
import Cubes from './components/Cubes'
import TextureSelector from './components/TextureSelector'
import Menu from './components/Menu'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  )
}

export default App
