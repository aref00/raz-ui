import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { AvatarProps } from './Avatar.types';
import Avatar from './Avatar';

export default {
	title: 'Tayeh/Avatar',
	component: Avatar,
	argTypes: {},
} as Meta<typeof Avatar>;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Img = Template.bind({});
Img.args = {
	children: (
		<img src="https://previews.123rf.com/images/deagreez/deagreez1901/deagreez190101764/116219075-close-up-foto-portret-van-vrij-aantrekkelijke-positieve-vrolijke-charmante-grimassen-plezier-tijd-gr.jpg" />
	),
};

export const Text = Template.bind({});
Text.args = {
	tyClass: 'fs-8',
	children: 'Avatar',
};
