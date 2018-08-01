import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import  GoogleLogin  from 'react-google-login';

class LoginButton extends Component {

  constructor(props){
      super(props);

      this.state = {
        redirectUser: false,
        redirectAdmin: false
       };
  }


   setRedirectAdmin(){
      this.setState({redirectAdmin: true})
  }

   setRedirectUser(){
      this.setState({redirectUser: true})
  }



  render(){
    let auth = false;
    const responseGooglePositive = (response) => {
      console.log(response);
      const msg = {
        email: response.profileObj.email,
        username: response.profileObj.name
      };
      let myHeaders = new Headers();
      localStorage.setItem("userToken", response.accessToken);
      myHeaders.append("X-Auth-Token", response.accessToken);
      myHeaders.append("Content-Type", "application/json;charset=UTF-8");
      const api_url = "http://localhost:8080/auth/";
      console.log(api_url);
      fetch(api_url,  {method:"POST", headers: myHeaders, body: JSON.stringify(msg)})
      .then(r => {
    console.log(r);
     if (r.status == 200) {
        alert('Login efetuado com sucesso!');  
      } else {
        alert('Não foi possível efetuar o login!');
      }
      return r;
    }).then( r => r.json()).then( parsedJSON => {
        if (parsedJSON.role == "COORDINATOR") {
          this.setRedirectAdmin();
        } else {
          this.setRedirectUser();
        }
     }
    )
        

    };

    const responseGoogleNegative = (response) => {
      console.log(response);
        alert('Não foi possível efetuar o login!');
    };

    const redirectUser  = this.state.redirectUser;
    const redirectAdmin = this.state.redirectAdmin;

    if (redirectUser) {
      return <Redirect to='/user/new/enrollment'/>;
    }
    if (redirectAdmin) {
      return <Redirect to='/admin/course'/>;
    }

    return(
      <GoogleLogin className="btn btn-primary"
      clientId="824246316091-l1dhfehnq1c4cs1k3aaacsk79aufictv.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGooglePositive}
      onFailure={responseGoogleNegative}/>

      );
    };
};

export default LoginButton;
