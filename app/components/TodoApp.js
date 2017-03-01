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
					text: 'This is the first todo'
				},
				{
					id: uuid(),
					text: 'Another todo'
				},
				{
					id: uuid(),
					text: 'Third todo of this list'
				},
				{
					id: uuid(),
					text: 'Go to the movies'
				}
			]
		};

		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text
				}
			]
		})
	}

	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted,
			searchText: searchText.toLowerCase()
		});
	}

	render() {
		const {todos} = this.state;

		return (
			<div className="todo-app">
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}