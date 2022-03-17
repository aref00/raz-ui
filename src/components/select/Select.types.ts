import { Color, Option } from '../types';

export interface SelectProps {
	options: Option[];
	defaultValue?: Option;
	color?: Color;
	disabled?: boolean;
	clear?: boolean;
	width?: string;
	height?: string;
	autoFocus?: boolean;
	tyClass?: string;
	label?: string;
	placeholder?: string;
	onChange: (value: string | number) => void;
}
