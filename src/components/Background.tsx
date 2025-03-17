import BackgroundPosition from '@/components/BackgroundPosition';
import BackgroundRepeat from '@/components/BackgroundRepeat';
import BackgroundSize from '@/components/BackgroundSize';

function Background() {
	return (
		<div className='Background flex flex-col gap-4 md:flex-row'>
			<BackgroundPosition />
			<BackgroundRepeat />
			<BackgroundSize />
		</div>
	);
}

export default Background;
