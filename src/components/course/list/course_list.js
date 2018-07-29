import React, {Component} from 'react';
import AdminSidenav from '../../menu/sidenav/admin/admin_sidenav'
import Navbar from '../../menu/navbar/navbar'

class CourseList extends Component {

  constructor(props){
      super(props);

      this.state = {
        newPPCCourses: [],
        oldPPCCourses: []
       };
  }

  componentDidMount(){
    this.fetchNewPPC();
    this.fetchOldPPC();
  }

  fetchNewPPC(){
    fetch('http://analytics.ufcg.edu.br/pre/ciencia_da_computacao_i_cg/disciplinas')
    .then( courses => courses.json() )
    .then( parsedJSON => {
      this.setState({ newPPCCourses: parsedJSON })
      console.log(this.state.newPPCCourses);
    })
    .catch(err => console.log("fudeu",err))
  }

  fetchOldPPC(){
    fetch('http://analytics.ufcg.edu.br/pre/ciencia_da_computacao_d_cg/disciplinas')
    .then( courses => courses.json() )
    .then( parsedJSON => {
      this.setState({ oldPPCCourses: parsedJSON })
      console.log(this.state.oldPPCCourses);
    })
    .catch(err => console.log("fudeu",err))
  }

  render(){
    return (
      <div>
        <Navbar />
        <AdminSidenav />
        <h1>Lista Funciona</h1>
    </div>
    );
  };
};

export default CourseList;
