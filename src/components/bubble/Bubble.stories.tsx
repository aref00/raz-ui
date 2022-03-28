import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { BubbleProps } from './Bubble.types';
import { Bubble } from './Bubble';

export default {
	title: 'Tayeh/Bubble',
	component: Bubble,
	argTypes: {},
} as Meta<typeof Bubble>;

const Template: Story<BubbleProps> = (args) => <Bubble {...args} />;

export const Color = Template.bind({});
Color.args = {
	children: 'Tayeh Bubble',
	color: 'success',
	tyClass: 'p-2',
};

export const Reply = Template.bind({});
Reply.args = {
	replyTo: <div className="p-2">Hello sir</div>,
	children: <div className="p-2">Hello to you</div>,
	tyClass: 'half-width',
};

export const Side = Template.bind({});
Side.args = {
	replyTo: <div className="p-2">Hello sir</div>,
	children: <div className="p-2">Hello to you</div>,
	footer: <div className="fs-8 p-1">footer</div>,
	isMe: true,
	tyClass: 'half-width',
};
