import Background from '@/components/Background';
import Color from '@/components/Color';

function Colors() {
	return (
		<div className='Colors flex flex-col gap-4 sm:flex-row'>
			<Background />
			<Color />
		</div>
	);
}

export default Colors;
