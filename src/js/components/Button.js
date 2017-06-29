import React from 'react';
import ReactDOM from 'react-dom';


const btnStyle = {
  width:'150px',
  height:'50px',
  backgroundColor:'#3366ff',
  borderRadius:'5px'
}

export class Button extends React.Component{
  render(){
    return(
      <button
        style={btnStyle}> {this.props.label} </button>
    );
  }
}
