import React, { FC } from 'react';
import { CardProps } from './Card.types';
import '../../style/components/card.scss';

const Card: FC<CardProps> = ({
	color,
	radius,
	tyClass,
	children,
	...props
}) => {
	return (
		<div tabIndex={0} className={`ty-card ty-shadow border-radius-${radius||15}
			ty-bg-${color||'contrast-primary'} ${tyClass||''}`} {...props}>
			{children}
		</div>
	);
};

export default Card;
