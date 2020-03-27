import React from 'react';
import './FrontPage.css';

class FrontPage extends React.Component {

	constructor(props) {

		super(props);
		this.state = props;
	}

	eventHandler() {
		this.props.screenTransition();
	}

	render(){

		return (
			<div className="Front-Page"> 
				<h1 className="Front-Page-Header">Identify The Atoms</h1>
				<button className="Front-Page-Button" onClick={() => this.eventHandler()}>Start</button>
			</div>
			);
	}
}


export default FrontPage;