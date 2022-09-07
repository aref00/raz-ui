import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { Avatar } from './Avatar';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Tayeh Avatar', () => {
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

	test('Check Avatar Defaults', () => {
		render(<Avatar title="test">Avatar Content</Avatar>);
		const node = screen.getByTitle('test');
		expect(node).toHaveStyle({ width: '45px' });
	});

	test('Check Avatar Width/Height', () => {
		render(
			<Avatar title="test" width="100px" maxWidth="100%">
				Avatar Content
			</Avatar>
		);
		const node = screen.getByTitle('test');
		expect(node).toHaveStyle({ width: '100px', maxWidth: '100%' });
	});
});
