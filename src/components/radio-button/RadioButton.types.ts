import { Color, Option } from '../types';

export interface RadioButtonProps {
	options: Option[];
	value?: any;
	width?: string;
	activeColor?: Color;
	className?: string;
	onChange: (value: string) => void;
}
