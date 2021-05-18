import React, { Component } from 'react'
import axios from 'axios'

class Transfer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			customer: this.props.customer,
			transaction: [],
			balance1: 0,
			name1: "",
			name2: "",
			id1: null,
			id2: null

		}
		this.handleChange = this.handleChange.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state.balance1)

	}
	submitHandler = (e) => {


		const { customer, balance1, id1, id2,name1,name2 } = this.state
		// console.log(id1)

		// console.log(balance1)
		axios.all([
			axios.put(`http://localhost:5000/constumerList/transaction${id1}`, {
				id2: id2,
				balance: balance1,
			})
				.then((res) => {
					console.log(res);
				})
				.catch(err => { console.log(err) })
		], [


			axios.post(`http://localhost:5000/constumerList/transaction`,{name1:name1,name2:name2,balance:balance1})
				.then((response) => {
					console.log(response)
				})
				.catch(err => { console.log(err) })

		])



	}


	render() {
		const { customer, balance1, name1, name2, id1, id2 } = this.state
		//console.log(customer)
		return (
			<div>
				{/* {customer.map(c => <div>{c.name},{c.id}  {c.balance}</div>)} */}
				<form onSubmit={this.submitHandler}>
					<input type="number" name="id1" value={id1} onChange={this.handleChange} />
					<input type="number" name="id2" value={id2} onChange={this.handleChange} />
					<input type="text" name="name1" value={name1} onChange={this.handleChange} />
					<input type="text" name="name2" value={name2} onChange={this.handleChange} />
					<input type="number" name="balance1" value={balance1} onChange={this.handleChange} />
					<button type="submit">click me!</button>
				</form>
			</div>
		)
	}
}

export default Transfer;

