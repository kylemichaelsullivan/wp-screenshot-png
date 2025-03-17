import Background from './BackgroundColor';
import TextColor from './TextColor';
import StrokeColor from './StrokeColor';
function Colors() {
	return (
		<div className='Colors flex flex-col gap-4 sm:flex-row'>
			<Background />
			<TextColor />
			<StrokeColor />
		</div>
	);
}

export default Colors;
