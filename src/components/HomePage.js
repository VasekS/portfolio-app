import React from 'react';
import { render } from 'react-dom';
import Typer from './Typer';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
		<h1>Vaclav Sekret</h1>
			<div className="slogan">
				<div className="word"><Typer />
				<span className="myWord"></span>
				</div>
			</div>
			<div className="location">
				<i className="fa fa-map-marker"></i>
				<span className="myWord"> LOS ANGELES</span>
			</div>
		</div>
		);
	}
};

export default HomePage;