import React, { Component } from 'react';
import NewsFeeds from '../components/NewsFeeds'
import axios from 'axios';

class NewsView extends Component {
	constructor(props){
		super(props);
		this.state = {
			News: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/api/NewsFeeds')
		.then(res => {
			this.setState({
				News: res.data
			});
		});
	}


	render(){
		return(
			<NewsFeeds data={this.state.News}/>
		)
	}
}

export default NewsView;