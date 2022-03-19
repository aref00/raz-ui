import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { TabProps } from './Tabs.types';
import Tabs from './Tabs';
import Button from '../button/Button';

export default {
	title: 'Tayeh/Tabs',
	component: Tabs,
	argTypes: {},
} as Meta<typeof Tabs>;

const Template: Story<TabProps> = (args) => (
	<Tabs {...args}>
		<div>Tabs Content</div>
		<Button>Button</Button>
	</Tabs>
);

export const Icon = Template.bind({});
Icon.args = {
	tabs: [{
		icon: 'eye',
		disabled: false,
	},{
		icon: 'share',
		disabled: false,
	},{
		icon: 'setting',
		disabled: false,
	}],
	onChange: (value: string) => null,
	tyClass: 'fs-20 px-4 py-3',
};