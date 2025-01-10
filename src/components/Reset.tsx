import { useWP } from '@/context';

function Reset() {
	const { reset } = useWP();

	return (
		<button
			type='button'
			className='Reset flex-1'
			title='Reset'
			onClick={reset}
		>
			Reset
		</button>
	);
}

export default Reset;
