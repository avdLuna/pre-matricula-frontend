import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import  GoogleLogin  from 'react-google-login';

class LoginButton extends Component {

  constructor(props){
      super(props);

      this.state = {
        redirect: false
       };
  }

   setRedirect(){
      this.setState({redirect: true})
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
      myHeaders.append("X-Auth-Token", response.accessToken);
      localStorage.setItem('userToken', response.accessToken);
      fetch("{{ env('BACKEND_URL') }}" + "auth/",  {method:"POST", headers: myHeaders, body: JSON.stringify(msg)})
      .then(r => {
     if (r.status == 200) {
        alert('Login efetuado com sucesso!');
        this.setRedirect();
      } else {
        alert('Não foi possível efetuar o login!');
      };
  });


    };

    const responseGoogleNegative = (response) => {
      console.log(response);
        alert('Não foi possível efetuar o login!');
    };

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/user/new/enrollment'/>;
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
