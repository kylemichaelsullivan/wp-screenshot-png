import { useWP } from '@/context';

function Reset() {
	const { btn, reset } = useWP();

	return (
		<button
			type='button'
			className={`Reset flex-1 ${btn}`}
			title='Reset'
			onClick={reset}
		>
			Reset
		</button>
	);
}

export default Reset;
