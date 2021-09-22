import React from 'react';
import Typed from "typed.js";

const HomePage = () => (
	<div className="home">
		<h1>Vaclav Sekret</h1>
			<div className="slogan">
				<div className="word"><span className="myWord">Web Developer</span>
					<div className="cursor"></div>
					<Typed strings={textLines} typeSpeed={60} />
				</div>
			</div>
			<div className="location">
				<i className="fa fa-map-marker"></i>
				<span className="myWord"> LOS ANGELES</span>
			</div>
	</div>
);

export default HomePage;