import { useWP } from '@/context';

function Text() {
	const { text, handleTextChange } = useWP();

	return (
		<textarea
			className='Text flex-auto w-full p-2'
			placeholder='Enter Text Here'
			title='Enter Text Here'
			value={text}
			onChange={(e) => handleTextChange(e.target.value)}
		/>
	);
}

export default Text;
