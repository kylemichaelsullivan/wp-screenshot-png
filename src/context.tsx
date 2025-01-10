import {
	useState,
	useEffect,
	createContext,
	useContext,
	useRef,
	type ReactNode,
	type RefObject,
} from 'react';

import html2canvas from 'html2canvas';

import type { TFontWeightKey, TColor } from '@/types';

type WPContextType = {
	text: string;
	background: TColor;
	color: TColor;
	fontSize: number;
	fontWeight: TFontWeightKey;
	handleTextChange: (text: string) => void;
	handleBackgroundChange: (background: TColor) => void;
	handleColorChange: (color: TColor) => void;
	handleFontSizeChange: (size: number) => void;
	handleFontWeightChange: (weight: TFontWeightKey) => void;
	componentRef: RefObject<HTMLDivElement>;
	reset: () => void;
	save: () => void;
};

const WPContext = createContext<WPContextType | undefined>(undefined);

type WPContextProviderProps = {
	children: ReactNode;
};

const initialText = '';
const initialBackground = '#ffffff';
const initialColor = '#000000';
const initialFontSize = 16;
const initialFontWeight = 700;

export function WPContextProvider({ children }: WPContextProviderProps) {
	const componentRef = useRef<HTMLDivElement>(null);

	const [text, setText] = useState(initialText);
	const [background, setBackground] = useState<TColor>(initialBackground);
	const [color, setColor] = useState<TColor>(initialColor);
	const [fontSize, setFontSize] = useState(initialFontSize);
	const [fontWeight, setFontWeight] =
		useState<TFontWeightKey>(initialFontWeight);

	function handleTextChange(text: string) {
		setText(text);
	}

	function handleBackgroundChange(background: TColor) {
		setBackground(background);
	}

	function handleColorChange(color: TColor) {
		setColor(color);
	}

	function handleFontSizeChange(size: number) {
		setFontSize(size);
	}

	function handleFontWeightChange(weight: TFontWeightKey) {
		setFontWeight(weight);
	}

	async function save() {
		if (componentRef.current) {
			const canvas = await html2canvas(componentRef.current, {
				scale: 1,
				width: 1200,
				height: 900,
			});
			const imgData = canvas.toDataURL('image/png');
			const link = document.createElement('a');
			link.href = imgData;
			link.download = 'screenshot.png';
			link.click();
		}
	}

	function reset() {
		setText(initialText);
		setBackground(initialBackground);
		setColor(initialColor);
		setFontSize(initialFontSize);
		setFontWeight(initialFontWeight);

		document.querySelectorAll('input').forEach((input) => input.blur());
	}

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				reset();
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	const value = {
		text,
		background,
		color,
		fontSize,
		fontWeight,
		handleTextChange,
		handleBackgroundChange,
		handleColorChange,
		handleFontSizeChange,
		handleFontWeightChange,
		componentRef,
		save,
		reset,
	};

	return <WPContext.Provider value={value}>{children}</WPContext.Provider>;
}

export function useWP() {
	const context = useContext(WPContext);
	if (context === undefined) {
		throw new Error('useWP must be used within an WPContextProvider');
	}
	return context;
}
