import React from 'react';

const profile = props => {
  let message = `${props.user.name}'s favorite movie is ${props.favoriteMovie.name}.`
  return (
    <div>{message}</div>
  );
}

export default profile;