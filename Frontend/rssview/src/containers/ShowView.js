import React, { Component } from 'react';
import ShowFeeds from '../components/ShowFeeds'
import axios from 'axios';

class ShowView extends Component {
	constructor(props){
		super(props);
		this.state = {
			Show: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/api/ShowFeeds')
		.then(res => {
			this.setState({
				Show: res.data
			});
		});
	}


	render(){
		return(
			<ShowFeeds data={this.state.Show}/>
		)
	}
}

export default ShowView;