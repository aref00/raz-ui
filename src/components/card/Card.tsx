import React, { FC, PropsWithChildren } from 'react';
import { CardProps } from './Card.types';

export const Card: FC<PropsWithChildren<CardProps>> = ({
	color,
	radius,
	className,
	children,
	...props
}) => {
	radius = typeof radius === 'number' ? radius : 15;
	return (
		<div
			tabIndex={0}
			className={`raz-card raz-shadow border-radius-${radius}
			raz-bg-${color || 'contrast-primary'} ${className || ''}`}
			{...props}>
			{children}
		</div>
	);
};
