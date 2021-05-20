import React, { Component } from 'react'
import axios from 'axios'

class AddCustomer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id:null,
			name: '',
			email: '',
			balance: null
		}
	this.handleChange=this.handleChange.bind(this);
	this.submitHandler=this.submitHandler.bind(this);
	}
	componentDidMount()
	{

	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})

	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post(`https://backend2801.herokuapp.com/constumerList/add`, this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		axios.get()
	}

	render() {
		const { id,name,email,balance} = this.state
		return (

			<div>
				<form onSubmit={this.submitHandler}>
					<div>
					<input type='number' name='id' value={id} onChange={this.handleChange} />
					</div>
					<div >
						<input type='text' name='name' value={name} onChange={this.handleChange} />
					</div>
					<div>
						<input type='text' name='email' value={email} onChange={this.handleChange} />
					</div>
					<div>
						<input type='number' name='balance' value={balance} onChange={this.handleChange} />
					</div>
					<button type="submit">Submit Form!</button>
				</form>

			</div>

		)
	}
}

export default AddCustomer

