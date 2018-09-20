import React from 'react';
import ListItem from './ListItem';

const OrderedList = (props) => (
  <ol>
    {props.users.map(user => (
     	<ListItem key={user.userName} user={user} />
     ))}
  </ol>
)

export default OrderedList;