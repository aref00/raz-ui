import React, { FC } from 'react';
import { AvatarProps } from './Avatar.types';
import '../../style/components/avatar.scss';

export const Avatar: FC<AvatarProps> = ({
	tyClass,
	children,
	title,
	...props
}) => {
	props.width = props.width || '45px';
	return (
		<div style={props} className={`ty-avatar ${tyClass}`} title={title}>
			<div className="ty-avatar-wrapper">
				<div className="ty-avatar-content ty-flex ty-justify-center align-items-center">
					{children}
				</div>
			</div>
		</div>
	);
};
