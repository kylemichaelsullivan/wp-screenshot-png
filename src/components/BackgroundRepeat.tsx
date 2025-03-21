import { useWP } from '@/context';

import { TBackgroundRepeat } from '@/types';

function BackgroundRepeat() {
	const { backgroundRepeat, handleBackgroundRepeatChange } = useWP() as {
		backgroundRepeat: TBackgroundRepeat;
		handleBackgroundRepeatChange: (repeat: TBackgroundRepeat) => void;
	};

	return (
		<label className='BackgroundRepeat flex flex-col flex-auto'>
			Background Repeat
			<select
				className='flex-auto p-2'
				value={backgroundRepeat}
				title='Set Background Repeat'
				onChange={(e) =>
					handleBackgroundRepeatChange(e.target.value as TBackgroundRepeat)
				}
			>
				<option value='no-repeat'>No Repeat</option>
				<option value='repeat'>Repeat</option>
				<option value='repeat-x'>Repeat X</option>
				<option value='repeat-y'>Repeat Y</option>
			</select>
		</label>
	);
}

export default BackgroundRepeat;
