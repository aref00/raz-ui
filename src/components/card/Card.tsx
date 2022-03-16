import React, { FC } from 'react';
import { CardProps } from './Card.types';
import '../../style/components/card.scss';

const Card: FC<CardProps> = ({
	color,
	radius,
	tyClass,
	children,
}) => {
	return (
		<div className={`ty-card ty-shadow-shadow border-radius-${radius||15}
			ty-bg-${color||'contrast-primary'} ${tyClass}`}>
			{children}
		</div>
	);
};

export default Card;
