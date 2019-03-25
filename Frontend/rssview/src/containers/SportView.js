import React, { Component } from 'react';
import SportFeeds from '../components/SportFeeds'
import axios from 'axios';

class SportView extends Component {
	constructor(props){
		super(props);
		this.state = {
			Sport: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/api/SportFeeds')
		.then(res => {
			this.setState({
				Sport: res.data
			});
		});
	}


	render(){
		return(
			<SportFeeds data={this.state.Sport}/>
		)
	}
}

export default SportView;