import React from "react";

function NavigationBar() {
	return (
		<div>
			<link rel="stylesheet" href="App.css" />
			<nav>
				<div className="logo">SCIENTIST FINDER</div>
				<div className="nav-items">
					<a href="/">Home</a>{" "}
					<a href="/all-scientists">Our Database</a>
				</div>
			</nav>
		</div>
	);
}

export default NavigationBar;
