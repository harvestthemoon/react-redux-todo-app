import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		const todoText = 'test';
		const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', () => {
		const todoData = {
			id: 11,
			text: 'test',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};
		const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({ todos: [todoData] });

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(todoData.id);
		expect(todoApp.state.todos[0].completed).toBe(true);		
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('should set completedAt to undefined when todo is toggled from true to false', () => {
		const todoData = {
			id: 200,
			text: 'Some text here',
			completed: true,
			createdAt: 0,
			completedAt: 100
		}
		const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({ todos: [todoData] });

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(todoData.id);
		expect(todoApp.state.todos[0].completed).toBe(false);		
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});
});