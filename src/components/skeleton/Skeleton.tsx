import React, { FC } from 'react';
import { SkeletonProps } from './Skeleton.types';
import '../../style/components/skeleton.scss';

export const Skeleton: FC<SkeletonProps> = ({
	radius,
	color,
	width,
	height,
	tyClass,
	children,
}) => {
	return (
		<section
			className={`ty-skeleton border-radius-${radius || 15} ty-bg-${
				color || 'light'
			} ${tyClass}`}
			style={{ width, height }}
		>
			{children}
		</section>
	);
};
