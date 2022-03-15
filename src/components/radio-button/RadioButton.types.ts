import { Color, Option } from '../types';

export interface RadioButtonProps {
	options: Option[];
	value?: any;
	width?: string;
	activeColor?: Color;
	tyClass?: string;
	onChange: (value: string) => void;
}
