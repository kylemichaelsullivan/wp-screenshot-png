import { useState, useEffect } from 'react';

import { useWP } from '@/context';

function Output() {
	const {
		text,
		backgroundColor,
		color,
		fontSize,
		fontWeight,
		backgroundImageSrc,
		backgroundPosition,
		backgroundRepeat,
		backgroundSize,
		componentRef,
	} = useWP();

	const [backgroundImage, setBackgroundImage] =
		useState<string>(backgroundImageSrc);

	useEffect(() => {
		backgroundImageSrc
			? setBackgroundImage(`url(${backgroundImageSrc})`)
			: 'none';
	}, [backgroundImageSrc]);

	return (
		<div className='Output flex'>
			<div
				className='canvas flex'
				ref={componentRef}
				style={{
					backgroundColor,
					backgroundImage: backgroundImage,
					backgroundPosition,
					backgroundRepeat,
					backgroundSize,
					color,
					fontSize,
					fontWeight,
				}}
			>
				{text}
			</div>
		</div>
	);
}

export default Output;
