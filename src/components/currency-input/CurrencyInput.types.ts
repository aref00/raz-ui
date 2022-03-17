import {
	ChangeEventHandler,
	KeyboardEventHandler,
	FocusEventHandler,
	FormEventHandler,
} from 'react';
import { Color } from '../types';

export interface CurrencyInputProps {
	value?: number | string;
	name?: string;
	placeholder?: string;
	label?: string;
	dir?: string;
	clear?: boolean;
	borderBottom?: boolean;
	radius?: number;
	// outline?: boolean;
	height?: string;
	width?: string;
	min?: number;
	max?: number;
	step?: number;
	required?: boolean;
	error?: string;
	disabled?: boolean;
	// color?: Color;
	// placeholderColor?: Color;
	outlineColor?: Color;
	tyClass?: string;
	inputClass?: string;
	suffix?: React.ReactNode;
	onChange: ChangeEventHandler;
	onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onSubmit?: FormEventHandler<HTMLInputElement>;
}
