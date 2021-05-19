import React, { Component } from 'react'
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, } from "mdbreact";
import history from '../history'
import AboutUs from './AboutUs'
import { Route, Link, BrowserRouter } from 'react-router-dom'

class About extends Component {
	constructor(props) {
		super(props)

		this.state = {
			 id1:null,
			 name1:""
		}
		this.handleChange=this.handleChange.bind(this)

	}



	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state.id1)
	}
	render() {
		const {name1,id1}=this.state
		return (
			<div>
				<div className='row mt-3'>
					<div className=' offset-4 col-sm-4 '>
						<h3>Customer Details</h3>
						<form>
							<MDBInput label="Customer'Id" name="id1" value={id1} onChange={this.handleChange} />
							<MDBInput label="Customer's Name" name="name1" value={name1} onChange={this.handleChange} />
							<MDBBtn color="primary" type="submit" onClick={()=>history.push('/aboutus')}>
									 Transfer Money!</MDBBtn>
							<AboutUs id={id1}/>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default About
