import "materialize-css/dist/css/materialize.min.css";
import "../assets/css/app.css";
import React, { Component } from "react";
import List from "./list";
import AddItem from "./add-items";
import listData from "../helpers/list_data";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listData: []
		};
	}

	componentDidMount() {
		this.getListData();
	}

	addItem(item) {
		this.setState({
			listData: [item, ...this.state.listData]
		});
	}

	getListData() {
		this.setState({
			listData
		});
	}

	render() {
		return (
			<div className="container">
				<h1 className="center">To Do List</h1>
				<AddItem add={this.addItem.bind(this)} />
				<List data={this.state.listData} />
			</div>
		);
	}
}

export default App;
