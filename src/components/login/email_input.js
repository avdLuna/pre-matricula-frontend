import React, {Component} from 'react';

class EmailInput extends Component {

  constructor(props){
    super(props);

    this.state = { email: '' };
  }

  render(){
    return(
         <input type="input" className="form-control" placeholder="Email @CCC"
           value={this.state.email}
           onChange = {(event) => this.updateEmail(event.target.value)}/>
       );
  };

  updateEmail(newEmail){
    this.setState({ email:newEmail });
    this.props.updateEmail(newEmail);
  };
}

export default EmailInput;
