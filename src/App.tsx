import Input from '@/components/Input';
import Output from '@/components/Output';
import Buttons from '@/components/Buttons';

function App() {
	return (
		<div className='App flex flex-col gap-4'>
			<h1 className='text-2xl font-bold text-center'>
				WordPress Screenshot Maker
			</h1>
			<Input />
			<Output />
			<Buttons />
		</div>
	);
}

export default App;
