import React from 'react';
import'./About.css';
import image1 from '../../images/RR Portrait.jpg';
import image2 from '../../images/sunset image.jpg';

const aboutWords = `Founded in 2021 by Bob Ruzga, Ruzga Solutions Group LLC set out to provide the best in Products and Services 
for the landscaping industry.  In addtion to selling the highest quality products and the lowest possible prices, we also provide
IT Services to meet the needs of your organization. We look forward to providing you the best service in the industry.`;

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
			<div className='row'>
				<div className='col-12'>
					<img id='aboutImg2' src={image2} />
				</div>
			</div>
		</div>
	);
}
	
export default About