import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import  GoogleLogin  from 'react-google-login';

class LoginButton extends Component {

  constructor(props){
      super(props);

      this.state = {
        clicked: 'false',
       };
  }

  deuBom(response){
    fetch('http://localhost:8080/users')
    .then(data => console.log(data))
  }

  teste(){
    fetch
  }

  render(){
    const responseGoogle = (response) => {
      this.deuBom(response);
      console.log(response);
    }
      return(
        /*
        <a href='http://localhost:8080/login'>
          <button type="button" className="btn btn-primary" onClick={() => this.onSubmit(this.props.loginInfo)}>Login</button>
       </a>
       */
       <GoogleLogin
          clientId="824246316091-l1dhfehnq1c4cs1k3aaacsk79aufictv.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      );
    };
  };

export default LoginButton;
