import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class LoginButton extends Component {

  constructor(props){
      super(props);

      this.state = {
        clicked: 'false',
       };
  }

  onSubmit(obj){
    console.log(obj);
    this.setState( {clicked:'true'} );
    this.props.history.push("/course");
  }

  render(){
      return(
        <button type="button" className="btn btn-primary" onClick={() => this.onSubmit(this.props.loginInfo)}>Login</button>
      );
    };
  };

export default LoginButton;
