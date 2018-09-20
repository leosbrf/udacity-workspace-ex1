import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import MessageList from './MessageList';

//const users = [{ username: 'Amy', currentMessage: '' }, { username: 'John', currentMessage: '' }];

class ChatApp extends Component {
  
  state = {
    users: [{ username: 'Amy', currentMessage: '' }, { username: 'John', currentMessage: '' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }
  
  onMessageChanged = (message, user) => {
    let index = this.state.users.findIndex(u => u.username === user.username);
    let usersShallowCopy = [...this.state.users];
    let userCopy = {...user};
    userCopy.currentMessage = message;
    usersShallowCopy[index] = userCopy;
    
    this.setState((prevState) => {
      return { users: usersShallowCopy }
    });
  }

  onSendMessage = (e, sender) => {
    e.preventDefault();
    //atualizar o currentMessage para blank
    let index = this.state.users.findIndex(u => u.username === sender.username);
    let usersShallowCopy = [...this.state.users];
    let userCopy = {...sender};
    userCopy.currentMessage = '';
    usersShallowCopy[index] = userCopy;
    
    let messagesCopy = this.state.messages.concat([{ username: sender.username, text: sender.currentMessage }]);
    
    this.setState((prevState) => {
      return { users: usersShallowCopy, messages: messagesCopy }
    });
  }

  updateState = (message, user) => {
    
  }

  render() {
    const { users, messages } = {...this.state};

	const chats = users.map(user => {
      return (
        <div key={user.username} className="chat-window">
			<Header username={user.username} />
			<MessageList messages={messages} owner={user} />
			<div>
              <Form 
                  user={user} 
                  onMessageChange={(e, user) => this.onMessageChanged(e.target.value, user)} 
                  onSendMessage={(e, user) => this.onSendMessage(e, user)} />
			</div>
		</div>
        )
    });

    return (
      <div className="App">
        <div className="container">
			{ chats }
        </div>
      </div>
	);
  }
}

export default ChatApp;