import React, { PureComponent } from 'react';
import Button from './Button';

class ListItem extends PureComponent {
  state = {
  	show: false
	}

  toggleShow = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  }

  render() {
    
    const { show } = this.state;
    const buttonText = show ? 'Hide' : 'Show';
    
    return (
      	<React.Fragment>
          <li>
              {this.props.user.userName} played {this.props.user.numberOfGames} games.
          </li>
          <Button text={buttonText} onClick={() => this.toggleShow()} />
		</React.Fragment>
	);
  }
}

export default ListItem;