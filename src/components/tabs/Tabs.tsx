import React, { FC, useState } from 'react';
import { TabProps } from './Tabs.types';
import '../../style/components/tabs.scss';
import { generateTabs } from './Tabs.utils';

const Tab: FC<TabProps> = ({
	defaultActive,
	tabs,
	color,
	tyClass,
	tyTabClass,
	onChange
}) => {
	const [state, setState] = useState({
		active: defaultActive
	});
	return (
		<div className='ty-tabs'>
			<ul role='tablist' className={`ty-tabs-list ty-flex ty-space-between ofx-auto ofy-hidden ${tyClass||''}`}>
				{generateTabs({
					active: state.active,
					color: color || 'primary',
					class: tyTabClass||'',
					onChange,
					setState,
					tabs
				})}
			</ul>
		</div>
	);
};

export default Tab;
