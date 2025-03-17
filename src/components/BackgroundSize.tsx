import { useWP } from '@/context';

function BackgroundSize() {
	const { backgroundSize, handleBackgroundSizeChange } = useWP();

	return (
		<label className='BackgroundSize flex flex-col flex-auto'>
			Background Size
			<select
				className='flex-auto p-2'
				value={backgroundSize}
				onChange={(e) => handleBackgroundSizeChange(e.target.value)}
			>
				<option value='auto'>Auto</option>
				<option value='cover'>Cover</option>
				<option value='contain'>Contain</option>
			</select>
		</label>
	);
}

export default BackgroundSize;
