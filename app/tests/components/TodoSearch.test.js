import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with entered input text', () => {
		const spy = expect.createSpy();
		const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		const searchText = 'Dog';

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, searchText);
	});

	it('should call onSearch with proper checked value', () => {
		const spy = expect.createSpy();
		const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		const checkedValue = true;

		todoSearch.refs.showCompleted.checked = checkedValue;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(checkedValue, '');
	});
});