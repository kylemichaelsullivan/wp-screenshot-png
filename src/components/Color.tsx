import { useWP } from '@/context';

function Color() {
	const { color, handleColorChange } = useWP();

	return (
		<div className='Color flex flex-col flex-1'>
			<label title='Set Text Color'>
				Color
				<input
					type='color'
					name='color'
					value={color}
					onChange={(e) => handleColorChange(e.target.value)}
					id='color'
				/>
			</label>
		</div>
	);
}

export default Color;
