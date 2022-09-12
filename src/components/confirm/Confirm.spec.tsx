import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Confirm } from './Confirm';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Raz Confirm', () => {
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

	test('Check Confirm Defaults', () => {
		render(
			<Confirm
				visible={true}
				onCancel={() => {
					return;
				}}
				onConfirm={() => {
					return;
				}}
			/>
		);
		const node = screen.getByRole('alertdialog');
		expect(node?.className).toContain('raz-border-top');
	});
});
