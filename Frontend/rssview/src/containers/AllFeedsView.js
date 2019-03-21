import React, { Component } from 'react';
import AllFeeds from '../components/AllFeeds'
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


class AllFeedsView extends Component {
	constructor(props){
		super(props);
		this.state = {
			Feeds: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/api/AllFeeds')
		.then(res => {
			this.setState({
				Feeds: res.data
			});
			console.log(res.data);
		});
	}


	render(){
		return(
			<AllFeeds data={listData}/>
		)
	}
}

export default AllFeedsView;