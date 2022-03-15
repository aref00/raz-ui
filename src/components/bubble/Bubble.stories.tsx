import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { BubbleProps } from './Bubble.types';
import Bubble from './Bubble';

export default {
	title: 'Tayeh/Bubble',
	component: Bubble,
	argTypes: {},
} as Meta<typeof Bubble>;

const Template: Story<BubbleProps> = (args) => <Bubble {...args} />;

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	radius: 10,
	tyClass: 'p-2',
	children: 'Bubble Content',
};