import React, { FC, PropsWithChildren } from 'react';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton: FC<PropsWithChildren<SkeletonProps>> = ({
	radius,
	color,
	width,
	height,
	className,
	children,
}) => {
	return (
		<section
			className={`ty-skeleton border-radius-${radius || 15} raz-bg-${
				color || 'light'
			} ${className}`}
			style={{ width, height }}
		>
			{children}
		</section>
	);
};
