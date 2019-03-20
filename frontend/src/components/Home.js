import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		fetch('api/AllFeeds')
		.then(response => respnse.json())
		.then(data => this.setState({ data: data}))
	}

	render(){
		console.log("blblbl")
		<div>
			tu smo
		</div>
	}
}

export default withRouter(Home);