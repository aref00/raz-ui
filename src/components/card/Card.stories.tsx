import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { CardProps } from './Card.types';
import { Card } from './Card';
import { Button } from '../button/Button';

export default {
	title: 'Raz/Card',
	component: Card,
	argTypes: {},
} as Meta<typeof Card>;

const Template: Story<CardProps> = (args) => (
	<Card {...args}>
		<div>Card Content</div>
		<Button>Button</Button>
	</Card>
);
const DarkTemplate: Story<CardProps> = (args) => (
	<div className="dark-theme">
		<div className="full-width raz-bg-light p-4" style={{ width: '500px', height: '500px' }}>
			<Card {...args}>
				<div className="raz-color-text">Card Content</div>
				<Button>Button</Button>
			</Card>
		</div>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	className: 'p-4',
};

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	radius: 10,
	className: 'p-2',
	children: 'Card Content',
};

export const Padding = Template.bind({});
Padding.args = {
	className: 'p-5',
	children: 'Card Content',
};

export const DarkTheme = DarkTemplate.bind({});
DarkTheme.args = {
	className: 'p-5',
	children: 'Card Content',
};
