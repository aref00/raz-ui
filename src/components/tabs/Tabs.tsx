import React, { FC, useState } from 'react';
import { TabProps } from './Tabs.types';
import { generateTabs, tabOptions } from './Tabs.utils';

export const Tabs: FC<TabProps> = ({
	active,
	tabs,
	borderWidth,
	borderColor,
	defaultColor,
	activeColor,
	className,
	onChange,
}) => {
	const [state, setState] = useState({
		active,
	});
	const getStyle = tabOptions(tabs);
	return (
		<div className="ty-tabs" dir="rtl">
			<ul
				role="tablist"
				className="ty-tabs-list ty-flex ty-space-around ofx-auto ofy-hidden"
			>
				{generateTabs({
					active: state.active,
					defaultColor: defaultColor || 'text-primary',
					activeColor: activeColor || 'text-primary',
					class: className || '',
					onChange,
					setState,
					tabs,
				})}
			</ul>
			<div className="ty-tab-border ty-relative mt-1">
				{state.active && (
					<div
						style={getStyle(state.active)}
						className="full-height ty-flex ty-justify-center"
					>
						<div
							style={{ width: borderWidth || '40px' }}
							className={`border-radius-5 ty-bg-${borderColor || 'primary'}`}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
