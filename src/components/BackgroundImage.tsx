import type { ChangeEvent } from 'react';

import { useWP } from '@/context';

function BackgroundImage() {
	const { handleBackgroundImageChange } = useWP();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			handleBackgroundImageChange(file);
		}
	};

	return (
		<input
			type='file'
			className='BackgroundImage'
			accept='image/*'
			onChange={handleChange}
		/>
	);
}
export default BackgroundImage;
