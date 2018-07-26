import React, {Component} from 'react';

class CodeInput extends Component{

  constructor(props) {
      super(props);
      this.state = { code:'' };
  }

  render() {
    return (
      <input type="input" className="form-control" placeholder="Código da disciplina"
        value={this.state.code}
        onChange = {(event) => this.updateCode(event.target.value)}/>
    );
  }

  updateCode(newCode){
    this.setState({ code:newCode });
    this.props.updateCode(newCode);
  };
}

export default CodeInput;
