import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { CardProps } from './Card.types';
import Card from './Card';

export default {
	title: 'Tayeh/Card',
	component: Card,
	argTypes: {},
} as Meta<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	radius: 10,
	tyClass: 'p-2',
	children: 'Card Content',
};

export const Padding = Template.bind({});
Padding.args = {
	tyClass: 'p-5',
	children: 'Card Content',
};