import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import '../../style/components/components.scss';
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
	ok: true,
	show: true,
};

export const NotShowing = Template.bind({});
NotShowing.args = {
	show: false,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
	show: true,
	fullscreen: true,
};
