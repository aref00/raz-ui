import { MouseEventHandler } from 'react';
import { Theme } from '../../theme/theme.types';
export interface ButtonProps {
	disabled?: boolean;
	height?: string;
	width?: string;
	theme?: Theme;
	color?: string;
	outlineColor?: string;
	layout?: 'simple'|'outline'|'clear';
	label?: string;
	tyClass?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
