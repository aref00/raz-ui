import React, { FC, useState } from 'react';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
	label,
	width,
	height,
	clear,
	borderBottom,
	tyClass,
	radius,
	dir,
	error,
	suffix,
	type,
	disabled,
	tag,
	outlineColor,
	inputClass,
	passRef,
	...props
}) => {
	const InputTag: keyof JSX.IntrinsicElements = tag || 'input';
	const [showPassword, setShowPassword] = useState(false);
	tyClass = tyClass || '';
	const wrapper_class = `ty-input-wrapper ty-flex align-items-center ty-justify-center border-radius-${
		radius || 5
	} \
${disabled ? '' : `ty-hover-outline-${outlineColor || 'primary'}`} ${
	clear ? '--border-clear' : borderBottom ? '--border-bottom' : ''
} \
${disabled ? 'disabled' : ''} ${
	error ? 'ty-color-danger ty-border-color-danger' : ''
} ${inputClass || ''}`;

	return (
		<div className={`ty-input ${tyClass}`}>
			{label && (
				<p
					className={`fs-12 fs-sm-14 ty-input-label mb-1 ${
						error ? 'ty-color-danger' : ''
					}`}
				>
					{label}
					<span className="ty-color-danger">{props.required ? '*' : ''}</span>
				</p>
			)}
			<div role="none" className={wrapper_class} style={{ width, height }}>
				<InputTag
					id={props.id}
					tabIndex={0}
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					ref={(node: any) => {
						if (passRef) passRef(node);
					}}
					aria-label={label || props.placeholder}
					role="textbox"
					dir={dir}
					className={`inline-block full-width ty-input px-3 py-2 ${
						inputClass || ''
					}`}
					type={type == 'password' ? (showPassword ? 'text' : type) : ''}
					disabled={disabled}
					{...props}
				/>
				<div
					className={`ty-flex ty-justify-center items-align-center ${
						dir === 'ltr' ? 'suffix--ltr' : ''
					}`}
				>
					{suffix}
					{!suffix && type === 'password' && (
						<div
							role="button"
							className='"ty-flex align-items-center'
							onClick={() => setShowPassword(!showPassword)}
						>
							<i
								className={`ty-icon px-1 ${
									showPassword
										? 'ty-icon-eye ty-color-primary'
										: 'ty-icon-eye-slash ty-color-border'
								}`}
							/>
						</div>
					)}
				</div>
			</div>
			{error && (
				<div role="alert" className="ty-color-danger mt-2">
					{error}
				</div>
			)}
		</div>
	);
};
