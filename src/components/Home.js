import React from 'react'
// import Navbar1 from './Navbar'
import logo1 from '../assets/logo1.jpg'
import { MDBAnimation, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Home() {
	return (
		// <div className='first'>
		// 	<div className='bg'>
		// 		<div className='container'>
		// 			<div className='row'>
		// 				<div className='col-sm-6'>

		// 				</div>
		// 				<div className='col-sm-6 mt-3'>
		//                      <div className='border'>
		// 						 <h1>Hi</h1>

		// 					 </div>
		// 				</div>
		// 			</div>

		// 		</div>
		// 	</div>
		// </div>

		<div className='first'>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6 mt-3 '>
						<MDBAnimation type='slideInLeft' duration='2s'>
							<div className='text '>
								<h1>Still Wondering Why Us</h1>
								<ul >
									<li><h3>Good people to grow with.</h3></li>
									<li><h3>We know Money.</h3></li>
									<li><h3>Your Perfect Banking Partner.</h3></li>
									<li><h3>Not Your Typical Bank.</h3></li>
								</ul>
							</div>
						</MDBAnimation>
					</div>

					<div className='col-sm-6 mt-3'>
						<MDBAnimation type='slideInRight' duration='2s'>
							<img src={logo1} className="img-fluid z-depth-1" alt="" />
						</MDBAnimation>
					</div>
				</div>
			</div>

			<MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
			  
			</MDBFooter>
		</div>







	)
}

export default Home
