import React from 'react';

const TextInput = (props) => {
  return (
  	<input type='text' placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} />
  );
}

export default TextInput;