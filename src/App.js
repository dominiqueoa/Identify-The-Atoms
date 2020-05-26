import React from 'react';
import periodicTable from './img/periodicTable.jpeg';
import './App.css';
import Main from './Main'
import FrontPage from './FrontPage'
import GameOver from './GameOver'
import { Timer } from './util'


/*Core game information for managing state*/
const gameInfo = {
  elementOptions: ["Hydrogen","Helium","Lithium","Beryllium"],
  correctElement: "Hydrogen",
  isClicked: false,
  score: 0,
  numIncorrect: 0
};

// this is very much a hack around how React works
var mount = false;

{/*This class functions as a controller class for the different screens of the application. 
  All screens of the application are stored inside of this component.*/}
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
    if (mount) {
      this.timer = new Timer({
        limit: 30000,
        callback: () => {
          this.timer.suspend();
          this.gameOver(document.querySelector(".Score").textContent);  // hack!
        },
        increment: 1000,
        tick: i => {
          var label = document.getElementById("timer-label");
          label.textContent = (30-i).toString() + " sec";
          console.log("tick " + i);
        }
      });
    } else {
      mount = true;
      this.timer = null;
    }
  }

  gameOver() {
    this.timer.suspend();

    var score = document.querySelector(".Score").textContent;
    document.querySelector(".Front-Page").style.display          = "none";
    document.querySelector(".Main").style.display                = "none";
    document.querySelector(".game-over-container").style.display = "block";
    document.querySelector("#game-over-score").textContent       = score;
  }

  /*Function to manage navigation between different scenes*/
  switchToScreen(fromScreen, toScreen) {
    let fromPage = document.querySelector("." + fromScreen);
    let toPage = document.querySelector("." + toScreen);

    fromPage.style.display = "none";
    toPage.style.display = "block";
  }

  render() {
    return (
      <div className="App">
        <FrontPage
          className="Front-Page"
          screenTransition={() => this.switchToScreen("Front-Page", "Main")}
          timer={this.timer} />
        <Main
          className="Main"
          correctElement={gameInfo.correctElement}
          elementOptions={gameInfo.elementOptions}
          score={0}
          timer={this.timer}
          gameOver={this.gameOver} />
        <GameOver />
      </div>
    );
  }
}

export default App;
