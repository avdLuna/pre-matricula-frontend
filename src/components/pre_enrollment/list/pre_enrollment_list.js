import React, {Component} from 'react';
import UserSidenav from '../../menu/sidenav/user/user_sidenav'
import Navbar from '../../menu/navbar/navbar'



class PreEnrollmentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div>
        <Navbar />
        <UserSidenav />
      </div>
      <div>
        <h1>Pre Matricula funciona</h1>
      </div>
    </div>
    );
  }
}

export default PreEnrollmentList;
