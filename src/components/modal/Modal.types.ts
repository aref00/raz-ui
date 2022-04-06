import { ReactNode } from 'react';
import { Color } from '../types';

export interface ModalProps {
	radius?: number;
	color?: Color;
	transparent?: boolean;
	visible?: boolean;
	canExit?: boolean;
	disableBackdropExit?: boolean;
	style?: {
		width?: string;
		minWidth?: string;
		maxWidth?: string;
		height?: string;
		minHeight?: string;
		maxHeight?: string;
	};
	title?: string;
	fullscreen?: boolean;
	header?: ReactNode;
	footer?: ReactNode;
	beforeClose?: () => boolean;
	onChange?: (visible: boolean) => void;
	tyClass?: string;
}
