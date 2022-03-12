import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';
const StyledButton = styled.button<ButtonProps>`
	line-height: 1;
	cursor: pointer;
	font-weight: bold;
	border-radius: 5px;
	display: inline-block;
	padding: ${(props) =>
		props.size === 'small'
			? '7px 25px 8px'
			: props.size === 'medium'
			? '9px 30px 11px'
			: '14px 30px 16px'};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	${(props) => (props.height ? 'height: ' + props.height : '')}
	${(props) => (props.width ? 'width: ' + props.width : '')}
	&:hover {
		background-color: ${(props) => (props.primary ? '#55bd90' : '#6bedb5')};
	}
	&:active {
		border: solid 2px #1b116e;
		padding: ${(props) =>
			props.size === 'small'
				? '5px 23px 6px'
				: props.size === 'medium'
				? '7px 28px 9px'
				: '12px 28px 14px'};
	}
`;

const Button: FC<ButtonProps> = ({
	size,
	primary,
	disabled,
	children,
	onClick,
	...props
}) => {
	return (
		<StyledButton
			className="ty-button"
			type="button"
			onClick={onClick}
			primary={primary}
			disabled={disabled}
			size={size}
			{...props}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
