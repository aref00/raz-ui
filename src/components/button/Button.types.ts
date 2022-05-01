import { AriaRole, ButtonHTMLAttributes, MouseEventHandler } from 'react';
export interface ButtonProps {
	disabled?: boolean;
	height?: string;
	width?: string;
	color?: string;
	outlineColor?: string;
	layout?: 'simple' | 'outline' | 'clear';
	role?: AriaRole;
	radius?: number;
	tyClass?: string;
	type?: 'button' | 'submit' | 'reset';
	'aria-selected'?: 'true' | 'false';
	'aria-controls'?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
