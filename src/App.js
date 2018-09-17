import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    
  componentDidMount() {
    if (!this.state.gameLoaded) {
      this.loadGame();
    }
  }
  nextNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  nextProposedAnswer = (value1, value2, value3) => {
    return Math.floor(Math.random() * 3) + value1 + value2 + value3;
  }

  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    proposedAnswer: 0,
    numQuestions: -1,
    numCorrect: 0,
    gameLoaded: false
  }

  setNextRound = (incrementNumCorrect) => {
    let nextValue1 = this.nextNumber();
    let nextValue2 = this.nextNumber();
    let nextValue3 = this.nextNumber();
    let nextProposedAnswer = this.nextProposedAnswer(nextValue1, nextValue2, nextValue3);
    
    this.setState((currentState) => (
      {
        value1: nextValue1,
        value2: nextValue2,
        value3: nextValue3,
        proposedAnswer: nextProposedAnswer,
        numQuestions: currentState.numQuestions + 1,
        numCorrect: currentState.numCorrect + incrementNumCorrect,
        gameLoaded: true
      }));
  }

  answer = (userAnswer) => {
    let sum = this.state.value1 + this.state.value2 + this.state.value3;
    let isProposedAnswerCorrect = sum === this.state.proposedAnswer;
	let incrementCorrectAnswer = 0;
    
    //XNOR operation
    if (isProposedAnswerCorrect === userAnswer)
      incrementCorrectAnswer = 1;
    
    this.setNextRound(incrementCorrectAnswer);
  }

  loadGame = () => {
    this.setNextRound(0);
  }

  render() {   
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.answer(true)}>True</button>
          <button onClick={() => this.answer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
