import React, { FC, PropsWithChildren } from 'react';
import { AvatarProps } from './Avatar.types';

export const Avatar: FC<PropsWithChildren<AvatarProps>> = ({
	className,
	children,
	title,
	...props
}) => {
	props.width = props.width || '45px';
	return (
		<div style={props} className={`raz-avatar ${className}`} title={title}>
			<div className="raz-avatar-wrapper">
				<div className="raz-avatar-content raz-flex raz-justify-center align-items-center">
					{children}
				</div>
			</div>
		</div>
	);
};
