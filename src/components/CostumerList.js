import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar1 from './Navbar'

class CostumerList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			customer: [],
			i:0,



		}
	}
	componentDidMount() {
		axios.get(`http://localhost:5000/constumerList/`)
			.then(response => {
				console.log(response)
				this.setState({
					customer: response.data,

				})

			})
			.catch(error => {
				console.log(error)
			})
	}


	render() {
		const { customer,i } = this.state
		return (
			<div className="container">
				<h2 className='row mt-2'>
					Beneficiary Details!
				</h2>
				{/* <Navbar1/> */}
					<table class="table table-striped table-hover mt-3">
						<thead >
							<tr>
								<th scope="col">S.No</th>
								<th scope="col">FirstName</th>
								<th scope="col">LastName</th>
								<th scope="col">Email</th>
								<th scope="col">Balance</th>
							</tr>
						</thead>
							<tbody>
							{customer.map(c =>
							<tr>
								<th scope="row">{c.id}</th>
								<td>{c.name}</td>
								<td>{c.last}</td>
								<td>{c.email}</td>
								<td>{c.balance}</td>
							</tr>)}
						</tbody>
					</table>


			</div>
		)
	}
}

export default CostumerList

