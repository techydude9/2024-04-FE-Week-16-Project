import React from 'react';
import './Home.css';
import image1 from '../../images/CrisisCenterFarSide.jpg';

const homePgText = `Our Products NEVER Disappoint! 
Take a look at our Products page to see all the great things available to you`;

function Home() {
	
	return (
		<div>
			<div className="homePage">
				<h2>Welcome to our Company!</h2> 
				<hr/>
				<div className='container'>
					<p>{homePgText}</p>
				</div>
				<div>
					<img src={image1} alt="Far Side Cartoon" />
				</div>
			</div>
		</div>
	);	
}

export default Home;
