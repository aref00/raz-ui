import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { RatingProps } from './Rating.types';
import { Rating } from './Rating';

export default {
	title: 'Tayeh/Rating',
	component: Rating,
	argTypes: {},
} as Meta<typeof Rating>;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;
const DarkTemplate: Story<RatingProps> = (args) => (
	<div className="dark-theme">
		<div className="ty-bg-light" style={{ width: '100%', height: '500px' }}>
			<Rating {...args} />
		</div>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	className: 'p-2',
};

export const Value = Template.bind({});
Value.args = {
	value: 3.5,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	value: 2.5,
};

export const Readonly = Template.bind({});
Readonly.args = {
	readonly: true,
	value: 2.5,
};

export const Color = Template.bind({});
Color.args = {
	activeColor: 'primary',
	defaultColor: 'light',
	value: 3.5,
};

export const DarkTheme = DarkTemplate.bind({});
DarkTheme.args = {
	value: 2.5,
};
