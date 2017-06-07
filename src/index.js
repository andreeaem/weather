import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user2) {
  if (user2) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Sunny',
  lastName: 'Weather'
};

const user2 = false;

const element = (
  <h1>
    Hello, {formatName(user)}!
    {getGreeting(user2)}
  </h1>
);



ReactDOM.render(
  element,
  document.getElementById('root')
);
