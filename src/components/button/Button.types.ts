import { AriaRole, MouseEventHandler } from 'react';
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
	'aria-selected'?: 'true' | 'false';
	'aria-controls'?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
