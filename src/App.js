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

  switchToMain() {

    let mainScreen = document.querySelector(".Main");
    let frontPage = document.querySelector(".Front-Page");

    frontPage.style.display = "none";
    mainScreen.style.display = "block";
  }

  render() {
    return (
      <div className="App">
        <FrontPage className="Front-Page" screenTransition={() => this.switchToMain()}/>
        <Main className="Main" correctElement={gameInfo.correctElement} elementOptions={gameInfo.elementOptions} score={0}/>  
      </div>
    );
  }
}

export default App;
