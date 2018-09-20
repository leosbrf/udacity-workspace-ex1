import React from 'react';

const Button = (props) => (
  <button disabled={props.disabled} onClick={props.onClick}>
    {props.text}
  </button>
)

export default Button;