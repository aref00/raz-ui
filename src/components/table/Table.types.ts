import { ReactNode } from 'react';

export interface TableProps {
	data: TableData;
	onSelect: (i: number) => void;
	onSelectAll: (select: boolean) => void;
}

export interface TableData {
	headers: {
		title: string;
		filterBy?: { onChange: () => void; options: { label: string; value: string }[] };
		search?: { onChange: (e: string) => void };
	}[];
	rows: {
		_id: string;
		actions: any;
		cols: {
			value: string | number | ReactNode;
		}[];
		selected: boolean;
	}[];
}
