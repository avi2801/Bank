import React, { Component } from 'react'


export class AboutUs extends Component {
	constructor(props) {
		super(props)

		this.state = {
			 id:this.props.id1
		}
		console.log(this.props.id1)
	}

	render() {
		return (
			<div>
				<h1>{this.state.id}</h1>
				

			</div>
		)
	}
}

export default AboutUs
