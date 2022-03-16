import { MouseEventHandler } from 'react';
import { Color } from '../types';

export interface CardProps {
	radius?: number;
	color?: Color;
	tyClass?: string;
	onClick?: MouseEventHandler;
}
