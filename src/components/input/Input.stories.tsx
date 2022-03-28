import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { InputProps } from './Input.types';
import { Input } from './Input';

export default {
	title: 'Tayeh/Input',
	component: Input,
	argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;
const DarkTemplate: Story<InputProps> = (args) => (
	<div className="dark-theme">
		<div
			className="ty-bg-light p-4"
			style={{ width: '500px', height: '500px' }}
		>
			<div className="mb-4">
				<Input {...args} />
			</div>
			<Input {...args} tag="textarea" />
		</div>
	</div>
);

export const Label = Template.bind({});
Label.args = {
	label: 'Label',
	placeholder: 'Input Placeholder',
};

export const Suffix = Template.bind({});
Suffix.args = {
	label: 'Label',
	suffix: <i className="px-2">x</i>,
	placeholder: 'Input Placeholder',
};

export const Background = Template.bind({});
Background.args = {
	label: 'Label',
	inputClass: 'ty-bg-light',
	placeholder: 'Input Placeholder',
};

export const OutlineColor = Template.bind({});
OutlineColor.args = {
	label: 'Label',
	outlineColor: 'dark',
	inputClass: 'ty-bg-light',
	placeholder: 'Input Placeholder',
};

export const FontSize = Template.bind({});
FontSize.args = {
	label: 'Label',
	tyClass: 'fs-16 fw-600',
	inputClass: 'fs-18 fw-800',
	suffix: <i className="fs-8 fw-100 pl-3">search</i>,
	placeholder: 'Input Placeholder',
};

export const Clear = Template.bind({});
Clear.args = {
	clear: true,
	inputClass: 'fs-18 fw-800 ty-bg-light',
	suffix: <i className="fs-8 fw-100 pl-3">search</i>,
	placeholder: 'Input Placeholder',
};

export const BorderBottom = Template.bind({});
BorderBottom.args = {
	borderBottom: true,
	placeholder: 'Input Placeholder',
};

export const Textarea = Template.bind({});
Textarea.args = {
	tag: 'textarea',
	radius: 15,
	clear: true,
	inputClass: 'ty-bg-light',
	placeholder: 'Input Placeholder',
};

export const Password = Template.bind({});
Password.args = {
	radius: 15,
	type: 'password',
	clear: true,
	inputClass: 'ty-bg-light',
	placeholder: 'Input Placeholder',
};

export const DarkTheme = DarkTemplate.bind({});
DarkTheme.args = {
	label: 'Label',
	placeholder: 'Input Placeholder',
};
