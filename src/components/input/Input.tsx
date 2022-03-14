import React, { FC, useState } from 'react';
import { InputProps } from './Input.types';
import '../../style/components/input.scss';

const Input: FC<InputProps> = ({
	children,
	label,
	width,
	height,
	clear,
	borderBottom,
	outlineColor,
	tyClass,
	radius,
	dir,
	error,
	suffix,
	type,
	disabled,
	tag,
	inputClass,
	passRef,
	...props
}) => {
	const InputTag: keyof JSX.IntrinsicElements = tag || 'input';
	const [showPassword, setShowPassword] = useState(false);
	tyClass = tyClass || '';
	dir = dir || 'rtl';
	let wrapper_class = `ty-input-wrapper ty-flex align-items-center ty-justify-center border-radius-${radius||5} \
${disabled?'':'ty-hover-outline-primary'} ${clear?'--border-clear':borderBottom?'--border-bottom':''} \
${disabled?'disabled':''} ${error?'ty-color-danger ty-border-color-danger':''} ${inputClass||''}`;

	return (
		<div dir={dir} className={`ty-input ${tyClass}`}>
			{
				label&&
				<p className={`fs-12 fs-sm-14 ty-input-label mb-1 ${error?'ty-color-danger':''}`}>{label}<span className="ty-color-danger">{props.required?'*':''}</span></p>
			}
			<div role='none' className={wrapper_class}>
				<InputTag
					ref={(node: any) => {if(passRef) passRef(node)}}
					aria-label={label||props.placeholder}
					role='textbox'
					dir={dir}
					className={`inline-block ty-input px-3 py-2 ${inputClass||''}`}
					style={{width, height}}
					type={type=='password'?showPassword?'text':type:''}
					disabled={disabled}
					{...props}
					/>
				<div className={`ty-flex ty-justify-center items-align-center ${dir==='ltr'?'suffix--ltr':''}`}>
					{
						suffix
					}
					{
						!suffix&&type==='password'&&
						<div role='button' className='"ty-flex align-items-center' onClick={() => setShowPassword(!showPassword)}>
            			    <i className={`ty-icon px-1 ${showPassword?'ty-icon-visibility ty-color-primary':'ty-icon-eye-close ty-color-border'}`}/>
            			</div>
					}
				</div>
			</div>
			{
				error&&
				<div role='alert' className='ty-color-danger mt-2'>{error}</div>
			}
		</div>
	);
};

export default Input;
