import React from 'react';
import './App.css';

const Header = (props) => {
  
  const { username } = props;
  
  return (
		<React.Fragment>
    		<h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>  
    	</React.Fragment>
    );
}

export default Header;