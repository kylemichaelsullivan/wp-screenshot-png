import { useWP } from '@/context';

function FontSize() {
	const { fontSize, handleFontSizeChange } = useWP();

	return (
		<div className='FontSize flex-1'>
			<label className='flex flex-col'>
				Font Size
				<input
					type='number'
					className='flex-1 p-2'
					value={fontSize}
					min={1}
					title='Set Font Size'
					onChange={(e) => handleFontSizeChange(Number(e.target.value))}
				/>
			</label>
		</div>
	);
}

export default FontSize;
