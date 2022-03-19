import React, { MouseEvent } from 'react';
import Button from '../button/Button';
import { Color, Tab } from '../types';
type Params = {
	color: Color;
	active?: string;
	class: string;
	setState: React.Dispatch<React.SetStateAction<{ active: string | undefined; }>>;
	onChange: (id?: string) => void;
	tabs: Tab[];
}
type SetNewTab = {
	active?: string, setState: React.Dispatch<React.SetStateAction<{ active: string | undefined; }>>,
	onChange: (id?: string) => void
}
function eventHandler (e: MouseEvent) {
	e.stopPropagation();
	e.preventDefault();
	return function setNewTab ({active, setState, onChange}: SetNewTab) {
		setState({active});
		return onChange(active);
	};
}
export function generateTabs (params: Params) {
	const passDown: SetNewTab = {active: params.active, setState: params.setState, onChange: params.onChange};
	const activeBorderClass = `ty-bg-${params.color}`;
	return params.tabs.map((tab, i) => {
		const id = tab.id || ''+i;
		const isActive = id == params.active;
		return (
			<li role='presentation' key={id} className={`${isActive?'fw-bolder':''} ${tab.disabled?'fw-disabled':''} ${params.class}`}>
				<Button layout='clear' role='tab' onClick={(e) => eventHandler(e)({...passDown, active: id})} aria-selected={isActive?'true':'false'} aria-controls={id}>
					<i className={`ty-icon ty-icon-${tab.icon}`}/>
					{
						tab.label?' '+tab.label: ''
					}
				</Button>
				<div style={{height: '4px', width: '100%'}} className={`ty-tab-border mt-1 ${isActive?activeBorderClass:''} border-radius-5`}></div>
			</li>
		);
	});
}