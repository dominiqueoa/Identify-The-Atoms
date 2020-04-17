import React from 'react';
import testTube from './img/test-tube.svg';
import './Main.css';


class ElementOptions extends React.Component {
  
  constructor (props){
    super(props);
    this.state = props;
    this.elements = ["Hydrogen", 
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
  }

  /*Takes in an array of options and returns a randomly selected, 4 element subset of the original array*/
  generateElementOptions(elementArr) {
    var copyElementArr = Array.from(elementArr);
    var outputOptions = [];
    var elementIdx = 0;

    for(var i = 0; i < 4; i++){

      elementIdx = Math.floor(Math.random() * copyElementArr.length);
      outputOptions.push(copyElementArr[elementIdx]);
      copyElementArr.splice(elementIdx, 1);

    }

    return outputOptions;
  }

  /*Event Handler for what should occur when a question should change*/
  changeQuestion (index){

  	if(this.state.elementOptions[index] === this.state.correctElement){

  		this.props.incrementScore();
  	}

  	var outputOptions = this.generateElementOptions(this.elements);
  	this.setState({

    	isClicked : false,
    	elementOptions : outputOptions,
    	correctElement : outputOptions[Math.floor(Math.random() * 4)],
  	});
  }

  /* Returns what HTML code should be rendered to the screen*/
  render (){

  return (

    <div className="ElementOptions">
      <img src ={require('/home/oblackmon/Documents/Eko/identify-the-atoms/src/img/' + this.state.correctElement + '.png')} alt="Useless Information" height="200" width="200"/><br/>
      <a className="Helper-Text">Need help? Click here for a periodic table!</a>
	  	<div className="column-container">
	      	<div className="column">
		    	<button className="Main-Page-Button" value={this.state.elementOptions[0]} onClick = {() => this.changeQuestion(0)}>{this.state.elementOptions[0]}</button>
				<br/>
				<button className="Main-Page-Button" value={this.state.elementOptions[1]} onClick = {() => this.changeQuestion(1)}>{this.state.elementOptions[1]}</button>
		    </div>

		    <div className="column">
		    	<button className="Main-Page-Button" value={this.state.elementOptions[2]} onClick = {() => this.changeQuestion(2)}>{this.state.elementOptions[2]}</button>
				<br/>
				<button className="Main-Page-Button" value={this.state.elementOptions[3]} onClick = {() => this.changeQuestion(3)}>{this.state.elementOptions[3]}</button>
		    </div>
	    </div>

		{/*For debugging purposes, displaying the correct answer*/}
	    <h1>Correct Answer: {this.state.correctElement}</h1>
     </div>
    );
  }
}
//
class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = props;
  }

  /*Increases the score by 1*/
  incrementScore(){

    this.setState({
      score : this.state.score + 1,
    });
  }

  render() {
    return (
      <div className="Main">
        <div className="Main-Header">
          <h1 className="Main-Title">Kids For Chemistry</h1>
        </div>
        <h2 className="Main-Subtitle">Identify The Atoms</h2>
        
    	{/*This div is devoted to the Element Options section which includes the buttons, periodic table link, and photo*/}
        <ElementOptions elementOptions ={this.props.elementOptions} correctElement={this.props.correctElement} incrementScore={() => this.incrementScore()}/>
        
        {/*This div is devoted to the Score section*/}
        <div className="Score-Box">
    		<img src={testTube} className="Test-Tube"/>
    		<div className="Score">{this.state.score}</div>
        </div>

        {/*This is div is devoted to the Timer section*/}
        <div className="Timer">
        	<div className="Timer-Fill"></div>
        	<p className="Timer-Time">30  sec</p>
        </div>
      </div>  
    );
  }
}

export default Main;