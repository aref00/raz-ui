import React, { FC } from 'react';
import { BubbleProps } from './Bubble.types';
import '../../style/components/bubble.scss';

const Bubble: FC<BubbleProps> = ({
	color,
	replyColor,
	radius,
	replyTo,
	footer,
	isMe,
	tyClass,
	children,
}) => {
	color = color || 'primary';
	replyColor = replyColor || 'secondary';
	tyClass = tyClass || '';
	const side = isMe?'start':'end';
	return (
		<div className={`ty-flex ty-flex-col align-items-${side}`}>
			<div role='dialog' className={`ty-bubble text-justify border-radius-${radius||10} ty-bg-${color} ty-bubble-${side} ${tyClass}`}>
				{
					replyTo&&<div className={`full-width ty-bg-${replyColor}`}>
						{replyTo}
					</div>
				}
				<div>
					{children}
				</div>
			</div>
			{
				footer&&<div>
					{footer}
				</div>
			}
		</div>
	);
};

export default Bubble;
