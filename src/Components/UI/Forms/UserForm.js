import React, { PureComponent } from 'react';
import TextInput from './TextInput';
import NumericInput from './NumericInput';
import Button from '../Button';

class UserForm extends PureComponent {
  
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    numberOfGames: 0
  }

  onFirstNameChanged = (name) => {
    this.setState((prevState) => {
      return { firstName: name };
    })
  }

  onLastNameChanged = (name) => {
    this.setState((prevState) => {
      return { lastName: name };
    })
  }

  onUserNameChanged = (userName) => {
    this.setState((prevState) => {
      return { userName: userName };
    });
  }

  onNumberOfGamesChanged = (numberOfGames) => {
    this.setState((prevState) => {
      return { numberOfGames: numberOfGames };
    });
  }

  onAddClick = () => {
    this.props.onAddUser(
      { 
        firstName: this.state.firstName, 
        lastName: this.state.lastName, 
        userName: this.state.userName,
        numberOfGames: this.state.numberOfGames
      });
  }

  render() {
    
    const { firstName, lastName, userName, numberOfGames } = this.state;

	const enableAdd = firstName && lastName && userName; 
        
    return (
		<React.Fragment>
          <TextInput placeholder='First Name' value={firstName} onChange={(e) => this.onFirstNameChanged(e.target.value)} />
          <TextInput placeholder='Last Name' value={lastName} onChange={(e) => this.onLastNameChanged(e.target.value)} />
		  <TextInput placeholder='Username' value={userName} onChange={(e) => this.onUserNameChanged(e.target.value)} />
		  <NumericInput placeholder='Number of Games' value={numberOfGames} onChange={(e) => this.onNumberOfGamesChanged(e.target.value)} />
          <Button text='Add' disabled={!enableAdd} onClick={() => this.onAddClick()} />
		</React.Fragment>
	)
  }
}


export default UserForm;