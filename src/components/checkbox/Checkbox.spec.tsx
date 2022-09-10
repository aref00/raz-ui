import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Checkbox } from './Checkbox';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Raz Checkbox', () => {
	let container: HTMLDivElement;
	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(container);
		container.remove();
	});

	test('Check Checkbox Defaults', () => {
		render(
			<Checkbox
				onChange={() => {
					return;
				}}
				value={true}
			/>
		);
		const node = screen.getByRole('checkbox');
		expect(node?.nodeValue).toBeFalsy();
	});
});
