import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { ModalProps } from './Modal.types';
import { clickHandler } from './Modal.utils';
import { Button } from '../button/Button';
import { Card } from '../card/Card';

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	color,
	radius,
	transparent,
	visible,
	canExit,
	disableBackdropExit,
	style,
	title,
	fullscreen,
	header,
	footer,
	className,
	children,
	onChange,
	...props
}) => {
	const letExit = typeof canExit === 'boolean' ? canExit : true;
	const mounted = useRef(false);
	const [state, setState] = useState({ visible: visible || false });
	const beforeClose = props.beforeClose ? props.beforeClose : () => letExit;

	useEffect(() => {
		if (onChange && mounted.current) {
			onChange(state.visible);
		} else {
			mounted.current = true;
		}
	}, [state.visible]);
	useEffect(() => {
		setState({ ...state, visible: visible || false });
	}, [visible]);
	//  (() => typeof canExit == 'boolean' ? canExit : true);
	// const style = {width, minWidth, maxWidth, height, minHeight, maxHeight};
	className = className || '';
	return state.visible ? (
		<div
			tabIndex={0}
			className={`ty-modal-mask ${transparent ? 'scrollable' : ''}`}
			{...{
				onClick: disableBackdropExit
					? undefined
					: (e) => clickHandler(e)(beforeClose)(state)(setState),
			}}
		>
			<Card
				style={style}
				color={color}
				radius={radius}
				className={`ty-modal-container my-auto ${fullscreen ? 'fullscreen' : ''}
					${transparent ? 'transparent' : ''} ${className}`}
				onClick={clickHandler}
			>
				<div className="ty-flex ty-space-between">
					{header}
					{title}
					{letExit && (
						<div className="mr-auto">
							<Button
								layout="clear"
								color="dark"
								className="p-2"
								onClick={(e) => clickHandler(e)(beforeClose)(state)(setState)}
							>
								<i className="ty-icon ty-icon-close-circle-outline fs-12 fs-sm-14 fs-md-16">
									<span>close</span>
								</i>
							</Button>
						</div>
					)}
				</div>
				<div className="ty-modal-body">{children}</div>
				{footer && <div className="ty-modal-footer">{footer}</div>}
			</Card>
			{/* <div className={` px-1 px-sm-2 py-1 py-sm-2 py-md-3 ty-bg-contrast-primary
			ty-shadow my-auto border-radius-${radius||15} ${fullscreen?'fullscreen':''} ${transparent?'transparent':''} ${className}`}
				style={style}>
					
			</div> */}
		</div>
	) : (
		<></>
	);
};
