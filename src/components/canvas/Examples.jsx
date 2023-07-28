'use client'

import { useGLTF, Environment } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial, GradientTexture, GradientType } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { Select } from '@react-three/postprocessing'

// export const Blob = ({ route = '/', ...props }) => {
//   const router = useRouter()
//   const [hovered, hover] = useState(false)
//   useCursor(hovered)
//   return (
//     <mesh
//       onClick={() => router.push(route)}
//       onPointerOver={() => hover(true)}
//       onPointerOut={() => hover(false)}
//       {...props}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
//     </mesh>
//   )
// }

// export const Logo = ({ route = '/blob', ...props }) => {
//   const mesh = useRef(null)
//   const router = useRouter()

//   const [hovered, hover] = useState(false)
//   const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

//   useCursor(hovered)
//   useFrame((state, delta) => {
//     const t = state.clock.getElapsedTime()
//     mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
//     mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
//     mesh.current.rotation.z -= delta / 4
//   })

//   return (
//     <group ref={mesh} {...props}>
//       {/* @ts-ignore */}
//       <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} />
//       {/* @ts-ignore */}
//       <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, 1]} />
//       {/* @ts-ignore */}
//       <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, -1]} />
//       <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
//         <sphereGeometry args={[0.55, 64, 64]} />
//         <meshPhysicalMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
//       </mesh>
//     </group>
//   )
// }

// export function Duck(props) {
//   const { scene } = useGLTF('/duck.glb')

//   useFrame((state, delta) => (scene.rotation.y += delta))

//   return <primitive object={scene} {...props} />
// }
// export function Dog(props) {
//   const { scene } = useGLTF('/dog.glb')
//   // const { scene } = useLoader(OBJLoader, '/minifig_threejs.obj')

//   return <primitive object={scene} {...props} />
//   // return <primitive object={scene} />
// }
export function Brick(props) {
  const ref = useRef()
  const { scene } = useGLTF('/minifig_threejs.glb')
  // const { scene } = useLoader(OBJLoader, '/minifig_threejs.obj')

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
  //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 100
  // })

  // return (
  //   <group ref={ref}>
  //     <mesh {...props}>
  //       <primitive object={scene} {...props} />
  //       {/* <meshPhysicalMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} /> */}
  //     </mesh>
  //   </group>
  // )

  return <primitive object={scene} {...props} />
  // return <primitive object={scene} />
}

export function Head(props) {
  const { scene } = useGLTF('/head.glb')
  const ref = useRef()
  const [hovered, hover] = useState(false)

  useCursor(hovered)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? 1.1 : 1}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <primitive object={scene} {...props} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
    </mesh>
  )
}

export function Torso(props) {
  const { scene } = useGLTF('/torso.glb')
  const ref = useRef()
  const [hovered, hover] = useState(false)

  useCursor(hovered)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? 1.1 : 1}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <primitive object={scene} {...props} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
    </mesh>
  )
  // return <primitive object={scene} {...props} />
}

export function Legs(props) {
  const { scene } = useGLTF('/legs.glb')
  const ref = useRef()
  const [hovered, hover] = useState(false)

  useCursor(hovered)

  return (
    <mesh
      ref={ref}
      {...props}
      scale={hovered ? 1.1 : 1}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      // onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <primitive object={scene} {...props} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
    </mesh>
  )
  // return <primitive object={scene} {...props} />
}

export function Background(props) {
  const viewport = useThree(state => state.viewport)
  // < Environment files = "./img/venice_sunset_1k.hdr" background />
  return <Environment preset="night" background blur={0.5} />
}
