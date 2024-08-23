import React from 'react';
import'./About.css';
import image1 from '../../images/RR Portrait.jpg';

const aboutWords = `This is a great place to put the text for describing who we are and why we are so awesome.
					So is this thing working like I hope it will?
										Yippie`;

function About() {
	
	return (
		<div className='container'>
			<h2>About</h2> 
			<br />
			<div className='row'>
				<div className='col-3'>
					<div className='aboutImg1'>
						<img src={image1} />
					</div>
				</div>
				<div className='aboutText col-8'>
					<p>{aboutWords}</p>
				</div>
			</div>
		</div>
	);
}
	
export default About