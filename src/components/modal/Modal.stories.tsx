import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { ModalProps } from './Modal.types';
import Modal from './Modal';

export default {
	title: 'Tayeh/Modal',
	component: Modal,
	argTypes: {},
} as Meta<typeof Modal>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Color = Template.bind({});
Color.args = {
	color: 'primary',
	radius: 10,
	tyClass: 'p-2',
	children: 'Modal Content',
};

export const Padding = Template.bind({});
Padding.args = {
	tyClass: 'p-5',
	children: 'Modal Content',
};