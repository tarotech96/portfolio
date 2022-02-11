import React, { useRef, VFC } from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

type Props = {
    position: [number, number, number]
    isHelper?: boolean
}

export const TDirectionalLight: VFC<Props> = props => {
    const { position, isHelper = false } = props

    const lightRef = useRef()
    useHelper(lightRef, DirectionalLightHelper)

    return (
        <>
            {isHelper ? (
                <directionalLight
                    ref={lightRef}
                    position={position}
                    intensity={1} 
                    shadow-mapSize-width={2048} 
                    shadow-mapSize-height={2048}
                    castShadow
                />
            ) : (
                <directionalLight
                    position={position}
                    intensity={1} 
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    castShadow
                />
            )}
        </>
    )
}