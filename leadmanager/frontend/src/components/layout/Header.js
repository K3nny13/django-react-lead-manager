import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<div>
			 <nav className="navbar navbar-expand-sm navbar-light bg-light">
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<a className="navbar-brand" href="#">Lead Manager</a>
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					  
					</ul>
					<form className="form-inline my-2 my-lg-0">
					  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
					  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				  </div>
				</nav>
			</div>
		)
	}
}

export default Header