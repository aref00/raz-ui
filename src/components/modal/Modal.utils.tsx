import { MouseEvent } from "react";

type State = {
	visible: boolean;
}

export function clickHandler (event: MouseEvent) {
	event.stopPropagation();
	event.preventDefault();
	return function (beforeClose: () => boolean) {
		const visible = !beforeClose();
		return function(state: State) {
			const new_state = {
				...state,
				visible,
			}
			return function(setState: React.Dispatch<State>) {
				return setState(new_state);
			}
		}
	}
}