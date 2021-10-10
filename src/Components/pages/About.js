import React from 'react';

export const About = () => {
	return (
		<div class="about-page">
			<h1>
				About <span class="text-primary">Github Profile Finder</span>
			</h1>
			<div class="my-3">
				<p>
					This is an easy-to-use app that allows you to search for github users
					by user or real name and review their profile details. The app also
					provides links to up to five repos of each user.
				</p>
			</div>
			<p>
				This is version: <em>one point zero point zero</em>
			</p>
		</div>
	);
};

export default About;
