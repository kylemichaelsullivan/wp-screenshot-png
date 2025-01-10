import Reset from '@/components/Reset';
import Save from '@/components/Save';

function Buttons() {
	return (
		<div className='Buttons flex flex-col gap-4 sm:flex-row'>
			<Reset />
			<Save />
		</div>
	);
}

export default Buttons;
