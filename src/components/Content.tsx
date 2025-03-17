import Text from './Text';
import BackgroundImage from './BackgroundImage';

function Content() {
	return (
		<div className='Content flex flex-col gap-4 items-center md:flex-row'>
			<Text />
			<BackgroundImage />
		</div>
	);
}

export default Content;
