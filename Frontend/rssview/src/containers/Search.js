import React, {Component} from 'react'
import axios from 'axios';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: "",
			data: []
		}
	}

	getQuery = () => {
		axios.get(`http://localhost:8000/api/SearchPost?q=${this.state.query}`)
		.then(res => {
			this.setState({
				data: res.data
			});
			console.log(this.state.data)
		})
	}

	handelChange = (e) => {
		this.setState({ query: this.search.value},
			() => {
				this.getQuery()
			})
	}

	render() {
		return (
			<form>
				<input
					placeholder="Search..."
					name="q"
					ref={input => this.search = input}
					method="get" // razmisliti!
					onChange={this.handelChange}
				/>
			</form>
			
		)
	}
}

export default Search;