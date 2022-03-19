import React, { FC } from 'react';
import { LoadingProps } from './Loading.types';
import '../../style/components/loading.scss';

const Loading: FC<LoadingProps> = ({
	show,
	color,
	fullscreen,
	children,
}) => {
	return (
		<div className={`v-loading-mask ty-bg-light ty-opacity-90 ${fullscreen?'is-fullscreen':''}`}>
			{
				show&&<div className='ty-loading-spinner'>
					<svg className="ty-circular-loading" viewBox ="25 25 50 50">
						<circle
							className={`circular__path ty-icon-${color||'primary'}`}
							cx ="50"
							cy ="50"
							r ="20"
							fill ="none"
						/>
					</svg>
					{children}
				</div>
			}
		</div>
	);
};

export default Loading;
