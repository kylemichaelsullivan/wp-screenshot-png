import Reset from './Reset';
import Save from './Save';

function Buttons() {
	return (
		<div className='Buttons flex flex-col-reverse gap-4 mx-auto sm:flex-row'>
			<Reset />
			<Save />
		</div>
	);
}

export default Buttons;
