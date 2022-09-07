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
		<div className="raz-tabs" dir="rtl">
			<ul
				role="tablist"
				className="raz-tabs-list raz-flex raz-space-around ofx-auto ofy-hidden">
				{generateTabs({
					active: state.active,
					defaultColor: defaultColor || 'text',
					activeColor: activeColor || 'text',
					class: className || '',
					onChange,
					setState,
					tabs,
				})}
			</ul>
			<div className="raz-tab-border raz-relative mt-1">
				{state.active && (
					<div
						style={getStyle(state.active)}
						className="full-height raz-flex raz-justify-center">
						<div
							style={{ width: borderWidth || '40px' }}
							className={`border-radius-5 raz-bg-${borderColor || 'primary'}`}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
