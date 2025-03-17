import { useWP } from '@/context';

function Text() {
	const { text, handleTextChange } = useWP();

	return (
		<textarea
			className='Text flex-auto rounded-none p-2'
			placeholder='Enter Text Here'
			value={text}
			onChange={(e) => handleTextChange(e.target.value)}
		/>
	);
}

export default Text;
