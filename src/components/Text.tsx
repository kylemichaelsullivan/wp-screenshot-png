import { useWP } from '@/context';

function Text() {
	const { text, handleTextChange } = useWP();

	return (
		<textarea
			placeholder='Enter Text Here'
			value={text}
			onChange={(e) => handleTextChange(e.target.value)}
		/>
	);
}

export default Text;
