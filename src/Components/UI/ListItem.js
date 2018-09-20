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
	const numberOfGames = show ? this.props.user.numberOfGames : 0;
    
    return (
      	<React.Fragment>
          <li>
              {this.props.user.userName} played {numberOfGames} games.
          </li>
          <Button text={buttonText} onClick={() => this.toggleShow()} />
		</React.Fragment>
	);
  }
}

export default ListItem;