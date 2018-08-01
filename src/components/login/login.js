import React, {Component} from 'react';
import  GoogleLogin  from 'react-google-login';

class LoginButton extends Component {

/*
  onSubmit(response){
    const token = response.Zi.access_token;
    const refreshToken = response.Zi.access_token;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  onSubmit(response){
    fetch("http://localhost:8080/user")
    .then(data => console.log(data))
  }
*/

  onSubmit(){
    console.log("clicou");
    const myWindow = window.open("http://localhost:8080/login", "myWindow", "width=700, height=700");
    const timer = setInterval(function() {   
      if(myWindow.closed) {  
          clearInterval(timer);  
          alert('closed');
      }  
    }, 1000);
  }

  render(){
    /*
    const responseGoogle = (response) => {
      //this.onSubmit(response);
      console.log(response);

      <GoogleLogin
         clientId="824246316091-l1dhfehnq1c4cs1k3aaacsk79aufictv.apps.googleusercontent.com"
         className="btn btn-primary"
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
       />
    }
    */
      return(
       <button type="button" className="btn btn-primary" onClick={() => this.onSubmit()}>Login</button>
      );
    };
  };

export default LoginButton;
