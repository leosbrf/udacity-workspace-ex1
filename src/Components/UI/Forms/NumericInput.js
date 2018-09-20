import React from 'react';

const NumericInput = (props) => {
  return (
  	<input type='number' placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} />
  );
}

export default NumericInput;