import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{
					id: 1,
					text: 'This is the first todo'
				},
				{
					id: 2,
					text: 'Another todo'
				},
				{
					id: 3,
					text: 'Third todo of this list'
				},
				{
					id: 4,
					text: 'Go to the movies'
				}
			]
		};

		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	handleAddTodo(text) {
		alert('new todo:', text);
	}

	render() {
		const {todos} = this.state;

		return (
			<div className="todo-app">
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}