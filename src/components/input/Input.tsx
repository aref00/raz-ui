import React, { FC, useState } from 'react';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
	label,
	width,
	height,
	className,
	radius,
	dir,
	error,
	suffix,
	prefix,
	type,
	disabled,
	tag,
	inputClass,
	color,
	passRef,
	...props
}) => {
	const InputTag: keyof JSX.IntrinsicElements = tag || 'input';
	const [showPassword, setShowPassword] = useState(false);
	className = className || '';
	const wrapper_class = `raz-input-wrapper raz-flex align-items-center raz-justify-center border-radius-${
		radius || 4
	} \
	${disabled ? 'disabled' : ''} ${error ? 'raz-color-danger raz-border-color-danger' : ''} ${
		inputClass || ''
	}`;
	// ${disabled ? '' : `raz-hover-outline-${outlineColor || 'primary'}`} ${
	// 		clear ? '--border-clear' : borderBottom ? '--border-bottom' : ''
	// 	} \

	return (
		<div className={`raz-input ${className}`}>
			{label && (
				<p
					className={`fs-12 fs-sm-14 raz-input-label mb-1 ${
						error ? 'raz-color-danger' : ''
					}`}>
					{label}
					<span className="raz-color-danger">{props.required ? '*' : ''}</span>
				</p>
			)}
			<div role="none" className={wrapper_class} style={{ width, height }}>
				{prefix}
				<InputTag
					tabIndex={0}
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					ref={(node: any) => {
						if (passRef) passRef(node);
					}}
					aria-label={label || props.placeholder}
					role="textbox"
					dir={dir}
					className={`inline-block full-width raz-input px-3 py-2 raz-bg-${
						color || 'input'
					} ${inputClass || ''}`}
					type={type == 'password' ? (showPassword ? 'text' : type) : ''}
					disabled={disabled}
					{...props}
				/>
				<div
					className={`raz-flex raz-justify-center items-align-center ${
						dir === 'ltr' ? 'suffix--ltr' : ''
					}`}>
					{suffix}
					{!suffix && type === 'password' && (
						<div
							role="button"
							className='"raz-flex align-items-center'
							onClick={() => setShowPassword(!showPassword)}>
							<i
								className={`ty-icon px-1 ${
									showPassword
										? 'ty-icon-eye raz-color-primary'
										: 'ty-icon-eye-slash raz-color-border'
								}`}
							/>
						</div>
					)}
				</div>
			</div>
			<div role="alert" className="raz-color-danger fs-12 mt-1" style={{ height: '12px' }}>
				{error}
			</div>
			{/* {error && (
				
			)} */}
		</div>
	);
};
