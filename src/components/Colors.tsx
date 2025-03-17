import Background from './BackgroundColor';
import Color from './Color';

function Colors() {
	return (
		<div className='Colors flex flex-col gap-4 sm:flex-row'>
			<Background />
			<Color />
		</div>
	);
}

export default Colors;
