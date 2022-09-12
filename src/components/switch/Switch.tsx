import React, { FunctionComponent } from 'react';
import { SwitchProps } from './Switch.types';

export const Switch: FunctionComponent<SwitchProps> = ({ value, label, width, onChange }) => (
	<label className={`raz-switch ${!value && 'unchecked'}`}>
		<span className="fw-400 fs-12 fs-sm-14 ">
			<span>{label}</span>
			{/* <span v-if={!label && value} v-text="textEnabled"></span>
			<span v-if={!label && !value} v-text="textDisabled"></span> */}
		</span>

		<input
			type="checkbox"
			role={'checkbox'}
			onChange={() => onChange(!value)}
			checked={value}
		/>

		<div style={{ width: width || '42px' }}></div>
	</label>
);
