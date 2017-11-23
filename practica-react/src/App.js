import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
  }
  componentDidMount()
  {
    this.setState({count: 1})
  }
  handleCountClick(e)
  {
    if(e.target.id === "add")
    {
      this.setState({count: this.state.count + 1});
    }
    else if(e.target.id === "subtract" && this.state.count>0)
    {
      this.setState({count: this.state.count - 1});
    }
    else
    {
      this.setState({count: 0});
    }
  }
  handleResultClick(e)
  {
    if(e.target.id === "result")
    {
      this.setState({result: this.state.number1 + this.state.number2});
    }
  }
  handleInputChanged(e)
  {
    if(e.target.id === "number1")  {
      this.setState({
        number1: Number(e.target.value),
        result: Number(e.target.value)+ this.state.number2
      });
    }
    else if(e.target.id==="number2")
    {
      this.setState({number2: Number(e.target.value),result: Number(e.target.value)+ this.state.number1});
    }

  }

  render() {
    console.log('Ejecuta Render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subtract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>
        <h2>Calculator</h2>
          <p>
            <input id="number1" type="number" value = {this.state.number1} onChange = {this.handleInputChanged}/>
            +
            <input id="number2" type="number" value = {this.state.number2} onChange={this.handleInputChanged}/>
            <button id="result" onClick={this.handleResultClick}>Result</button>
          </p>
          <h2>Result: {this.state.result}</h2>

      </div>
    );
  }
}

export default App;
