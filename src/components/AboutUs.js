import axios from 'axios'
import React, { Component } from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBAnimation } from "mdbreact";


export class AboutUs extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: this.props.id,
			user: []
		}
		console.log(this.props.id)
	}
	componentDidMount() {
		axios.get(`https://backend2801.herokuapp.com/constumerList/about${this.state.id}`)
			.then(res => {
				this.setState({
					user: res.data

				})
			})
			.catch(err => { console.log(err) })
	}

	render() {
		const { user} = this.state
		return (
			<MDBAnimation type='rollIn' duration='2s'>
				<div>
					<MDBContainer>
						<MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
							<MDBCardTitle>Customer Details</MDBCardTitle>
							<MDBCardText>
								<div>
									<h5>Name: {user.name} {user.last}</h5>
								</div>
							</MDBCardText>
							<MDBCardText>
								<h5>Email: {user.email}</h5>
							</MDBCardText>
							<MDBCardText>
								<h5>Balance: {user.balance}</h5>
							</MDBCardText>

						</MDBCard>
					</MDBContainer>
				</div>
			</MDBAnimation>
		)
	}
}

export default AboutUs
