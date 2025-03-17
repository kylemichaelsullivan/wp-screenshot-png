export type TBackgroundPosition =
	| 'center'
	| 'top'
	| 'bottom'
	| 'left'
	| 'right'
	| 'top left'
	| 'top right'
	| 'bottom left'
	| 'bottom right';

export type TBackgroundRepeat =
	| 'no-repeat'
	| 'repeat'
	| 'repeat-x'
	| 'repeat-y';

export type TBackgroundSize = 'auto' | 'cover' | 'contain';

export type TColor = string;

export type TFontWeightKey =
	| 100
	| 200
	| 300
	| 400
	| 500
	| 600
	| 700
	| 800
	| 900;

export type TFontWeightValue =
	| 'Thin'
	| 'Extra Light'
	| 'Light'
	| 'Normal'
	| 'Medium'
	| 'Semi Bold'
	| 'Bold'
	| 'Extra Bold'
	| 'Black';

export type TImage = File | null;
