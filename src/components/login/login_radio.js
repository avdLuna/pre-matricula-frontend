import React, {Component} from 'react';

class LoginRadio extends Component {

  constructor(props){
    super(props);

    this.state = { selectedOption: '' };
  }

  updateOption(option){
    this.setState({ selectedOption:option })
    this.props.updateCategory(option);
  }

  render(){
    return(
      <form>
      <div className="radio">
        <label className="form-check-label">
          <input type="radio" value="aluno" checked={this.state.selectedOption === 'aluno'}
            onChange={(event) => this.updateOption(event.target.value)}/>
          &nbsp; Aluno
        </label>
        <br/>
        <label className="form-check-label">
          <input type="radio" value="coordenador" checked={this.state.selectedOption === 'coordenador'}
            onChange={(event) => this.updateOption(event.target.value)}/>
          &nbsp; Coordenador
        </label>
      </div>
    </form>
    );
  };
}

export default LoginRadio;
