import { useWP } from '@/context';

function BackgroundPosition() {
	const { backgroundPosition, handleBackgroundPositionChange } = useWP();

	return (
		<label className='BackgroundPosition flex flex-col flex-auto'>
			Background Position
			<select
				className='flex-auto p-2'
				value={backgroundPosition}
				title='Set Background Position'
				onChange={(e) => handleBackgroundPositionChange(e.target.value)}
			>
				<option value='center'>Center</option>
				<option value='top'>Top</option>
				<option value='bottom'>Bottom</option>
				<option value='left'>Left</option>
				<option value='right'>Right</option>
				<option value='top left'>Top Left</option>
				<option value='top right'>Top Right</option>
				<option value='bottom left'>Bottom Left</option>
				<option value='bottom right'>Bottom Right</option>
			</select>
		</label>
	);
}

export default BackgroundPosition;
