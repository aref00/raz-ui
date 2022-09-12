import React, { FunctionComponent } from 'react';
import { Button, Modal } from '../../index';
import { ConfirmProps } from './Confirm.types';

export const Confirm: FunctionComponent<ConfirmProps> = ({
	visible,
	title,
	description,
	onCancel,
	onConfirm,
}) => (
	<Modal
		color="secondary"
		className="py-2 py-sm-3"
		header={<div className="pl-2 pl-sm-3 pt-1">{title || 'Confirm'}</div>}
		visible={visible}
		style={{ width: '400px' }}
		radius={6}
		beforeClose={() => {
			onCancel();
			return true;
		}}>
		{/* title={title || 'Confirm'} */}
		<p className="raz-color-text raz-border-top raz-border-color-border my-0 px-2 px-sm-3 px-md-4 py-3 py-sm-4 mt-2">
			{description}
		</p>
		<div
			role={'alertdialog'}
			className="raz-border-top raz-border-color-border pt-3 raz-flex raz-gap-5 px-2 px-sm-3 px-md-4"
			style={{ justifyContent: 'end' }}>
			<Button
				height="38px"
				className="px-4 px-md-5"
				color="gray"
				radius={20}
				onClick={onCancel}>
				No
			</Button>
			<Button className="px-4 px-md-5" radius={20} onClick={onConfirm}>
				Yes
			</Button>
		</div>
	</Modal>
);
