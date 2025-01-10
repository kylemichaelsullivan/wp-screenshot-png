import { useWP } from '@/context';

function Output() {
	const { text, background, color, fontSize, fontWeight, componentRef } =
		useWP();

	return (
		<div className='Output flex'>
			<div
				className='canvas flex'
				ref={componentRef}
				style={{
					background,
					color,
					fontSize,
					fontWeight,
				}}
			>
				{text}
			</div>
		</div>
	);
}

export default Output;
