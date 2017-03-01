import React from 'react';

export default class Todo extends React.Component {
	render() {
		const {id, completed, text} = this.props;

		return (
			<div className="todo">
				<label>
					<input type="checkbox" checked={completed}  onChange={() => { this.props.onToggle(id); }} />
					{text}
				</label>
			</div>
		);
	}
}