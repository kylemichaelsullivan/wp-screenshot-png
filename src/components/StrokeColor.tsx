import { useWP } from '@/context';

function StrokeColor() {
	const { strokeColor, handleStrokeColorChange } = useWP();

	return (
		<label className='StrokeColor flex flex-col flex-1'>
			Stroke Color
			<input
				type='color'
				value={strokeColor}
				onChange={(e) => handleStrokeColorChange(e.target.value)}
			/>
		</label>
	);
}

export default StrokeColor;
