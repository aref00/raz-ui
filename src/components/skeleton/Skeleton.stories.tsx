import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { SkeletonProps } from './Skeleton.types';
import { Skeleton } from './Skeleton';

export default {
	title: 'Tayeh/Skeleton',
	component: Skeleton,
	argTypes: {},
} as Meta<typeof Skeleton>;

const Template: Story<SkeletonProps> = (args) => (
	<div>
		<Skeleton {...args} />
		<Skeleton {...args} />
		<Skeleton {...args} />
		<div>
			<Skeleton {...args} />
		</div>
	</div>
);

const DarkTemplate: Story<SkeletonProps> = (args) => (
	<div className="dark-theme p-5">
		<div className="full-width full-height ty-bg-contrast-primary">
			<Skeleton {...args} />
			<Skeleton {...args} />
			<Skeleton {...args} />
			<div>
				<Skeleton {...args} />
			</div>
		</div>
	</div>
);

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	radius: 5,
	width: '100px',
	height: '50px',
	className: 'm-2 p-5',
	children: 'Skeleton Content',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	width: '100%',
	className: 'm-2 py-2',
};

export const DarkTheme = DarkTemplate.bind({});
DarkTheme.args = {
	width: '500px',
	height: '80px',
	className: 'm-2 py-2',
};
