import React, { FC, PropsWithChildren } from 'react';
import { BubbleProps } from './Bubble.types';

export const Bubble: FC<PropsWithChildren<BubbleProps>> = ({
	color,
	replyColor,
	radius,
	replyTo,
	footer,
	isMe,
	className,
	children,
}) => {
	color = color || 'primary';
	replyColor = replyColor || 'secondary';
	className = className || '';
	const side = isMe ? 'start' : 'end';
	return (
		<div className={`ty-flex ty-flex-col align-items-${side}`}>
			<div
				role="dialog"
				className={`ty-bubble text-justify border-radius-${
					radius || 10
				} ty-bg-${color} ty-bubble-${side} ${className}`}
			>
				{replyTo && (
					<div className={`full-width ty-bg-${replyColor}`}>{replyTo}</div>
				)}
				<div>{children}</div>
			</div>
			{footer && <div>{footer}</div>}
		</div>
	);
};
