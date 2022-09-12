import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { UploadAvatarProps } from './UploadAvatar.types';
import { UploadAvatar } from './UploadAvatar';

export default {
	title: 'Raz/UploadAvatar',
	component: UploadAvatar,
	argTypes: {},
} as Meta<typeof UploadAvatar>;

const Template: Story<UploadAvatarProps> = (args) => <UploadAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: true,
	label: 'Label',
	onChange: () => {
		return;
	},
};
