import React, { Component } from 'react'
import axios from 'axios'


 class Transaction extends Component {
	 constructor(props) {
		 super(props)
		 this.state = {
			  table:[]
		 }
	 }
	 componentDidMount()
	 {
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
			<div>
              {table.map(t=><h1>{t.name1},{t.balance}</h1>)}
			</div>
		)
	}
}

export default Transaction;

