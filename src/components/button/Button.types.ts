import { MouseEventHandler } from 'react';
export interface ButtonProps {
	disabled?: boolean;
	height?: string;
	width?: string;
	color?: string;
	outlineColor?: string;
	layout?: 'simple'|'outline'|'clear';
	label?: string;
	tyClass?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
