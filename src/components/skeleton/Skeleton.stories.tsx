import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { SkeletonProps } from './Skeleton.types';
import Skeleton from './Skeleton';

export default {
	title: 'Tayeh/Skeleton',
	component: Skeleton,
	argTypes: {},
} as Meta<typeof Skeleton>;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	radius: 10,
	tyClass: 'p-2',
	children: 'Skeleton Content',
};