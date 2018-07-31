import React, {Component} from 'react';
import LoginButton from './login_button';

import './login.css';

class Login extends Component {

  constructor(props){
      super(props);
      /*
      this.state = {
        email: '',
        password: '',
        category: ''
       };
       */
  }
  /*
  updateEmail(newEmail){
    this.setState( {email:newEmail} );
  };

  updatePassword(newPassword){
    this.setState( {password:newPassword} );
  }

  updateCategory(newCategory){
    this.setState( {category:newCategory} );
  }
  */
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
