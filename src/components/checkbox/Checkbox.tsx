import React, { FunctionComponent } from 'react';
import { CheckboxProps } from './Checkbox.types';
export const Checkbox: FunctionComponent<CheckboxProps> = ({ value, width, onChange }) => (
	<label className={`raz-checkbox ${!value && 'unchecked'}`}>
		<span className="fw-400 fs-12 fs-sm-14 " />

		<input type="checkbox" onChange={() => onChange(!value)} checked={value} />

		<div style={{ width: width || '24px', height: width || '24px' }}>
			<i className="ty-icon ty-icon-tick-circle fs-22" />
		</div>
	</label>
);
