import React from 'react';

const InputText = (props) => {
  return (
     <input
		type="text"
		placeholder={props.placeholder}
		value={props.value}
		onChange={(event) => props.onChange(event.target.value)}
      />
    );
}

export default InputText;