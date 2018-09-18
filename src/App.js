import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './Containers/ShoppingList';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        
		<ShoppingList header='Awesome Shopping List!' />
      </div>
    );
  }
}

export default App;
