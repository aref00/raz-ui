import { ChangeEventHandler, KeyboardEventHandler, FocusEventHandler } from 'react';
import { Color } from '../types';

export interface InputProps {
	value?: string|number;
	name?: string;
	placeholder?: string;
	label?: string;
	dir?: string;
	clear?: boolean;
	borderBottom?: boolean;
	// outline?: boolean;
	height?: string;
	width?: string;
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
	step?: number;
	rows?: number;
	cols?: number;
	required?: boolean;
	error?: string;
	autocomplete?: 'on'|'off';
	disabled?: boolean;
	// color?: Color;
	// placeholderColor?: Color;
	outlineColor?: Color;
	tyClass?: string;
	inputClass?: string;
	tag?: 'input'|'textarea';
	suffix?: React.ReactNode;
	type?: React.HTMLInputTypeAttribute;
	onChange?: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>;
	onKeyUp?: KeyboardEventHandler<HTMLInputElement|HTMLTextAreaElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement|HTMLTextAreaElement>;
	onFocus?: FocusEventHandler<HTMLInputElement|HTMLTextAreaElement>;
	onBlur?: FocusEventHandler<HTMLInputElement|HTMLTextAreaElement>;
}
