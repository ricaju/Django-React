import React, { Component } from 'react';
import TechFeeds from '../components/TechFeeds'
import axios from 'axios';



class TechView extends Component {
	constructor(props){
		super(props);
		this.state = {
			Tech: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/api/TechFeeds')
		.then(res => {
			this.setState({
				Tech: res.data
			});
			console.log(res.data);
		});
	}


	render(){
		return(
			<TechFeeds data={this.state.Tech}/>
		)
	}
}

export default TechView;