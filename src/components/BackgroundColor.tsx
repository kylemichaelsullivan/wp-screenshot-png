import { useWP } from '@/context';

function BackgroundColor() {
	const { backgroundColor, handleBackgroundColorChange } = useWP();

	return (
		<div className='BackgroundColor flex flex-col flex-1'>
			<label title='Set Background Color'>
				Background Color
				<input
					type='color'
					name='backgroundColor'
					value={backgroundColor}
					onChange={(e) => handleBackgroundColorChange(e.target.value)}
					id='backgroundColor'
				/>
			</label>
		</div>
	);
}

export default BackgroundColor;
