import { useWP } from '@/context';

function TextColor() {
	const { textColor, handleTextColorChange } = useWP();

	return (
		<div className='TextColor flex flex-col flex-1'>
			<label title='Set Text Color'>
				Text Color
				<input
					type='color'
					value={textColor}
					onChange={(e) => handleTextColorChange(e.target.value)}
				/>
			</label>
		</div>
	);
}

export default TextColor;
