import Input from '@/components/Input';
import Output from '@/components/Output';
import Buttons from '@/components/Buttons';

function App() {
	return (
		<div className='App flex flex-col gap-4'>
			<Input />
			<Output />
			<Buttons />
		</div>
	);
}

export default App;
