import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { NumberInputProps } from './NumberInput.types';
import { NumberInput } from './NumberInput';

export default {
	title: 'Tayeh/NumberInput',
	component: NumberInput,
	argTypes: {},
} as Meta<typeof NumberInput>;

const Template: Story<NumberInputProps> = (args) => {
	const [num, setNum] = useState(10);
	return (
		<NumberInput
			value={num}
			changeValue={(n) => setNum(Number(n))}
			onChange={(e) => setNum(Number(e.target.value))}
			{...args}
		/>
	);
};

export const Values = Template.bind({});
Values.args = {
	label: 'Label',
	min: 1,
	max: 11,
	step: 2,
};

export const Undefined = Template.bind({});
Undefined.args = {
	label: 'Label',
	min: 1,
	max: 11,
	step: 2,
};

export const Disable = Template.bind({});
Disable.args = {
	disabled: true,
	label: 'Only Readable',
	placeholder: 'Unchangable',
};

export const Error = Template.bind({});
Error.args = {
	error: 'Something is wrong',
	label: 'Error check',
	placeholder: 'typing...',
};
