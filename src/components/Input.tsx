import Content from './Content';
import Background from './Background';
import Styles from './Styles';

function Input() {
	return (
		<div className='Input flex flex-col gap-4 md:mx-auto'>
			<Content />
			<Background />
			<Styles />
		</div>
	);
}

export default Input;
