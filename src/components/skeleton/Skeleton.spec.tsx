import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Skeleton } from './Skeleton';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Tayeh Skeleton', () => {
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

	test('Check Skeleton Defaults', () => {
		render(<Skeleton>Skeleton Content</Skeleton>);
		const node = screen.getByText('Skeleton Content');
		expect(node).toHaveClass('raz-skeleton');
	});

	test('Check Skeleton Style', () => {
		render(
			<Skeleton width="100%" height="110%">
				Skeleton Content
			</Skeleton>
		);
		const node = screen.getByText('Skeleton Content');
		expect(node).toHaveStyle({ width: '100%', height: '110%' });
	});
});
