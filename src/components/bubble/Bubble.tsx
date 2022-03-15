import React, { FC } from 'react';
import { BubbleProps } from './Bubble.types';
import '../../style/components/card.scss';

const Bubble: FC<BubbleProps> = ({
	color,
	replyColor,
	radius,
	replyTo,
	footer,
	isRight,
	tyClass,
	children,
}) => {
	color = color || 'primary';
	replyColor = replyColor || 'secondary';
	tyClass = tyClass || '';
	return (
		<div>
			<div role='dialog' className={`ty-bubble text-justify border-radius-${radius||10} ty-bg-${color} ${isRight?'ty-bubble-right':'ty-bubble-left'} ${tyClass}`}>
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
