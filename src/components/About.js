import React, { Component } from 'react'
import { MDBInput, MDBBtn, MDBAnimation } from "mdbreact";
// import history from '../history'
import AboutUs from './AboutUs'
// import { Route, Link, BrowserRouter } from 'react-router-dom'

class About extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id1: null,
			name1: "",
			temp1: false
		}
		this.handleChange = this.handleChange.bind(this)

	}
	changeTemp = () => {
		this.setState({
			temp1: true
		})
	}



	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state.id1)
	}
	render() {
		const { name1, id1, temp1 } = this.state
		if (temp1 === false) {
			return (

				<div>
					<div className='row mt-3'>
						<div className='offset-2 col-6 offset-sm-4 col-sm-6"'>
							<h3>Fill in the Required Details</h3>
							<MDBAnimation type="slideInLeft" duration='2s'>
								<form>
									<MDBInput label="Customer'Id" name="id1" value={id1} onChange={this.handleChange} />
									<MDBInput label="Customer's Name" name="name1" value={name1} onChange={this.handleChange} />
									<MDBBtn color="primary" type="submit" onClick={this.changeTemp}>
										Get Details</MDBBtn>
								</form>
							</MDBAnimation>
						</div>
					</div>
				</div>

			)
		}
		else {
			return (
				<div>
					<div className='row mt-3'>
						<div className=' offset-4 col-sm-4 '>

							<AboutUs id={id1} />
						</div>
					</div>
				</div>
			)


		}
	}
}

export default About
