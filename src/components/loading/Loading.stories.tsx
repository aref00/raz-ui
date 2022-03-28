import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { LoadingProps } from './Loading.types';
import { Loading } from './Loading';
import { Button } from '../button/Button';

export default {
	title: 'Tayeh/Loading',
	component: Loading,
	argTypes: {},
} as Meta<typeof Loading>;

const Template: Story<LoadingProps> = (args) => (
	<div>
		<Loading {...args}>
			<div>Loading Content</div>
			<Button>Button</Button>
		</Loading>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	show: true,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
	show: true,
	fullscreen: true,
};
