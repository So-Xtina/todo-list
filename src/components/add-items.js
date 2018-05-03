import React, { Component } from "react";

class AddItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			details: ""
		};
	}

	handleAddItem(event) {
		event.preventDefault();

		console.log("item", this.state);

		this.props.add(this.state);
	}

	render() {
		const { title, details } = this.state;

		return (
			<form onSubmit={this.handleAddItem.bind(this)}>
				<div className="row">
					<div className="col s12 m8 offset-m2">
						<input
							value={title}
							type="text"
							onChange={event => {
								this.setState({ title: event.target.value });
							}}
							placeholder="Title"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m8 offset-m2">
						<input
							value={details}
							type="text"
							onChange={event =>
								this.setState({
									details: event.target.value
								})
							}
							placeholder="Detail"
						/>
					</div>
				</div>
				<div className="row">
					<div className="center-align col s12 m8 offset-m2">
						<button className="btn purple darken-2">Add Item</button>
					</div>
				</div>
			</form>
		);
	}
}

export default AddItem;
