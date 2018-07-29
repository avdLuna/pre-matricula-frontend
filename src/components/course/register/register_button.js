import React, {Component} from 'react'

class RegisterButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: 'false',
     };
  }

  onSubmit(obj){
    console.log(obj);
    this.setState( {clicked:'true'} );
    /* Funcão genérica para enviar dados pro backend
    fetch('apiurl', {
      method: POST,
      body: JSON.stringify(obj)
    });
    */
  }

  render () {
    return(
      <button type="button" className="btn btn-primary" onClick={() => this.onSubmit(this.props.registerInfo)}>Cadastrar</button>
    );
  }
}

export default RegisterButton;
