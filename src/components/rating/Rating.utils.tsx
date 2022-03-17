import Button from "../button/Button"
import React from 'react';
import { Color } from "../types";

type Star = {
	disabled?: boolean;
	value: number;
	color: Color;
	opacity: number;
	onChange: (value: number) => void
}

type GeneratorConfig = {
	disabled?: boolean;
	max: number;
	defaultColor: Color;
	activeColor: Color;
	onChange: (value: number) => void
}

function generateStar (star: Star) {
	return (
		<Button onClick={(e) => {star.onChange(star.value)}} disabled={star.disabled} key={star.value} layout='clear'>
			<i className={`ty-icon ty-icon-star-outline ty-color-${star.color} ty-opacity-${star.opacity}`}>
				<span className='fs-0'>{star.value}</span>
			</i>
		</Button>
	);
}

export function generateStars (config: GeneratorConfig) {
	const {
		disabled,
		max,
		activeColor,
		defaultColor,
		onChange
	} = config;
	const rows: JSX.Element[] = [];
	return function (value: number) {
		for (let i = 0; i < max; i++) {
			const last = i;
			const current = i + 1;
			const active = value > last;
			const semiActive = active && value < current;
			rows.push(generateStar({
				disabled,
				color: active ? activeColor : defaultColor,
				opacity: semiActive ? 70 : 100,
				value: current,
				onChange
			}))
		}
		return rows;
	}
}