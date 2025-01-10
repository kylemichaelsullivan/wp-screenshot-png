import { useWP } from '@/context';

function FontSize() {
	const { fontSize, handleFontSizeChange } = useWP();

	return (
		<input
			type='number'
			className='flex-1'
			value={fontSize}
			min={1}
			onChange={(e) => handleFontSizeChange(Number(e.target.value))}
		/>
	);
}

export default FontSize;
