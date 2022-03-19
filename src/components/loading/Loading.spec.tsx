import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import Loading from './Loading';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Tayeh Loading', () => {
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

	test('Check Loading Defaults', () => {
		render(<div style={{width: '100px', height: '100px'}}><Loading show>Loading Content</Loading></div>);
		const node = screen.getByText('Loading Content');
		expect(node).toBeVisible();
	});
});
