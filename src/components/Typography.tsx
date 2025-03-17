import FontSize from './FontSize';
import FontWeight from './FontWeight';

function Typography() {
	return (
		<div className='Typography flex flex-col gap-4 sm:flex-row'>
			<FontSize />
			<FontWeight />
		</div>
	);
}

export default Typography;
