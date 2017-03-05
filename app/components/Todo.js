import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
	render() {
		const {id, completed, text, createdAt, completedAt} = this.props;
		const todoClassName = completed ? 'todo-completed' : '';
		const renderDate = () => {
			let message = 'Created ';
			let timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		} 

		return (
			<div className={'todo ' + todoClassName}>
				<label>
					<div>
						<input type="checkbox" checked={completed}  onChange={() => { this.props.onToggle(id); }} />
					</div>
					<div>
						<p>{text}</p>
						<p className="todo__subtext">{renderDate()}</p>
					</div>
				</label>
			</div>
		);
	}
}