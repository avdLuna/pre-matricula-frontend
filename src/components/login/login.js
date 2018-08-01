import React, {Component} from 'react';
import LoginButton from './login_button';

import './login.css';

class Login extends Component {

  // RESOLVER ESSE . NA IMAGEM URGENTE !!
  render(){
    return (
      <div>
         . <img src="./login_images/login_background.jpeg" id="login_background"  />
      <div id="login_component">
        <img src="./login_images/cc_logo.png" id="login_image"  />
        <LoginButton />
      </div>
    </div>
    );
  };
};

export default Login;