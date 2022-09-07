import React, { FC } from 'react';
import { AvatarProps } from './Avatar.types';

export const Avatar: FC<AvatarProps> = ({
	className,
	children,
	title,
	...props
}) => {
	props.width = props.width || '45px';
	return (
		<div style={props} className={`ty-avatar ${className}`} title={title}>
			<div className="ty-avatar-wrapper">
				<div className="ty-avatar-content ty-flex ty-justify-center align-items-center">
					{children}
				</div>
			</div>
		</div>
	);
};
