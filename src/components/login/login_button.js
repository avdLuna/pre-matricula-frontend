import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

let sucessfullyLogin = false;

const LoginButton = (props) => {

  if(sucessfullyLogin){
    return <Redirect to='/course/create' />
  }

  return(
    <button type="button" className="btn btn-primary" onClick={() => onSubmit(props.loginInfo)}>Login</button>
  );
};

function onSubmit(obj){
  console.log(obj);
  sucessfullyLogin = true;
}

export default LoginButton;
