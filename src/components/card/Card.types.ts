import { MouseEventHandler } from 'react';
import { Color } from '../types';

export interface CardProps {
	radius?: number;
	color?: Color;
	style?: {
		width?: string;
		minWidth?: string;
		maxWidth?: string;
		height?: string;
		minHeight?: string;
		maxHeight?: string;
	};
	className?: string;
	onClick?: MouseEventHandler;
}
