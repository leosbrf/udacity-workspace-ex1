import React, {Component} from 'react';
import ListItems from '../Components/ListItems';
import Button from '../Components/UI/Button';
import InputText from '../Components/UI/Forms/InputText';

class ShoppingList extends Component {
  
  state = {
    value: '',
    items: [],
  };

  handleChange = value => {
    this.setState((prevState) => {
      return { value: value };
    });
  }
  
	addItem = (event) => {
      event.preventDefault();
      this.setState((prevState) => {
        return { items: [...prevState.items, this.state.value] };
      });
    }
    
    deleteLastItem = () => {
      this.setState((prevState) => {
        return { items: this.state.items.slice(0, -1) };
      });
    }
    
  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };
                  
  render() {
    const { value, items } = this.state;
    const { header } = this.props;
	return (
      <React.Fragment>
      	  <h2>{header}</h2>
          <form onSubmit={this.addItem}>
			<InputText
				placeholder='Enter New Item'
				value={value}
				onChange={this.handleChange} />
            
            <Button onClick={this.addItem} disable={this.inputIsEmpty()} text='Add' />
          </form>  

        <Button onClick={this.deleteLastItem} disable={this.noItemsFound()} text='Delete Last Item' />
        <ListItems items={items} />
      </React.Fragment>
	);
  }
}

export default ShoppingList;