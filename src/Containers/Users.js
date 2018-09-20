import React, { Component } from 'react';
import UserForm from '../Components/UI/Forms/UserForm';
import OrderedList from '../Components/UI/OrderedList';

class Users extends Component {
  
  state = {
    users: [],
    showDuplicatedUser: false
  }

  addUserHandler = (user) => {
    //fazer validacao antes de alterar o estado
    const existingUserIndex = this.state.users.findIndex(u => u.userName === user.userName);
    
    let newUsers = [...this.state.users];
    
    if (existingUserIndex < 0) {
      newUsers = newUsers.concat(user);
    }
    
    this.setState((prevState) => {
      return { users: newUsers, showDuplicatedUser: existingUserIndex >= 0 }
    });
  }
  
  render() {
    
    const { users, showDuplicatedUser } = this.state;
	let duplicatedUserMessage = '';

    if (showDuplicatedUser) {
      duplicatedUserMessage = <div className='error'>Can not insert! Duplicated user name!</div>;
    }

    return (
      <React.Fragment>
        <UserForm 
      		onAddUser={(firstName, lastName, userName, numberOfGames) => this.addUserHandler(firstName, lastName, userName, numberOfGames)} />
<div>
		{duplicatedUserMessage}
</div>
        <OrderedList users={users} />
      </React.Fragment>
	)
  }
}

export default Users;