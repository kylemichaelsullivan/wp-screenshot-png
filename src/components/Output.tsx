import { useState, useEffect } from 'react';

import { useWP } from '@/context';

function Output() {
	const {
		text,
		backgroundColor,
		textColor,
		strokeColor,
		fontSize,
		fontWeight,
		backgroundImage,
		backgroundPosition,
		backgroundRepeat,
		backgroundSize,
		componentRef,
	} = useWP();

	const [backgroundImageSrc, setBackgroundImageSrc] = useState<string>('');

	useEffect(() => {
		backgroundImage
			? setBackgroundImageSrc(URL.createObjectURL(backgroundImage))
			: setBackgroundImageSrc('');
	}, [backgroundImage]);

	return (
		<div className='Output flex'>
			<div
				className='canvas flex'
				ref={componentRef}
				style={{
					backgroundColor,
					backgroundImage: backgroundImageSrc
						? `url(${backgroundImageSrc})`
						: 'none',
					backgroundPosition,
					backgroundRepeat,
					backgroundSize,
					color: textColor,
					fontSize,
					fontWeight,
					textShadow: `1px 1px 1px ${strokeColor}`,
				}}
			>
				{text}
			</div>
		</div>
	);
}

export default Output;
