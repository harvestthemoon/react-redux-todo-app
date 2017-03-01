import React from 'react';

export default class TodoSearch extends React.Component {
	constructor(props) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch() {
		const showCompleted = this.refs.showCompleted.checked;
		const searchText = this.refs.searchText.value;
		
		this.props.onSearch(showCompleted, searchText);
	}

	render() {
		return (
			<div className="todo-search">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}