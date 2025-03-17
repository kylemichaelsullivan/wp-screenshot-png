import { useWP } from '@/context';

function Save() {
	const { btn, save } = useWP();

	return (
		<button
			type='button'
			className={`Save flex-1 ${btn}`}
			title='Save'
			onClick={save}
		>
			Save
		</button>
	);
}

export default Save;
