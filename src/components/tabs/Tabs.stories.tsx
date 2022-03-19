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
	tyClass: 'fs-32 px-4 py-2',
};

export const Color = Template.bind({});
Color.args = {
	// active: '0',
	defaultColor: 'success',
	activeColor: 'danger',
	borderColor: 'warning',
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
	tyClass: 'fs-32 px-4 py-2',
};

export const Label = Template.bind({});
Label.args = {
	// active: '0',
	defaultColor: 'success',
	activeColor: 'danger',
	borderColor: 'warning',
	tabs: [{
		icon: 'eye',
		label: 'Eye',
		disabled: false,
	},{
		icon: 'share',
		label: 'Share',
		disabled: false,
	},{
		icon: 'setting',
		label: 'Setting',
		disabled: false,
	}],
	onChange: (value: string) => null,
	tyClass: 'fs-32 px-4 py-2',
};

export const Border = Template.bind({});
Border.args = {
	active: '0',
	borderColor: 'warning',
	borderWidth: '100%',
	tabs: [{
		icon: 'eye',
		label: 'Eye',
		disabled: false,
	},{
		icon: 'share',
		label: 'Share',
		disabled: false,
	},{
		icon: 'setting',
		label: 'Setting',
		disabled: false,
	},{
		icon: 'cart',
		label: 'Cart',
		disabled: false,
	}],
	onChange: (value: string) => null,
	tyClass: 'fs-20 px-4 py-2',
};

export const WithManyTabs = Template.bind({});
WithManyTabs.args = {
	active: '0',
	borderColor: 'warning',
	borderWidth: '100%',
	tabs: [{
		icon: 'eye',
		disabled: false,
	},{
		icon: 'share',
		disabled: false,
	},{
		icon: 'setting',
		disabled: false,
	},{
		icon: 'setting',
		disabled: false,
	},{
		icon: 'eye',
		disabled: false,
	},{
		icon: 'share',
		disabled: false,
	},{
		icon: 'truck',
		disabled: false,
	},{
		icon: 'truck-fast',
		disabled: false,
	}],
	onChange: (value: string) => null,
	tyClass: 'fs-20 px-4 py-2',
};

export const disabled = Template.bind({});
disabled.args = {
	active: '1',
	borderColor: 'warning',
	borderWidth: '100%',
	tabs: [{
		icon: 'eye',
		disabled: true,
	},{
		icon: 'share',
		disabled: false,
	},{
		icon: 'setting',
		disabled: false,
	},{
		icon: 'setting',
		disabled: false,
	},{
		icon: 'eye',
	}],
	onChange: (value: string) => null,
	tyClass: 'fs-20 px-4 py-2',
};