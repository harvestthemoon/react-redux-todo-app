import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
	render() {
		const {id, completed, text, createdAt, completedAt} = this.props;
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
			<div className="todo">
				<label>
					<input type="checkbox" checked={completed}  onChange={() => { this.props.onToggle(id); }} />
					<p>{text}</p>
					<p>{renderDate()}</p>
				</label>
			</div>
		);
	}
}