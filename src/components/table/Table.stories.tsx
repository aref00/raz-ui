import React from 'react';
import { Story, Meta } from '@storybook/react';

import '../../style/index.scss';
import { Button } from '../button/Button';
import { TableProps } from './Table.types';
import { Table } from './Table';

export default {
	title: 'Tayeh/Table',
	component: Table,
	argTypes: {},
} as Meta<typeof Table>;

const Template: Story<TableProps> = (args) => (
	<Table {...args}>
		<div>Table Content</div>
		<Button>Button</Button>
	</Table>
);
const DarkTemplate: Story<TableProps> = (args) => (
	<div className="dark-theme">
		<div className="full-width raz-bg-light p-4" style={{ width: '500px', height: '500px' }}>
			<Table {...args}>
				<div className="raz-color-text">Table Content</div>
				<Button>Button</Button>
			</Table>
		</div>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	data: {
		headers: [{ title: 'test' }],
		rows: [{ _id: '4', actions: [], cols: [{ value: '1' }], selected: false }],
	},
	onSelect: () => {
		return;
	},
	onSelectAll: () => {
		return;
	},
};
