import React, {Component} from 'react';
import  GoogleLogin  from 'react-google-login';

class LoginButton extends Component {
  render(){
    const responseGooglePositive = (response) => {
      console.log(response);
      const msg = {
        email: response.profileObj.email,
        username: response.profileObj.name
      };
      let myHeaders = new Headers();
      myHeaders.append("X-Auth-Token", response.accessToken);
      myHeaders.append("Cache-Control", "no-cache");
      fetch("{{ env('BACKEND_URL') }}" + "auth/",  {method:"POST", headers: myHeaders, body: JSON.stringify(msg)})
      .then(r => {
      if (r.status == 200) {
        alert('Login efetuado com sucesso!');
      } else {
        alert('Não foi possível efetuar o login!');
      };
  });

    };
    
    const responseGoogleNegative = (response) => {
      console.log(response);
    };

    return(
      <GoogleLogin
      clientId="824246316091-l1dhfehnq1c4cs1k3aaacsk79aufictv.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGooglePositive}
      onFailure={responseGoogleNegative}/>
      );
    };
};

export default LoginButton;