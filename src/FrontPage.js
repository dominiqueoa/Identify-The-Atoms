import React from 'react';
import './FrontPage.css';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  startGame() {
    document.getElementById("timer-label").textContent = "30 sec";  // a hack
    this.props.screenTransition();
    this.props.timer.reset();
  }

  render() {
    return (
      <div className="Front-Page">
        <h1 className="Front-Page-Title">Identify The Atoms</h1>
        <div className="Front-Page-Button-Area">
          <button className="Front-Page-Button" onClick={() => this.startGame()}>Start</button>
          <br/>
          <button className="Front-Page-Button">About</button>
        </div>
      </div>
    );
  }
}

export default FrontPage;
