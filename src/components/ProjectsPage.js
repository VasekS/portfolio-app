import React from 'react';

class ProjectsPage extends React.Component {
  render() {
  	const image_url = '/images/p_canada.jpg';
  	const width = '250px';
    return (
    	<div className="content">
	      <div className="container">
	      	<div className="item" style={{ backgroundImage : `url(${image_url})`, backgroundRepeat: 'no-repeat', height: '117px', backgroundPosition: 'center', backgroundSize: 'contain'}}></div>
	      	<div className="item" style={{ backgroundImage : `url(${image_url})`, backgroundRepeat: 'no-repeat', height: '117px', backgroundPosition: 'center', backgroundSize: 'contain'}}></div>
	      	<div className="item" style={{ backgroundImage : `url(${image_url})`, backgroundRepeat: 'no-repeat', height: '117px', backgroundPosition: 'center', backgroundSize: 'contain'}}></div>
	      </div>
	     </div>
		);
	}
};

export default ProjectsPage;