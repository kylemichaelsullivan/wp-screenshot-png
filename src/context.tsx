import {
	useState,
	useEffect,
	useRef,
	createContext,
	useContext,
	type ReactNode,
	type RefObject,
} from 'react';

import html2canvas from 'html2canvas';

import type { TColor, TFontWeightKey, TImage } from '@/types';

type WPContextType = {
	text: string;
	backgroundImage: TImage;
	backgroundColor: TColor;
	textColor: TColor;
	strokeColor: TColor;
	fontSize: number;
	fontWeight: TFontWeightKey;
	handleTextChange: (text: string) => void;
	handleBackgroundImageChange: (backgroundImage: TImage) => void;
	handleBackgroundColorChange: (backgroundColor: TColor) => void;
	handleTextColorChange: (textColor: TColor) => void;
	handleStrokeColorChange: (strokeColor: TColor) => void;
	handleFontSizeChange: (size: number) => void;
	handleFontWeightChange: (weight: TFontWeightKey) => void;
	componentRef: RefObject<HTMLDivElement>;
	reset: () => void;
	save: () => void;
	backgroundPosition: string;
	backgroundRepeat: string;
	backgroundSize: string;
	handleBackgroundPositionChange: (position: string) => void;
	handleBackgroundRepeatChange: (repeat: string) => void;
	handleBackgroundSizeChange: (size: string) => void;
};

const WPContext = createContext<WPContextType | undefined>(undefined);

type WPContextProviderProps = {
	children: ReactNode;
};

const initialText = '';
const initialBackgroundImage = null;
const initialBackgroundColor = '#ffffff';
const initialTextColor = '#000000';
const initialStrokeColor = '#000000';
const initialFontSize = 72;
const initialFontWeight = 700;
const initialBackgroundPosition = 'center';
const initialBackgroundRepeat = 'no-repeat';
const initialBackgroundSize = 'cover';

export function WPContextProvider({ children }: WPContextProviderProps) {
	const componentRef = useRef<HTMLDivElement>(null);

	const [text, setText] = useState<string>(initialText);

	const [backgroundImage, setBackgroundImage] = useState<TImage>(
		initialBackgroundImage,
	);

	const [backgroundColor, setBackgroundColor] = useState<TColor>(
		initialBackgroundColor,
	);
	const [backgroundPosition, setBackgroundPosition] = useState(
		initialBackgroundPosition,
	);

	const [backgroundRepeat, setBackgroundRepeat] = useState(
		initialBackgroundRepeat,
	);
	const [backgroundSize, setBackgroundSize] = useState(initialBackgroundSize);

	const [textColor, setTextColor] = useState<TColor>(initialTextColor);
	const [strokeColor, setStrokeColor] = useState<TColor>(initialStrokeColor);

	const [fontSize, setFontSize] = useState<number>(initialFontSize);
	const [fontWeight, setFontWeight] =
		useState<TFontWeightKey>(initialFontWeight);

	function handleTextChange(text: string) {
		setText(text);
	}

	function handleBackgroundImageChange(backgroundImage: TImage) {
		setBackgroundImage(backgroundImage);
	}

	function handleBackgroundColorChange(backgroundColor: TColor) {
		setBackgroundColor(backgroundColor);
	}

	function handleTextColorChange(textColor: TColor) {
		setTextColor(textColor);
	}

	function handleStrokeColorChange(strokeColor: TColor) {
		setStrokeColor(strokeColor);
	}

	function handleFontSizeChange(size: number) {
		setFontSize(size);
	}

	function handleFontWeightChange(weight: TFontWeightKey) {
		setFontWeight(weight);
	}

	function handleBackgroundPositionChange(position: string) {
		setBackgroundPosition(position);
	}

	function handleBackgroundRepeatChange(repeat: string) {
		setBackgroundRepeat(repeat);
	}

	function handleBackgroundSizeChange(size: string) {
		setBackgroundSize(size);
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
		setBackgroundImage(initialBackgroundImage);
		setBackgroundColor(initialBackgroundColor);
		setTextColor(initialTextColor);
		setStrokeColor(initialStrokeColor);
		setFontSize(initialFontSize);
		setFontWeight(initialFontWeight);
		setBackgroundPosition(initialBackgroundPosition);
		setBackgroundRepeat(initialBackgroundRepeat);
		setBackgroundSize(initialBackgroundSize);

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
		backgroundImage,
		backgroundColor,
		textColor,
		strokeColor,
		fontSize,
		fontWeight,
		handleTextChange,
		handleBackgroundImageChange,
		handleBackgroundColorChange,
		handleTextColorChange,
		handleStrokeColorChange,
		handleFontSizeChange,
		handleFontWeightChange,
		componentRef,
		save,
		reset,
		backgroundPosition,
		backgroundRepeat,
		backgroundSize,
		handleBackgroundPositionChange,
		handleBackgroundRepeatChange,
		handleBackgroundSizeChange,
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
