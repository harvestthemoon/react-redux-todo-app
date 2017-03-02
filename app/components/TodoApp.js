import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};

		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	componentDidUpdate() {
		TodoAPI.setTodos(this.state.todos);
	}

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
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
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}

			return todo;
		});

		this.setState({
			todos: updatedTodos
		});
	}

	render() {
		const {todos, showCompleted, searchText} = this.state;
		const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div className="todo-app">
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={filteredTodos} onToggle={this.handleToggle} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}