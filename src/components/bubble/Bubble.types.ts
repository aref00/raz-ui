import { Color } from '../types';

export interface BubbleProps {
	radius?: number;
	color?: Color;
	replyColor?: Color;
	replyTo?: React.ReactNode;
	footer?: React.ReactNode;
	isMe?: boolean;
	className?: string;
}
