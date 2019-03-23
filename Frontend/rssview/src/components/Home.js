import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import AllFeedsView from '../containers/AllFeedsView';
import NewsView from '../containers/NewsView';
import SportView from '../containers/SportView';
import ShowView from '../containers/ShowView';
import TechView from '../containers/TechView';
import Search from '../containers/Search';

const { Header, Content, Footer } = Layout;


class Home extends Component{
	constructor(props){
		super(props);
		this.state ={
			news: true,
			all: false,
			sport: false,
			show: false,
			tech: false
		}
	}
	handelAll = () => {
		this.setState({sport: false, show: false, news: false, tech: false, all: true})
	}
	handelNews = () => {
		this.setState({sport: false, show: false, news: true, tech: false, all: false})
	}
	handelSport = () => {
		this.setState({sport: true, show: false, news: false, tech: false, all: false})
	}
	handelShow = () => {
		this.setState({sport: false, show: true, news: false, tech: false, all: false})
	}
	handelTech = () => {
		this.setState({sport: false, show: false, news: false, tech: true, all: false})
	}

 render(){
 	return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" onClick={this.handelNews}>News</Menu.Item>
        <Menu.Item key="2" onClick={this.handelSport}>Sport</Menu.Item>
        <Menu.Item key="3" onClick={this.handelShow}>Show</Menu.Item>
        <Menu.Item key="4" onClick={this.handelTech}>Tech</Menu.Item>
        <Menu.Item key="5" onClick={this.handelAll}>All Feeds</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Search/>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      	{this.state.news ? <NewsView/> : null}
      	{this.state.sport ? <SportView/> : null}
      	{this.state.show ? <ShowView/> : null}
      	{this.state.tech ? <TechView/> : null}
      	{this.state.all ? <AllFeedsView/> : null}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  )
}

}

export default withRouter(Home);