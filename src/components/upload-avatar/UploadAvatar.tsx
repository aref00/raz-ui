import React, { FunctionComponent, useEffect, useState } from 'react';
import { Avatar, Button } from '../../';
import { UploadAvatarProps } from './UploadAvatar.types';

export const UploadAvatar: FunctionComponent<UploadAvatarProps> = ({ src, onChange }) => {
	const [state, setState] = useState<{ src?: string }>({});
	useEffect(() => {
		if (!src) return;
		const fr = new FileReader();
		fr.onload = (e) => {
			const fileData = e.target!.result;
			setState({ src: fileData as string });
		};
		fr.readAsDataURL(src as Blob);
	}, [src]);
	return (
		<div role={'button'} className="raz-upload-avatar">
			<input
				role={'form'}
				onChange={(e) => {
					const input = e.target;
					if (!input.files?.length) return;
					const file = input.files[0];
					onChange(file);
					// this._onNewFileIn(file);
				}}
				accept={'.png,.jpg'}></input>
			<Avatar width="100px">
				<div className={`uploadAvatar ${state.src && 'clear'}`}>
					{state.src && <img width={110} height={110} src={state.src} />}
				</div>
			</Avatar>
			<Button className="button" width="18px" layout="clear">
				<i className="ty-icon ty-icon-edit fs-16 fs-sm-22 fs-md-26 raz-color-text raz-bg-gray border-radius-8" />
			</Button>
		</div>
	);
};
