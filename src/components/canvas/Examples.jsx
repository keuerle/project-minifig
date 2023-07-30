'use client'

import { useGLTF, Environment, useTexture, Decal } from '@react-three/drei'
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
// export function Brick(props) {
//   const ref = useRef()
//   const { scene } = useGLTF('/minifig_threejs.glb')
//   // const { scene } = useLoader(OBJLoader, '/minifig_threejs.obj')

//   // useFrame((state) => {
//   //   const t = state.clock.getElapsedTime()
//   //   ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
//   //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 100
//   // })

//   // return (
//   //   <group ref={ref}>
//   //     <mesh {...props}>
//   //       <primitive object={scene} {...props} />
//   //       {/* <meshPhysicalMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} /> */}
//   //     </mesh>
//   //   </group>
//   // )

//   return <primitive object={scene} {...props} />
//   // return <primitive object={scene} />
// }

export function Head(props) {
  const { nodes, materials } = useGLTF('/head-transformed.glb')
  const ref = useRef()
  const [hovered, hover] = useState(false)
  // const { actions } = useAnimations(animations, group)

  useCursor(hovered)

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          scale={hovered ? 1.1 : 1}
          onPointerOver={(event) => (event.stopPropagation(), hover(true))}
          onPointerOut={(event) => hover(false)}
          geometry={nodes.Head.geometry}
          material={materials['3626v2']}
          position={[0, 28.8, 0]}
        >
          <meshStandardMaterial color="yellow" />
          <Sticker url="/head_1.png" position={[0, 1.4, 5]} rotation={[0, 0, 0]} scale={15.0} />
        </mesh>
      </group>
    </group>
  )
}

export function Torso(props) {
  const { nodes, materials } = useGLTF('/torso-transformed.glb')
  const ref = useRef()
  const [hovered, hover] = useState(false)
  // const { actions } = useAnimations(animations, group)

  useCursor(hovered)

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Torso"
          position={[0, 16, 0]}
          scale={hovered ? 1.1 : 1}
          onPointerOver={(event) => (event.stopPropagation(), hover(true))}
          onPointerOut={(event) => hover(false)}>
          <mesh name="3814" geometry={nodes['3814'].geometry} material={materials['3814']} />
          <mesh name="3814_1" geometry={nodes['3814_1'].geometry} material={materials['3814']} />
          <mesh name="3814_2" geometry={nodes['3814_2'].geometry} material={materials['3814']} />
          <mesh name="3814_3" geometry={nodes['3814_3'].geometry} material={materials['3814']} />
        </group>
      </group>
    </group>
  )
}

export function Legs(props) {
  const { nodes, materials } = useGLTF('/legs-transformed.glb')
  const ref = useRef()
  const [hovered, hover] = useState(false)
  // const { actions } = useAnimations(animations, group)

  useCursor(hovered)

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Legs"
          position={[0, 16, 0]}
          scale={hovered ? 1.1 : 1}
          onPointerOver={(event) => (event.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}>
          <mesh name="3815" geometry={nodes['3815'].geometry} material={materials['3815']} />
          <mesh name="3815_1" geometry={nodes['3815_1'].geometry} material={materials['3815']} />
          <mesh name="3815_2" geometry={nodes['3815_2'].geometry} material={materials['3815']} />
        </group>
      </group>
    </group>
  )
}

export function Background(props) {
  const viewport = useThree(state => state.viewport)
  // < Environment files = "./img/venice_sunset_1k.hdr" background />
  return <Environment preset="forest" background blur={0.5} />
}

function Sticker({ url, ...props }) {
  const emoji = useTexture(url)
  return (
    <Decal debug {...props}>
      <meshPhysicalMaterial
        transparent
        polygonOffset
        polygonOffsetFactor={-10}
        map={emoji}
        map-flipY={true}
        map-anisotropy={16}
        iridescence={1}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
        roughness={1}
        clearcoat={0.5}
        metalness={0.75}
        toneMapped={false}
      />
    </Decal>
  )
}

useGLTF.preload('/head-transformed.glb', '/torso-transformed.glb', 'legs-transformed.glb')
  ;['/head_1.png'].forEach(useTexture.preload)
