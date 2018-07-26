import React, {Component} from 'react';
import NameInput from './name_input';
import CodeInput from './code_input';
import CreditInput from './credit_input';
import PPCRadio from './ppc_radio';
import RegisterButton from './register_button';
import './register_course.css';

class RegisterCourse extends Component {

  constructor(props){
      super(props);

      this.state = {
        name: '',
        code:'',
        credits:'',
        ppc:''
       };
  }

  updateName(newName){
    this.setState( {name:newName} );
  };

  updateCode(newCode){
    this.setState( {code:newCode} );
  }

  updateCredits(newCredit){
    this.setState( {credits:newCredit} );
  }

  updatePPC(newPPC){
    this.setState( {ppc:newPPC} );
  }


  render(){
    return (
      <div id="register_component" >
        <h1>Cadastro de disciplina</h1>
        <NameInput updateName={ newName => this.updateName(newName) } />
        <br />
        <div className="row">
          <div className="col">
            <CodeInput updateCode={ newCode => this.updateCode(newCode) } />
          </div>
        <div className="col">
          <CreditInput updateCredits={ newCredit => this.updateCredits(newCredit) }/>
        </div>
      </div>
      <br/>
      <PPCRadio updatePPC={ newPPC => this.updatePPC(newPPC) }  />
      <br/>
      <RegisterButton registerInfo={this.state} />
    </div>
    );
  };
};

export default RegisterCourse;
