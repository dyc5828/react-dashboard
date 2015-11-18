window.DateTime = React.createClass({
	getInitialState: function() {
		return this.loadTimeDate();
	},
	componentDidMount: function() {
		this.tick();
	},
	tick: function() {
		var self = this;
		setInterval(function() {
			self.setState(self.loadTimeDate());
		}, this.props.interval);
	},
	loadTimeDate: function() {
		return {
			time: moment().format(this.props.timeFormat),
			day: moment().format(this.props.dayFormat),
			date: moment().format(this.props.dateFormat),
		}
	},
	render: function() {
		return (
			<div className="date-time col-md-4">
				<div className="time text-right text-shadow">
					{this.state.time}
				</div>
				<div className="day text-right text-shadow">
					{this.state.day}
				</div>
				<div className="date text-right text-shadow">
					{this.state.date}
				</div>
			</div>
		);
	}
});