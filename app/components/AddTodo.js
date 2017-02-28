import React from 'react';

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const text = this.refs.todoText.value;

		if (text.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(text);
		} else {
			this.refs.todoText.focus();
		}
	}

	render() {
		return (
			<form className="add-todo" onSubmit={this.handleSubmit}>
				<input type="text" ref="todoText" placeholder="What do you need to do?" />
				<button className="button expanded">Add Todo</button>
			</form>
		);
	}
}

AddTodo.propTypes = {
	onAddTodo: React.PropTypes.func.isRequired
};