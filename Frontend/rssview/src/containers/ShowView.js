import React, { Component } from 'react';
import ShowFeeds from '../components/ShowFeeds'
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
			console.log(res.data);
		});
	}


	render(){
		return(
			<ShowFeeds data={this.state.Show}/>
		)
	}
}

export default ShowView;