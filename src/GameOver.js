import React from 'react';
import './GameOver.css';

class GameOver extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="game-over-container">
        <div className="center-wrapper">
          <h1 className="game-over-congratulations">
            Nice Work!
          </h1>
          <h1 className="game-over-congratulations">
            Here are the Test Tube Points you scored!
          </h1>
          <div className="game-over-score-card">
            <img
              src={require("../src/img/test-tube-green.svg")}
              alt="test tube" />
            <h1 id="game-over-score"></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOver;
