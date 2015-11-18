window.Search = React.createClass({
	getInitialState: function() {
		return {
			searchTerm: ''
		}
	},
	handleSearchTermChange: function() {
		console.log(this.refs.search.value);
		this
			.loadSuggestions(this.refs.search.value)
			.done(function(data) {
				console.log(data);
			});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var url =
			'http://google.com/#q=' +
			this.formatTerms(this.refs.search.value);
		console.log(url);
		window.location.href = url;
	},
	loadSuggestions: function(terms) {
		var urlStub = 'http://google.com/complete/search?output=toolbar&q=';
		var url = urlStub + terms.replace(/\s+/g, '+');
		// console.log(url);
		return $.ajax({
			url: url,
		});
	},
	formatTerms: function(terms) {
		return terms.replace(/\s+/g, '+');
	},
	render: function() {
		return (
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<label
					className="sr-only"
					htmlFor="goole-search"
				>Search Google</label>
				<div className="input-group">
					<div className="input-group-addon">Google</div>
					<input
						type="text"
						className="form-control"
						placeholder="Search..."
						ref="search"
						// onChange={this.handleSearchTermChange}
					/>
					<span className="input-group-btn">
						<button
							className="btn btn-default"
							type="submit"
						>Go!</button>
					</span>
				</div>
			</form>
		);
	}
});