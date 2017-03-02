import $ from 'jquery';

export default {
	setTodos: todos => {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: () => {
		const stringTodos = localStorage.getItem('todos');
		let todos = [];
		
		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {
			console.log('JSON.parse failed:', e);
		}

		return $.isArray(todos) ? todos : [];
	},
	filterTodos: (todos, showCompleted, searchText) => {
		let filteredTodos = todos;

		// Filter by showCompleted.
		filteredTodos = filteredTodos.filter(todo => {
			return !todo.completed || showCompleted;
		});

		// Filter by searchText.
		filteredTodos = filteredTodos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			return searchText.length === 0 || todoText.indexOf(searchText) > -1;
		});

		// Sort todos with non-completed first.
		filteredTodos.sort((a, b) => {
			if (!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;
	}
}