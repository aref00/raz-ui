import React, { FC, useState } from 'react';
import { InputProps } from './Input.types';
import '../../style/components/input.scss';

const Input: FC<InputProps> = ({
	value,
	children,
	label,
	width,
	height,
	clear,
	borderBottom,
	outline,
	outlineColor,
	tyClass,
	dir,
	error,
	suffix,
	type,
	disabled,
	...props
}) => {
	const InputTag: keyof JSX.IntrinsicElements = 'input';
	const [showPassword, setShowPassword] = useState(false);
	tyClass = tyClass || '';
	return (
		<div dir={dir} className={`ty-input ${tyClass}`}>
			{
				label&&
				<p className={`fs-12 fs-sm-14 ty-input-label mb-1 ${error?'ty-color-danger':''}`}>{label}<span className="ty-color-danger">{props.required?'*':''}</span></p>
			}
			<div role='none' className={`ty-input-wrapper
			${clear?'--border-clear':borderBottom?'--border-bottom':''}
			${outline?'ty-input-focus':''}
			${disabled?'disabled':''}
			${error?'ty-color-danger ty-border-color-danger': ''}`}>
				<InputTag
					aria-label={label||props.placeholder}
					role='textbox'
					dir={dir}
					className={`inline-block ty-input px-4 py-2`}
					style={{width, height}}
					type={type=='password'&&showPassword?'text':type}
					disabled={disabled}
					{...props}/>
				<div className={`suffix ${dir==='ltr'?'suffix--ltr':''}`}>
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
