import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { AreaChartProps } from './AreaChart.types';
import { AreaChart } from './AreaChart';

export default {
	title: 'Raz/AreaChart',
	component: AreaChart,
	argTypes: {},
} as Meta<typeof AreaChart>;

const Template: Story<AreaChartProps> = (args) => <AreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: false,
	categories: ['test'],
	series: [{ data: [10] }],
};
