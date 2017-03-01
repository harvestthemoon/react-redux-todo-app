import React from 'react';
import uuid from 'node-uuid';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'This is the first todo',
					completed: false
				},
				{
					id: uuid(),
					text: 'Another todo',
					completed: true
				},
				{
					id: uuid(),
					text: 'Third todo of this list',
					completed: true
				},
				{
					id: uuid(),
					text: 'Go to the movies',
					completed: false
				}
			]
		};

		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text,
					completed: false
				}
			]
		});
	}

	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted,
			searchText: searchText.toLowerCase()
		});
	}

	handleToggle(id) {
		const updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({
			todos: updatedTodos
		});
	}

	render() {
		const {todos} = this.state;

		return (
			<div className="todo-app">
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}