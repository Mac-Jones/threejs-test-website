import { useState, useEffect } from 'react';

import {
	useGLTF,
	Environment,
	Float,
	PresentationControls,
	ContactShadows,
	Html,
	Text,
} from '@react-three/drei';

export default function Experience() {
	// const [isMobile, setIsMobile] = useState(false);

	const computer = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
	);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setIsMobile(window.innerWidth <= 500);
	// 	};

	// 	handleResize();
	// 	window.addEventListener('resize', handleResize);
	// 	return () => window.removeEventListener('resize', handleResize);
	// }, []);

	return (
		<>
			<Environment preset='city' />
			<color args={['#241a1a']} attach='background' />
			<PresentationControls
				global
				rotation={[0.13, 0.1, 0]}
				polar={[-0.4, 0.2]}
				azimuth={[-1, 0.75]}
				config={{ mass: 2, tension: 400 }}
				snap={{ mass: 4, tension: 400 }}
			>
				<Float rotationIntensity={0.4}>
					{/* Light */}
					<rectAreaLight
						width={2.5}
						height={1.65}
						intensity={65}
						color={'#ff6900'}
						rotation={[0.1, Math.PI, 0]}
						position={[0, 0.55, -1.15]}
					/>
					{/* Model - Laptop */}
					<primitive
						object={computer.scene}
						position-y={-1.2}
						position-x={0.5}
						scale={[1.1, 1.1, 1.1]}
					>
						<Html
							transform
							wrapperClass='htmlScreen'
							distanceFactor={1.17}
							position={[0, 1.56, -1.4]}
							rotation-x={-0.256}
						>
							<iframe src='https://mj-portfolio-3d.netlify.app/' />
						</Html>
					</primitive>
				</Float>
			</PresentationControls>

			<ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
		</>
	);
}

// const computer = useGLTF(
// 	'https://threejs-journey.com/resources/models/macbook_model.gltf'
// );
