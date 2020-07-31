import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: "0"
    }
  }

  updateScreen() {
    return this.state.buttons;
  }

  buttonPress(e) {
    this.setState({buttons: (this.state.buttons === "0") ? e.target.value:this.state.buttons + e.target.value});
  }

  calculate() {
    this.setState({buttons: this.doCalculation()});
  }

  doCalculation() {
    return new Function('return ' + this.state.buttons)();
  }

  clear() {
    this.setState({buttons: "0"});
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator--screen">
          {this.updateScreen()}
        </div>
        <div className="Calculator--functions">
          <div className="Calculator--functions-wrap"><button onClick={(e) => this.clear(e)} value="c">Clear</button></div>
        </div>
        <div className="Calculator--buttons">
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="7">7</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="8">8</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="9">9</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="4">4</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="5">5</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="6">6</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="1">1</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="2">2</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="3">3</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value="0">0</button></div>
          <div className="Calculator--button-wrap"><button onClick={(e) => this.buttonPress(e)} value=".">.</button></div>
          <div className="Calculator--button-wrap"><button className="Calculator--button-equals" onClick={(e) => this.calculate(e)} value="=">=</button></div>
        </div>
        <div className="Calculator--equations">
          <div className="Calculator--equation-wrap"><button onClick={(e) => this.buttonPress(e)} value="/">÷</button></div>
          <div className="Calculator--equation-wrap"><button onClick={(e) => this.buttonPress(e)} value="*">x</button></div>
          <div className="Calculator--equation-wrap"><button onClick={(e) => this.buttonPress(e)} value="-">-</button></div>
          <div className="Calculator--equation-wrap"><button onClick={(e) => this.buttonPress(e)} value="+">+</button></div>
        </div>
      </div>
    );
  }
}

export default App;
