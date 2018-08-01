import React, {Component} from 'react';
import  GoogleLogin  from 'react-google-login';

class LoginButton extends Component {

  onSubmit(){
    console.log("clicou");
    var loginWindow = window.open("http://localhost:8080/login", "_blank", "width=700, height=700");
    const timer = setInterval(function() {   
      if(loginWindow.closed) {  
          clearInterval(timer);  
          console.log(loginWindow.Cookies);
      }
    }, 1000);
  }

  render(){
      return(
       <button type="button" className="btn btn-primary" onClick={() => this.onSubmit()}>Login</button>
      );
    };
  };

export default LoginButton;