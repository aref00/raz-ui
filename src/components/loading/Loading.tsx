import React, { FC, PropsWithChildren } from 'react';
import { LoadingProps } from './Loading.types';

export const Loading: FC<PropsWithChildren<LoadingProps>> = ({
	show,
	color,
	fullscreen,
	text,
	children,
}) => {
	return (
		<div className={`raz-loading-parent ${show ? 'active' : ''}`}>
			{show && (
				<div
					className={`raz-loading-mask raz-bg-light raz-opacity-90 ${
						fullscreen ? 'is-fullscreen' : ''
					}`}>
					<div className="raz-loading-spinner">
						<svg className="raz-circular-loading" viewBox="25 25 50 50">
							<circle
								className={`circular__path raz-color-${color || 'primary'}`}
								cx="50"
								cy="50"
								r="20"
								fill="none"
							/>
						</svg>
						{text && <p>{text}</p>}
					</div>
				</div>
			)}
			{children}
		</div>
	);
};
