var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

var Dashboard = React.createClass({
	getInitialState: function() {
		return {
			data: []
		}
	},
	componentDidMount: function() {
		var self = this;
		this.loadIcons().done(function(data) {
			// console.log(data);
			self.setState({
				data: data
			});
		});
	},
	loadIcons: function() {
		return $.ajax({
			url: 'icons.json',
			method: 'get',
			dataType: 'json'
		});
	},
	render: function() {
		return (
			<div className="dashboard">
				<h1 className="text-center text-shadow">
					Hello, {this.props.user}
					<small>Welcome to your Dashboard</small>
				</h1>
				<Search />
				<DateTime
					interval={1000}
					timeFormat="h:mm:ss A"
					dayFormat="dddd"
					dateFormat="MMMM Do YYYY"
				/>
				<Icons
					data={this.state.data}
				/>
			</div>
		);
	}
});

ReactDOM.render(
	<Dashboard user="Dan"/>,
	document.getElementById('app')
);