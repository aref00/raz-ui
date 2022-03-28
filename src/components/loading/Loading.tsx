import React, { FC } from 'react';
import { LoadingProps } from './Loading.types';

export const Loading: FC<LoadingProps> = ({
	show,
	color,
	fullscreen,
	text,
	children,
}) => {
	return (
		<div className="ty-loading-parent">
			<div
				className={`v-loading-mask ty-bg-light ty-opacity-90 ${
					fullscreen ? 'is-fullscreen' : ''
				}`}
			>
				{show && (
					<div className="ty-loading-spinner">
						<svg className="ty-circular-loading" viewBox="25 25 50 50">
							<circle
								className={`circular__path ty-color-${color || 'primary'}`}
								cx="50"
								cy="50"
								r="20"
								fill="none"
							/>
						</svg>
						{text && <p>{text}</p>}
					</div>
				)}
			</div>
			{children}
		</div>
	);
};
