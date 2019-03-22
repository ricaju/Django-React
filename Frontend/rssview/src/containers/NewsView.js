import React, { Component } from 'react';
import NewsFeeds from '../components/NewsFeeds'
import axios from 'axios';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


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
			console.log(res.data);
		});
	}


	render(){
		return(
			<NewsFeeds data={this.state.News}/>
		)
	}
}

export default NewsView;