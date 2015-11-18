window.Icons = React.createClass({
	render: function() {
		var groupNodes = this.props.data.map(function(group) {
			return (
				<Group key={group.id} data={group} />
			);
		});

		return (
			<div className="icons col-md-6">
				{groupNodes}
			</div>
		);
	}
});

window.Group = React.createClass({
	render: function() {
		var self = this;
		var iconNodes = this.props.data.icons.map(function(icon) {
			return (
				<Icon
					key={self.props.data.name + icon.id}
					name={icon.name}
					url={icon.url}
					image={icon.image}
				/>
			);
		});

		return (
			<div className="groups row">
				<h2
					className="text-left text-shadow col-xs-12"
				>{this.props.data.name}</h2>
				<div className="col-xs-12">
					{iconNodes}
				</div>
			</div>
		);
	}
});

window.Icon = React.createClass({
	getInitialState: function() {
		return {
			shown: false
		}
	},
	toggleShown: function(e) {
		e.preventDefault();

		this.setState({
			shown: !this.state.shown
		});
	},
	render: function() {
		return (
			<a
				className="icon pull-left text-center"
				onMouseEnter={this.toggleShown}
				onMouseLeave={this.toggleShown}
				href={this.props.url}
				alt={this.props.name}
			>
				<img
					width="64px"
					height="64px"
					src={this.props.image}
				/><br/>
				<span>{ this.state.shown ? this.props.name : null}</span>
			</a>
		);
	}
});