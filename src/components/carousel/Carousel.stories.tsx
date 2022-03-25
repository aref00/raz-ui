import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { CarouselProps } from './Carousel.types';
import Carousel from './Carousel';

export default {
	title: 'Tayeh/Carousel',
	component: Carousel,
	argTypes: {},
} as Meta<typeof Carousel>;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;
const ChildComp: React.FC = () => <h2>This is a child component</h2>;

export const Slider = Template.bind({});
Slider.args = {
	data: [{}, {}],
	SlideContent: ChildComp,
	circles: true,
	arrows: true,
	interval: true,
	intervalTime: 3500,
};

export const MiniSlider = Template.bind({});
MiniSlider.args = {
	data: [{}, {}, {}, {}],
	SlideContent: ChildComp,
	arrows: true,
	interval: true,
	intervalTime: 3500,
	slices: 2,
};
