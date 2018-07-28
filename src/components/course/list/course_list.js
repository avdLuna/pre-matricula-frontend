import React, {Component} from 'react';
import AdminSidenav from '../../menu/sidenav/admin/admin_sidenav'
import Navbar from '../../menu/navbar/navbar'

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
        <Navbar />
        <AdminSidenav />
        <h1>Lista Funciona</h1>
    </div>
    );
  };
};

export default ListCourse;
