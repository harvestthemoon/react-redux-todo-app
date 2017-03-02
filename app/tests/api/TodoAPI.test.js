import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			const todos = [{
				id: 100,
				text: 'Test the API',
				completed: false
			}];
			TodoAPI.setTodos(todos);

			const actual = JSON.parse(localStorage.getItem('todos'));

			expect(actual).toEqual(todos);
		});

		it('should not set invalid todos array', () => {
			const badTodos = {
				a: 'b'
			};
			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad localStorage data', () => {
			const actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});

		it('should return todos if valid array is in localStorage', () => {
			const todos = [{
				id: 200,
				text: 'Something to be done',
				completed: false
			}];

			localStorage.setItem('todos', JSON.stringify(todos));
			const actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filterTodos', () => {
		const todos = [
			{
				id: 20,
				text: 'This is a todo',
				completed: true
			},
			{
				id: 30,
				text: 'Another one',
				completed: false
			},
			{
				id: 40,
				text: 'Final todo',
				completed: true
			}
		];

		it('should return all items if showCompleted is true', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(3);
		});

		it('should return non-completed todos if showCompleted is false', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, false, '');

			expect(filteredTodos.length).toBe(1);
		});

		it('should return all todos when searchText is empty', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(3);
		});

		it('should filter todos by searchText', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, true, 'todo');

			expect(filteredTodos.length).toBe(2);
		});

		it('should sort by completed status', () => {
			const filteredTodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredTodos[0].completed).toBe(false);
		});
	});
});