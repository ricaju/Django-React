import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

class Router extends Component {
	render(){
		<Router>
			<Switch>
				<Route path="#" exact={true} component={Home}/>
				{/*	<Route path="#" component={Tech}/>
					<Route path="#" component={Sport}/>
					<Route path="#" component={Show}/> */}
			<Switch/>
		<Router/>
	}

}

export default Router;
