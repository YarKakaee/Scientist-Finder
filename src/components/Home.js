import "./Home.css";
import React from "react";

function Home() {
	return (
		<section className="hero">
			<img
				className="wave1class"
				src="./wave1.svg"
				alt="illustration"
			/>
			<div className="hero-container">
				<div className="column-left">
					<h1>Find Scientists from all over the world</h1>
					<p>
						Search by Name, Institute, Subject field, or
						even Country to find one out of over 160,000
						Scientists in this Database.
					</p>
					<button
						className="homepage_btn"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "/all-scientists";
						}}
					>
						Search Now!
					</button>
				</div>
				<div className="column-right">
					<img
						src="./homepageimage.svg"
						alt="illustration"
						className="hero-image"
					/>
				</div>
			</div>
			<img
				className="wave2class"
				src="./wave2.svg"
				alt="illustration"
			/>
		</section>
	);
}

export default Home;
