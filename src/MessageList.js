import React from 'react';

const MessageList = (props) => {
  
  const { messages, owner } = props;
  const messageItem = messages.map((message, index) => {
    const className =  message.username === owner.username ? 'message sender' : 'message recipient';
    return (
      <li
      	key={index}
		className={className}>
			<p>{message.text}</p>
		</li>
      );
  });
  
  return ( 
    <ul className="message-list">
    	{messageItem}
    </ul>
    );
  
}

export default MessageList;