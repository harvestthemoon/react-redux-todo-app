import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Todo from 'Todo';

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should call onToggle props with id on click', () => {
		const todoData = {
			id: 100,
			text: 'Yet another todo', 
			completed: true
		};
		const spy = expect.createSpy();
		const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
		const $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.change($el.find('input')[0]);
		expect(spy).toHaveBeenCalledWith(todoData.id);
	});
});