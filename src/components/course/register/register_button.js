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
  }

  render () {
    return(
      <button type="button" className="btn btn-primary" onClick={() => this.onSubmit(this.props.registerInfo)}>Cadastrar</button>
    );
  }
}

export default RegisterButton;
