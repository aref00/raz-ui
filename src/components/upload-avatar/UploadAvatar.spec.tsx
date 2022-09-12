import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../style/index.scss';
import { UploadAvatar } from './UploadAvatar';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Raz UploadAvatar', () => {
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

	test('Check UploadAvatar Defaults', () => {
		render(
			<UploadAvatar
				onChange={() => {
					return;
				}}
			/>
		);
		const node = screen.getAllByRole('button');
		expect(node[0].className).toContain('raz-upload-avatar');
	});
});
