export interface ConfirmProps {
	onConfirm: () => void;
	onCancel: () => void;
	visible: boolean;
	title?: string;
	description?: string;
}
