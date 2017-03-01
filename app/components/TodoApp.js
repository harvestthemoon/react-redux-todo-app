import React from 'react';
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
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleAddTodo(text) {
		alert('new todo:', text);
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