import React from 'react';
import { Story } from '@storybook/react';

import '../../style/index.scss';

export default {
	title: 'Tayeh/Theme',
	argTypes: {},
};

const Template: Story = (args) => (
	<div {...args}>
		<div className="raz-color-light">Content</div>
		<div
			className="raz-bg-contrast-primary"
			style={{ width: '100px', height: '100px' }}
		>
			with bg
		</div>
		<div className="raz-bg-light" style={{ width: '100px', height: '100px' }}>
			with bg
		</div>
	</div>
);

export const Light = Template.bind({});
Light.args = {
	dir: 'rtl',
	className: 'light-theme',
};

export const Dark = Template.bind({});
Dark.args = {
	dir: 'rtl',
	className: 'dark-theme as',
};
