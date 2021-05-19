import React, { Component } from 'react'
import axios from 'axios'
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn,MDBAnimation }  from "mdbreact";
import history from '../history'


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


		const { balance1, id1, id2, name1, name2 } = this.state
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


			axios.post(`http://localhost:5000/constumerList/transaction`, { name1: name1, name2: name2, balance: balance1 })
				.then((response) => {
					console.log(response)
				})
				.catch(err => { console.log(err) })

		])



	}


	render() {
		const { balance1, name1, name2, id1, id2 } = this.state
		//console.log(customer)
		return (
			<MDBAnimation type='bounceIn' duration='2s'>
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6" className="offset-md-3 mt-3" >
						<form onSubmit={this.submitHandler}>
						<h1>Transfer Form</h1>
						<MDBInput label="Sender's Name" name="name1"
						value={name1}
						onChange={this.handleChange} />
						<MDBInput label="Receiver's Name" name="name2" value={name2} onChange={this.handleChange} />
						<MDBInput label="Sender's id" name="id1" value={id1} onChange={this.handleChange} />
						<MDBInput label="Receiver's id" name="id2" value={id2} onChange={this.handleChange} />
						<MDBInput label="Amount" name="balance1" value={balance1} onChange={this.handleChange} />
						<MDBBtn color="primary" type="submit" onClick={() => history.push('/table')}>Transfer Money!</MDBBtn>
						</form>

					</MDBCol>

				</MDBRow>
				{/* {customer.map(c => <div>{c.name},{c.id}  {c.balance}</div>)} */}
			</MDBContainer>
			</MDBAnimation>
		)
	}
}

export default Transfer;

