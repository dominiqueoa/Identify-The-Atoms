import React from 'react';
import periodicTable from './img/periodicTable.jpeg';
import './Main.css';

class SubmitButton extends React.Component {

  render() {

    return <button id="submitButton" onClick={() => this.props.changeQuestion()}>Submit!</button>;
  }
}
//
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

  changeQuestion (){

    if(this.state.isClicked){
      if(this.state.selectedElement == this.state.correctElement){
        
        this.props.incrementScore();
      }
      var outputOptions = this.generateElementOptions(this.elements);
      this.setState({

        selectedElement: null,
        isClicked : false,
        elementOptions : outputOptions,
        correctElement : outputOptions[Math.floor(Math.random() * 4)],
      });
    }
  }

  pickElement(element) {

    this.setState({
      selectedElement : element,
    });
  }


  render (){

  return (

    <div id="ElementOptions">
      <img src ={require('/home/oblackmon/Documents/Eko/identify-the-atoms/src/img/' + this.state.correctElement + '.png')} alt="Useless Information" height="200" width="200"/><br/>
      <div onClick={() => this.setState({isClicked : true})}>
        <input type="radio" id="option1" name="elements" value={this.state.elementOptions[0]} onClick = {() => this.pickElement(this.state.elementOptions[0])}/>
        <label for="{this.state.elementOptions[0]}">{this.state.elementOptions[0]}</label><br/>

        <input type="radio" id="option2" name="elements" value="{this.state.elementOptions[1]}" onClick = {() => this.pickElement(this.state.elementOptions[1])}/>
        <label for="{this.state.elementOptions[1]}">{this.state.elementOptions[1]}</label><br/>

        <input type="radio" id="option3" name="elements" value="{this.state.elementOptions[2]}" onClick = {() => this.pickElement(this.state.elementOptions[2])}/>
        <label for="{this.state.elementOptions[2]}">{this.state.elementOptions[2]}</label><br/>

        <input type="radio" id="option4" name="elements" value="{this.state.elementOptions[3]}" onClick = {() => this.pickElement(this.state.elementOptions[3])}/>
        <label for="{this.state.elementOptions.element4}">{this.state.elementOptions[3]}</label><br/>

      </div>
      <h1>Correct Answer: {this.state.correctElement}</h1>
      <SubmitButton changeQuestion={() => this.changeQuestion()}/>
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

  incrementScore(){

    this.setState({
      score : this.state.score + 1,
    });
  }

  render() {
    return (
      <div className="Main">
        <div className="Main-Header">
          <h1 className="Main-Title">Identify The Atoms</h1>
          <h1 className="Main-Score">Score: {this.state.score}</h1>
        </div>
        <div className="column-container">
	        <div className="column">
	          
	          <ElementOptions elementOptions ={this.props.elementOptions} correctElement={this.props.correctElement} incrementScore={() => this.incrementScore()}/>
	        </div>

	        <div className="column">
	          <img className="periodicTable" src={periodicTable} alt="Extra not meaningful" height="200" width="400"/><br/>
	        </div>
        </div>  
      </div>
    );
  }
}

export default Main;