import React, { FC } from 'react';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton: FC<SkeletonProps> = ({
	radius,
	color,
	width,
	height,
	className,
	children,
}) => {
	return (
		<section
			className={`ty-skeleton border-radius-${radius || 15} ty-bg-${
				color || 'light'
			} ${className}`}
			style={{ width, height }}
		>
			{children}
		</section>
	);
};
