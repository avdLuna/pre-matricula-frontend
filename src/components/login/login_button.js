import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom';

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
  }

  render(){
      return(
        <Link to='/course/register'>
          <button type="button" className="btn btn-primary" onClick={() => this.onSubmit(this.props.loginInfo)}>Login</button>
       </Link>
      );
    };
  };

export default LoginButton;
