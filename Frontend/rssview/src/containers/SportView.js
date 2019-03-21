import React, { Component } from 'react';
import SportFeeds from '../components/SportFeeds'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
			console.log(res.data);
		});
	}


	render(){
		return(
			<SportFeeds data={this.state.Sport}/>
		)
	}
}

export default SportView;