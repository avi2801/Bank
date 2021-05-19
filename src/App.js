import React, { Component } from 'react'
import axios from 'axios';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './css/navbar.css'
import './css/customer.css'
import './css/home.css'
import CustomerList from './components/CostumerList'
import Transfer from './components/Transfer'
import Home from './components/Home'
import Navbar1 from './components/Navbar'
import About from './components/About'
import AboutUs from './components/AboutUs'
import history from './history'

import Transaction from './components/Transaction';

class App extends Component {
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
				// console.log(response)
				this.setState({
					customer: response.data,

				})

			})
			.catch(error => {
				console.log(error)
			})
	}
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Navbar1 />
        </div>
        <div >
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
		  <Route path="/aboutus" component={AboutUs} />
          <Route path="/Transaction" component={()=><Transfer customer={this.state.customer}/>} />
          <Route path="/ConstumerList" component={CustomerList} />
		  <Route path="/table" component={Transaction}/>

        </div>
      </BrowserRouter >
    )
  }

}

export default App;
