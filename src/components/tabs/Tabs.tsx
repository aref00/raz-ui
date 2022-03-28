import React, { FC, useState } from 'react';
import { TabProps } from './Tabs.types';
import '../../style/components/tabs.module.scss';
import { generateTabs, tabOptions } from './Tabs.utils';

const Tab: FC<TabProps> = ({
	active,
	tabs,
	borderWidth,
	borderColor,
	defaultColor,
	activeColor,
	tyClass,
	onChange
}) => {
	const [state, setState] = useState({
		active
	});
	const getStyle = tabOptions(tabs);
	return (
		<div className='ty-tabs' dir='rtl'>
			<ul role='tablist' className='ty-tabs-list ty-flex ty-space-around ofx-auto ofy-hidden'>
				{generateTabs({
					active: state.active,
					defaultColor: defaultColor || 'text-primary',
					activeColor: activeColor || 'text-primary',
					class: tyClass||'',
					onChange,
					setState,
					tabs
				})}
			</ul>
			<div className='ty-tab-border ty-relative mt-1'>
				{
					state.active&&<div style={getStyle(state.active)} className='full-height ty-flex ty-justify-center'>
						<div style={{width: borderWidth||'40px'}} className={`border-radius-5 ty-bg-${borderColor||'primary'}`}/>
					</div>
				}
			</div>
		</div>
	);
};

export default Tab;
