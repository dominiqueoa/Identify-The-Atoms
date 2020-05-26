import React from 'react';
import testTube from './img/test-tube.svg';
import './Main.css';
import { Util, Timer } from './util.js';


class ElementOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
    this.elements =
     ["Hydrogen", 
      "Helium",
      "Lithium",
      "Beryllium",
      "Boron",
      "Carbon",
      "Nitrogen",
      "Oxygen",
      "Fluorine",
      "Neon",
      "Sodium",
      "Magnesium",
      "Aluminium",
      "Silicon",
      "Phosphorus",
      "Sulfur",
      "Chlorine",
      "Argon",
      "Potassium",
      "Calcium"];
    this.numIncorrect = 0;
  }

  handleGuess (index) {
    if (this.state.elementOptions[index] === this.state.correctElement) {
      // this guess is correct
      // increment score and transition to next question
      this.props.incrementScore();
      this.props.timer.reset(() => {
        var animation = document.querySelector(".Timer-Fill");
        animation.style.animation = "none";
        var _ = animation.offsetHeight;  // triger document reflow
        animation.style.animation = "";

        var label = document.getElementById("timer-label");
        label.textContent = "30 sec";
      });
      this.numIncorrect = 0;

      var outputOptions = Util.sample(this.elements, 4);
      this.setState({
        isClicked: false,
        elementOptions: outputOptions,
        correctElement: Util.sample(outputOptions, 1)[0]
      });

    } else {
      // this guess is incorrect
      // if this is the third time, end the game
      this.numIncorrect++;
      if (this.numIncorrect >= 3)
        this.props.gameOver();
    }
  }

  /* Returns what HTML code should be rendered to the screen*/
  render () {
    return (
      <div className="ElementOptions">
        <img src={require("../src/img/" + this.state.correctElement + ".png")} alt="Element image" height="200" width="200"/><br/>
        <p className="Helper-Text" onClick={this.props.openPopUp}>Need help? Click here for a periodic table!</p>
        <div className="column-container">
          <div className="column">
            <button className="Main-Page-Button" value={this.state.elementOptions[0]} onClick = {() => this.handleGuess(0)}>{this.state.elementOptions[0]}
              <img src={require("../src/img/drip.svg")} />
            </button>
            <br/>
            <button className="Main-Page-Button" value={this.state.elementOptions[1]} onClick = {() => this.handleGuess(1)}>{this.state.elementOptions[1]}
              <img src={require("../src/img/drip.svg")} />
            </button>
          </div>

          <div className="column">
            <button className="Main-Page-Button" value={this.state.elementOptions[2]} onClick = {() => this.handleGuess(2)}>{this.state.elementOptions[2]}
              <img src={require("../src/img/drip.svg")} />
            </button>
            <br/>
            <button className="Main-Page-Button" value={this.state.elementOptions[3]} onClick = {() => this.handleGuess(3)}>{this.state.elementOptions[3]}
              <img src={require("../src/img/drip.svg")} />
            </button>
          </div>
        </div>

        {/*For debugging purposes, displaying the correct answer*/}
        <h1>Correct Answer: {this.state.correctElement}</h1>
      </div>
    );
  }
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  closePopUp() {
    let popUp = document.querySelector(".Periodic-Table-Display");
    popUp.style.display = "none";
  }

  openPopUp() {
    let popUp = document.querySelector(".Periodic-Table-Display");
    popUp.style.display = "block";
  }

  render() {
    return (
      <div className="Main">
        <div className="Main-Header">
          <h1 className="Main-Title">Kids For Chemistry</h1>
        </div>
        <h2 className="Main-Subtitle">Identify The Atoms</h2>

        {/*This div is devoted to the Element Options section which includes the buttons, periodic table link, and photo*/}
        <ElementOptions
            elementOptions={this.props.elementOptions}
            correctElement={this.props.correctElement}
            incrementScore={() => this.incrementScore()}
            getScore      ={() => this.getScore()}
            openPopUp     ={() => this.openPopUp()}
            timer         ={this.props.timer}
            gameOver      ={() => this.props.gameOver()} />

        {/*This div is devoted to the Score section*/}
        <div className="Score-Box">
          <img src={testTube} className="Test-Tube"/>
          <div className="Score">{this.state.score}</div>
        </div>

        {/*This is div is devoted to the Timer section*/}
        <div className="Timer">
          <div className="Timer-Fill"></div>
          <p id="timer-label" className="Timer-Time">30 sec</p>
        </div>
        <div className="Periodic-Table-Display">
          {/*<img src={periodicTable} alt="Periodic Table Image"/>*/}
          <div className="Close-Button-Outer" onClick={() => this.closePopUp()}>
            <div className="Close-Button-Inner">
              <div className="Close-Button-X1"></div>
              <div className="Close-Button-X2"></div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default Main;
