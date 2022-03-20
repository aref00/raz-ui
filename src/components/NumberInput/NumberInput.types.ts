import { ChangeEventHandler, FocusEventHandler } from 'react';
import { Color } from '../types';

export interface NumberInputProps {
	value?: number;
	height?: string;
	width?: string;
	placeholder?: string;
	label?: string;
	suffixWidth?: number;
	dir?: string;
	clear?: string;
	borderBottom?: boolean;
	disabled?: boolean;
	inputDisabled?: boolean;
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
	step?: number;
	required?: boolean;
	error?: string;
	rows?: number;
	cols?: number;
	tyClass?: string;
	plusColor?: Color;
	minusColor?: Color;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}
