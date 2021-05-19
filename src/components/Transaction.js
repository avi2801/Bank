import React, { Component } from 'react'
import axios from 'axios'
import {MDBAnimation} from 'mdbreact'


class Transaction extends Component {
	constructor(props) {
		super(props)
		this.state = {
			table: []
		}
	}
	componentDidMount() {
		axios.get(`http://localhost:5000/constumerList/transactionget`)
			.then(response => {
				console.log(response)
				this.setState({
					table: response.data,

				})
				console.log(this.state.table)

			})
			.catch(error => {
				console.log(error)
			})

	}

	render() {
		const { table } = this.state
		return (
			<MDBAnimation type="slideInRight" duration='2s'>
			<div className="container mt-3">
				<h2>Transaction History</h2>
				<table class="table table-striped table-hover mt-3">
					<thead >
						<tr>
							<th scope="col">Sender</th>
							<th scope="col">Receiver</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody>
						{table.map(t =>
							<tr >
								<td>{t.name1}</td>
								<td>{t.name2}</td>
								<td>{t.balance}</td>
							</tr>)}
					</tbody>
				</table>
			</div>
			</MDBAnimation>
		)
	}
}

export default Transaction;

