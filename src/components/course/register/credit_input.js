import React, {Component} from 'react';

class CreditInput extends Component {

  constructor(props) {
    super(props);
    this.state = {credits: ''}
  }

  render() {
    return (
      <input type="input" className="form-control" placeholder="Nº de créditos"
        value={this.state.credits}
        onChange = {(event) => this.updateCredits(event.target.value)}/>
    );
  }

  updateCredits(newCredit){
    this.setState({ credits:newCredit });
    this.props.updateCredits(newCredit);
  };
}

export default CreditInput;
