import React, {Component} from 'react';
import  GoogleLogin  from 'react-google-login';

class LoginButton extends Component {

  constructor(props){
      super(props);

      this.state = {
        clicked: 'false',
       };
  }

  onSubmit(response){
    const token = response.Zi.access_token;
    const refreshToken = response.Zi.access_token;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  render(){
    const responseGoogle = (response) => {
      this.onSubmit(response);
      console.log(response);
    }
      return(
       <GoogleLogin
          clientId="824246316091-l1dhfehnq1c4cs1k3aaacsk79aufictv.apps.googleusercontent.com"
          className="btn btn-primary"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      );
    };
  };

export default LoginButton;
