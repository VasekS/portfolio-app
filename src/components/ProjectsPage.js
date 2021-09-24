import React from 'react';

class ProjectsPage extends React.Component {
  render() {
  	const image_url = '/images/favicon.ico';
    return (
    	<div className="content">
	      <div className="container">
	      	<div className="item" style={{ backgroundImage : `url(${image_url})` }}><a rel="noopener noreferrer" href="https://www.canadanowfestival.com/?redirect=off" target="blank">Testing</a></div>
	      	<div className="item">2</div>
	      	<div className="item">3</div>
	      	<div className="item">4</div>
	      </div>
	     </div>
		);
	}
};

export default ProjectsPage;