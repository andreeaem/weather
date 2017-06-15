import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';


//Create  component as a class, the newest way to build the component
//by using extends, I have access to all the attributes of React
class WeatherApp extends React.Component{
  render(){
    return(
      <h2>Hello to the weather app!</h2>
    );
  }
}



// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// function getGreeting(user2) {
//   if (user2) {
//     return <p>Hello, {formatName(user)}!</p>;
//   }
//   return <p>Hello, Stranger.</p>;
// }
//
// const user = {
//   firstName: 'Sunny',
//   lastName: 'Weather'
// };
//
// const user2 = false;
//
// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//     {getGreeting(user2)}
//   </h1>
// );
//
//
// function Application(){
//   return(
//     <div>
//       <h1>Andreea says hello from React</h1>
//       <p>This was rendered from the App component</p>
//     </div>
//   )
// };
//
//
ReactDOM.render(
  // element,
  <WeatherApp/>,
  document.getElementById('root')
);
