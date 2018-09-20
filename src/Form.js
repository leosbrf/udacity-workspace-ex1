import React from 'react';
import './App.css';

const Form = (props) => {
  
  const { user } = props;
  const disableSendButton = user.currentMessage === null || user.currentMessage.length === 0;
  
  return (
    <form className="input-group">
       	<input 
    		className="form-control" 
    		type='text' 
    		placeholder='Enter your message...' 
    		value={user.currentMessage} 
			onChange={(e) => props.onMessageChange(e, user)} />
		<div className="input-group-append">
			<button 
				className="btn submit-button" 
				onClick={(e) => props.onSendMessage(e, user)} 
				disabled={disableSendButton}>
				SEND
			</button>
		</div>
    </form>
    );
}

export default Form;