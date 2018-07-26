import React, {Component} from 'react';

class ListCourse extends Component {

  constructor(props){
      super(props);

      this.state = {
        teste: ''
       };
  }

  render(){
    return (
      <div>
        <h1>Lista Funciona</h1>
    </div>
    );
  };
};

export default ListCourse;
