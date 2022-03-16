import React, { FC, useEffect, useRef, useState } from 'react';
import { ModalProps } from './Modal.types';
import '../../style/components/modal.scss';
import { clickHandler } from './Modal.utils';
import Button from '../button/Button';
import Card from '../card/Card';

const Modal: FC<ModalProps> = ({
	color,
	radius,
	transparent,
	visible,
	canExit,
	// closeOnBackdropClick,
	// width,
	// minWidth,
	// maxWidth,
	// height,
	// minHeight,
	// maxHeight,
	title,
	fullscreen,
	header,
	footer,
	tyClass,
	children,
	onChange,
	...props
}) => {
	const mounted = useRef(false);
	const [state, setState] = useState({visible: visible||false});
	const beforeClose = props.beforeClose ? props.beforeClose : () => true;

	useEffect(() => {
		if (onChange &&  mounted.current) {
			onChange(state.visible)
		  } else {
			mounted.current = true;
		  }
	}, [state.visible])
	//  (() => typeof canExit == 'boolean' ? canExit : true);
	// const style = {width, minWidth, maxWidth, height, minHeight, maxHeight};
	tyClass = tyClass || '';
	return state.visible?
	(
		<div tabIndex={0} className={`ty-modal-mask ${state.visible?'':'ty-destroy'} ty-bg-${color||'dark'} ${transparent?'scrollable':''}`}
		onClick={(e) => clickHandler(e)(beforeClose)(state)(setState)}>
				<Card radius={radius} color={color} tyClass={`ty-modal-container my-auto ${fullscreen?'fullscreen':''}
					${transparent?'transparent':''} ${tyClass}`} onClick={clickHandler}>
					<div className="ty-flex ty-space-between">
  	    	  		{header}
					{title}
					<div className='mr-auto'><Button color='dark'><i className='ty-icon ty-icon-close'
						onClick={(e) => clickHandler(e)(beforeClose)(state)(setState)}/>close</Button></div>
        			</div>
					<div className='ty-modal-body'>
        			  {children}
        			</div>
					{
						footer&&
						<div className="ty-modal-footer">
							{footer}
						</div>
					}
				</Card>
			{/* <div className={` px-1 px-sm-2 py-1 py-sm-2 py-md-3 ty-bg-contrast-primary
			ty-shadow my-auto border-radius-${radius||15} ${fullscreen?'fullscreen':''} ${transparent?'transparent':''} ${tyClass}`}
				style={style}>
					
			</div> */}
		</div>
	): <></>;
};

export default Modal;
