import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { AvatarProps } from './Avatar.types';
import { Avatar } from './Avatar';

export default {
	title: 'Tayeh/Avatar',
	component: Avatar,
	argTypes: {},
} as Meta<typeof Avatar>;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Img = Template.bind({});
Img.args = {
	children: (
		<img src="https://static.ty-sb1.tayeh.ir/public-images/c67088f8-946f-48d8-935e-e0d3538107c4.jpg" />
	),
};

export const Text = Template.bind({});
Text.args = {
	className: 'fs-8',
	children: 'Avatar',
};
