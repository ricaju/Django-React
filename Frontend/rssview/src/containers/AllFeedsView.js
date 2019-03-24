import React, { Component } from 'react';
import AllFeeds from '../components/AllFeeds'
import axios from 'axios';


class AllFeedsView extends Component {
	constructor(props){
		super(props);
		this.state = {
			All: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/api/ChanelAll')
		.then(res => {
			this.setState({
				All: res.data
			});
			console.log(res.data);
		});
	}


	render(){
		return(
			<AllFeeds data={this.state.All}/>
		)
	}
}

export default AllFeedsView;