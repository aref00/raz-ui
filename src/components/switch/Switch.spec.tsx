import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Switch } from './Switch';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Raz Switch', () => {
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

	test('Check Switch Defaults', () => {
		render(
			<Switch
				value={true}
				onChange={() => {
					return;
				}}
			/>
		);
		const node = screen.getByRole('checkbox');
		expect(node).toBeChecked();
	});
});
