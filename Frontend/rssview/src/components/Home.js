import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import AllFeedsView from '../containers/AllFeedsView';
import SportView from '../containers/SportView';
import ShowView from '../containers/ShowView';

const { Header, Content, Footer } = Layout;


class Home extends Component{
	constructor(props){
		super(props);
		this.state ={
			home: true,
			sport: false,
			show: false
		}
	}
	handelHome = () => {
		this.setState({sport: false, show: false, home: true})
	}
	handelSport = () => {
		this.setState({sport: true, show: false, home: false})
	}
	handelShow = () => {
		this.setState({sport: false, show: true, home: false})
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
        <Menu.Item key="1" onClick={this.handelHome}>Home</Menu.Item>
        <Menu.Item key="2" onClick={this.handelSport}>Sport</Menu.Item>
        <Menu.Item key="3" onClick={this.handelShow}>Show</Menu.Item>
        <Menu.Item key="4">Tech</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      	{this.state.home ? <AllFeedsView/> : null}
      	{this.state.sport ? <SportView/> : null}
      	{this.state.show ? <ShowView/> : null}
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