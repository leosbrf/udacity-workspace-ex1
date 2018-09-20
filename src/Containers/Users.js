import React, { Component } from 'react';
import UserForm from '../Components/UI/Forms/UserForm';
import OrderedList from '../Components/UI/OrderedList';

class Users extends Component {
  
  state = {
    users: []    
  }

  addUserHandler = (user) => {
    //fazer validacao antes de alterar o estado
    this.setState((prevState) => {
      return { users: prevState.users.concat(user) }
    });
  }
  
  render() {
    
    const { users } = this.state;
    
    return (
      <React.Fragment>
        <UserForm 
      		onAddUser={(firstName, lastName, userName, numberOfGames) => this.addUserHandler(firstName, lastName, userName, numberOfGames)} />
        <OrderedList users={users} />
      </React.Fragment>
	)
  }
}

export default Users;