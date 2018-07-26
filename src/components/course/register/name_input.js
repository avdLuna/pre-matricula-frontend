import React, {Component} from 'react';

class NameInput extends Component {

  constructor(props) {
    super(props);
    this.state = { name:''};
  }

 render(){
   return(
        <input type="input" className="form-control" placeholder="Nome da disciplina"
          value={this.state.name}
          onChange = {(event) => this.updateName(event.target.value)}/>
    );
  }

  updateName(newName){
    this.setState({ name:newName });
    this.props.updateName(newName);
  };

}

export default NameInput;
