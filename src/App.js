import React from 'react';
import periodicTable from './img/periodicTable.jpeg';
import './App.css';
import Main from './Main'
import FrontPage from './FrontPage'


const gameInfo = {
  elementOptions : ["Hydrogen","Helium","Lithium","Beryllium"],
  correctElement : "Hydrogen",
  isClicked: false,
  selectedElement : null,
  score : 0,
};

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = props;
  }

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
