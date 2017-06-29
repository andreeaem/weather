import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import WeatherIcons from 'react-weathericons';
import {Button} from './components/Button.js'

const divStyle = {
  backgroundColor: '#00e6b8',
};

const Icon = props => (
  <svg width="22" height="22" viewBox="0 0 1024 1024" className='theIcon'>
    <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
  </svg>
);


class Welcome extends React.Component{
  render(){
    return <p className='welcome'>Hello, {this.props.name}</p> ;
  }
}

//Create  component as a class, the newest way to build the component
//by using extends, I have access to all the attributes of React
class WeatherApp extends React.Component{
  render(){
    const myStyle ={
      color: this.props.bgcolor,
    };
    return(
      <div style={myStyle}>
        <h2 style={divStyle}> Hello to the {this.props.name} app! </h2>
        <Button label='Click me' bgcolor='red'/>
        <Welcome name="Maria" bgcolor='#ccc'/>
        <Welcome name="Ana"/>
        <Welcome name = "Iulia"/>
        <br/>
        <div style={divStyle} >
            <Icon/>
            <h2>text</h2>
        </div>

      </div>
    );
  }
}

//export default Icon;
const element = <WeatherApp name="weather Dee"/>;

ReactDOM.render(
  element,  document.getElementById('root')
);
