import { useWP } from '@/context';

function Save() {
	const { save } = useWP();

	return (
		<button type='button' className='Save flex-1' title='Save' onClick={save}>
			Save
		</button>
	);
}

export default Save;
