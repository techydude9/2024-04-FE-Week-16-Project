import React from 'react';
import './Home.css';
import image1 from '../../images/CrisisCenterFarSide.jpg';

function Home() {
	
	return (
		<div className="homePage">
			<div>
				<h2>Welcome to our Company!</h2> 
				<hr/>
				<div>
					<p>Our Products NEVER Disappoint</p>
					<img src={image1} alt="Far Side Cartoon" />
				</div>
			</div>
		</div>
	);	
}

export default Home;
