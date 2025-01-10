import { useWP } from '@/context';

function Background() {
	const { background, handleBackgroundChange } = useWP();

	return (
		<div className='Background flex flex-col flex-1'>
			<label title='Set Background Color'>
				Background
				<input
					type='color'
					name='background'
					value={background}
					onChange={(e) => handleBackgroundChange(e.target.value)}
					id='background'
				/>
			</label>
		</div>
	);
}

export default Background;
