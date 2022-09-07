import React, { MouseEvent } from 'react';
import { Button } from '../button/Button';
import { Color, Tab } from '../types';
type Params = {
	defaultColor: Color;
	activeColor: Color;
	active?: string;
	class: string;
	setState: React.Dispatch<React.SetStateAction<{ active: string | undefined }>>;
	onChange: (id?: string) => void;
	tabs: Tab[];
};
type SetNewTab = {
	active?: string;
	setState: React.Dispatch<React.SetStateAction<{ active: string | undefined }>>;
	onChange: (id?: string) => void;
};
function eventHandler(e: MouseEvent) {
	e.stopPropagation();
	e.preventDefault();
	return function ({ active, setState, onChange }: SetNewTab) {
		setState({ active });
		return onChange(active);
	};
}
export function generateTabs(params: Params) {
	const passDown: SetNewTab = {
		setState: params.setState,
		onChange: params.onChange,
	};
	return params.tabs.map((tab, i) => {
		const id = tab.id || '' + i;
		const isActive = id == params.active;
		return (
			<li role="presentation" key={id} className={`${isActive ? 'fw-bolder' : ''}`}>
				<Button
					layout="clear"
					role="tab"
					disabled={tab.disabled}
					color={isActive ? params.activeColor : params.defaultColor}
					className={params.class}
					onClick={(e) => eventHandler(e)({ ...passDown, active: id })}
					aria-selected={isActive ? 'true' : 'false'}
					aria-controls={id}>
					<i className={`ty-icon ty-icon-${tab.icon}${isActive ? '' : '-outline'}`} />
					{tab.label ? ' ' + tab.label : ''}
				</Button>
			</li>
		);
	});
}

export function tabOptions(tabs: Tab[]) {
	const width = `${100 / tabs.length}%`;
	const ids = tabs.map((t, i) => t.id || '' + i);
	return function (active: string) {
		const index = ids.indexOf(active);
		// if (index==-1) return {width, right: '0'};
		return { width, right: `calc(${index} * (${width}))` };
	};
}
