import { ChangeEvent } from 'react';

import { useWP } from '@/context';
import type { TFontWeightKey, TFontWeightValue } from '@/types';

function FontWeight() {
	const { fontWeight, handleFontWeightChange } = useWP();

	const fontWeights: { key: TFontWeightKey; value: TFontWeightValue }[] = [
		{ key: 100, value: 'Thin' },
		{ key: 200, value: 'Extra Light' },
		{ key: 300, value: 'Light' },
		{ key: 400, value: 'Normal' },
		{ key: 500, value: 'Medium' },
		{ key: 600, value: 'Semi Bold' },
		{ key: 700, value: 'Bold' },
		{ key: 800, value: 'Extra Bold' },
		{ key: 900, value: 'Black' },
	];

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = Number(e.target.value) as TFontWeightKey;
		handleFontWeightChange(selectedValue);
	};

	return (
		<div className='FontWeight flex-1'>
			<label className='flex flex-col'>
				Font Weight
				<select
					className='flex-1 p-2'
					value={fontWeight}
					title='Set Font Weight'
					onChange={handleChange}
				>
					{fontWeights.map(({ key, value }) => (
						<option key={key} value={key}>
							{value}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}

export default FontWeight;
