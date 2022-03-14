import { Color } from '../types';
type Option = {
	label: any,
	value: any,
}



export interface RadioButtonProps {
	options: Option[];
	value?: any;
	width?: string;
	activeColor?: Color;
	tyClass?: string;
	onChange: (value: string) => void;
}
