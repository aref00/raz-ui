import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import '../../style/index.scss';
import Carousel from './Carousel';
import { unmountComponentAtNode } from 'react-dom';

describe('Running Test for Tayeh Carousel', () => {
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

	test('Check NumberInput plusHandle', async () => {
        const ChildComp: React.FC = () => <h2>This is a child component</h2>
		render(
			<Carousel
				data= {[{}, {}]}
                SlideContent = {ChildComp}
                circles
                arrows
                interval
                intervalTime={3500}
			/>,
		);
	});
});
