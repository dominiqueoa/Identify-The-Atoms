import React from 'react';
import periodicTable from './img/periodicTable.jpeg';
import './App.css';
import Main from './Main'
import FrontPage from './FrontPage'


/*Core game information for managing state*/
const gameInfo = {
  elementOptions: ["Hydrogen","Helium","Lithium","Beryllium"],
  correctElement: "Hydrogen",
  isClicked: false,
  score: 0,
  numIncorrect: 0
};


{/*This class functions as a controller class for the different screens of the application. 
  All screens of the application are stored inside of this component.*/}
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
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
        <FrontPage className="Front-Page" screenTransition={() => this.switchToScreen("Front-Page", "Main")}/>
        <Main className="Main" correctElement={gameInfo.correctElement} elementOptions={gameInfo.elementOptions} score={0}/>  
      </div>
    );
  }
}

export default App;
