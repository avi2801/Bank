import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Navbar1 from './Navbar'
import { MDBAnimation } from 'mdbreact'


class CostumerList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			customer: [],
			isOpen: false,



		}
	}

	componentDidMount() {
		axios.get(`https://backend2801.herokuapp.com/constumerList/`)
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
		const { customer} = this.state
		return (
				<div className="container">
					<div className='row mt-2'>
						<h2>Beneficiary Details!</h2>
						<div className='d-flex justify-content-end temp'>
							<Link to='/about'>Individual Details of Customer</Link>
						</div>
					</div>
					{/* <Navbar1/> */}
					<MDBAnimation type='slideInDown' duration='2s'>
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
								<tr onclick={this.openModal}>
									<th scope="row">{c.id}</th>
									<td>{c.name}</td>
									<td>{c.last}</td>
									<td>{c.email}</td>
									<td>{c.balance}</td>
								</tr>)}
						</tbody>
					</table>
					</MDBAnimation>
				</div>

		)
	}
}

export default CostumerList

