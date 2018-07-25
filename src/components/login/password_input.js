import React, {Component} from 'react';

class PasswordInput extends Component {

  constructor(props){
    super(props);

    this.state = { password: '' };
  }

  render(){
    return(
         <input type="password" className="form-control" placeholder="Senha"
           onChange = {(event) => this.updatePassword(event.target.value)}/>
    );
  };

  updatePassword(newPassword){
    this.setState({ password:newPassword });
    this.props.updatePassword(newPassword);
  };

}

export default PasswordInput;
