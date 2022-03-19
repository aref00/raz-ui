import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { LoadingProps } from './Loading.types';
import Loading from './Loading';
import Button from '../button/Button';

export default {
	title: 'Tayeh/Loading',
	component: Loading,
	argTypes: {},
} as Meta<typeof Loading>;

const Template: Story<LoadingProps> = (args) => (
	<div>
		<div>Loading Content</div>
		<Button>Button</Button>
		<Loading {...args} show/>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	tyClass: 'p-4',
};
