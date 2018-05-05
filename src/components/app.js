import "materialize-css/dist/css/materialize.min.css";
import "../assets/css/app.css";
import React, { Component } from "react";
import axios from "axios";
import List from "./list";
import AddItem from "./add-items";
import listData from "../helpers/list_data";

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=c318democso";

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

	async addItem(item) {
		await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

		this.getListData();
	}

	async deleteItem(id) {
		await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

		this.getListData();
	}

	async getListData() {
		//es7 version of axios
		try {
			const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

			console.log("Response: ", response);

			this.setState({
				listData: response.data.todos
			});
		} catch (err) {
			console.log("ERROR: ", err.message);
		}

		//es6 version of axios
		// axios.get(`${BASE_URL}/todos${API_KEY}`).then(response => {
		// 	console.log("Response: ", response.data.todos);

		// 	this.setState({ listData: response.data.todos });
		// });
	}

	render() {
		return (
			<div className="container">
				<h1 className="center">To Do List</h1>
				<AddItem add={this.addItem.bind(this)} />
				<List data={this.state.listData} delete={this.deleteItem.bind(this)} />
			</div>
		);
	}
}

export default App;
