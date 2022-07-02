import {
	ChangeEventHandler,
	KeyboardEventHandler,
	FocusEventHandler,
	FormEventHandler,
} from 'react';
import { Color } from '../types';

export interface InputProps {
	id?: string;
	value?: string | number;
	defaultValue?: string | number;
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
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
	step?: number;
	rows?: number;
	cols?: number;
	required?: boolean;
	error?: string;
	autocomplete?: 'on' | 'off';
	disabled?: boolean;
	passRef?: any;
	// color?: Color;
	// placeholderColor?: Color;
	outlineColor?: Color;
	tyClass?: string;
	inputClass?: string;
	tag?: 'input' | 'textarea';
	suffix?: React.ReactNode;
	type?: React.HTMLInputTypeAttribute;
	autoFocus?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onInput?: FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onKeyUp?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onSubmit?: FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
