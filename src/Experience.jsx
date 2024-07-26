import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import { BlockStart, Level } from './Level.js'
import { Physics } from '@react-three/rapier'

export default function Experience() {
    return <>
        <OrbitControls makeDefault />
        <Physics debug>
            <Lights />
            <Level/>
            {/* <BlockStart/> */}
        </Physics>
    </>
}