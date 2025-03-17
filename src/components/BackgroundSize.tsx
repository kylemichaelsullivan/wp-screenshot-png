import { useWP } from '@/context';

import { TBackgroundSize } from '@/types';

function BackgroundSize() {
	const { backgroundSize, handleBackgroundSizeChange } = useWP() as {
		backgroundSize: TBackgroundSize;
		handleBackgroundSizeChange: (size: TBackgroundSize) => void;
	};

	return (
		<label className='BackgroundSize flex flex-col flex-auto'>
			Background Size
			<select
				className='flex-auto p-2'
				value={backgroundSize}
				title='Set Background Size'
				onChange={(e) =>
					handleBackgroundSizeChange(e.target.value as TBackgroundSize)
				}
			>
				<option value='auto'>Auto</option>
				<option value='cover'>Cover</option>
				<option value='contain'>Contain</option>
			</select>
		</label>
	);
}

export default BackgroundSize;
